import { AuthRequest } from "../middlewares/authMiddleware.js";
import { Response } from "express";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";
import { Generation } from "../models/Generation.js";

// POST /api/posts/generate
export const generatePost = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { prompt, tone, generateImage } = req.body;

    // Validate environment variables
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const pollinationsApiKey = process.env.POLLINATIONS_API_KEY;

    if (!geminiApiKey) {
      res.status(400).json({
        message: "Gemini API key not found.",
      });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey: geminiApiKey,
    });

    // 1. Generate post using Gemini
    const textResponse = await ai.interactions.create({
      model: "gemini-2.5-flash",
      input: `
        Generate a ${tone} social media post about: "${prompt}".
        Include relevant hashtags.

        Return JSON with:
        {
          "content": "Social media post",
          "imagePrompt": "Detailed image generation prompt"
        }
      `,
    });

    // 2. Parse Gemini response
    const rawText = textResponse.output_text || "";

    let content = rawText;
    let imagePrompt = prompt;

    try {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);

      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);

        content = parsed.content || rawText;
        imagePrompt = parsed.imagePrompt || prompt;
      }
    } catch (error) {
      console.error("Gemini JSON parsing error:", error);
    }

    let mediaUrl = "";

    // 3. Generate image using Pollinations
    if (generateImage) {
      if (!pollinationsApiKey) {
        res.status(400).json({
          message: "Pollinations API key not found.",
        });
        return;
      }

      const imageResponse = await axios.get(
        `https://gen.pollinations.ai/image/${encodeURIComponent(imagePrompt)}`,
        {
          params: {
            model: "black-forest-labs/flux.1-schnell",
            width: 1024,
            height: 1024,
            seed: -1,
          },
          headers: {
            Authorization: `Bearer ${pollinationsApiKey}`,
          },
          responseType: "arraybuffer",
          timeout: 180000,
        },
      );

      // 4. Convert image response to Buffer
      const imageBuffer = Buffer.from(imageResponse.data);

      // 5. Upload image to Cloudinary
      const uploadResult = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "social-media-posts",
            resource_type: "image",
            format: "png",
          },
          (error, result) => {
            if (error) return reject(error);
            if (!result) {
              return reject(new Error("Cloudinary upload returned no result"));
            }
            resolve(result);
          },
        );

        Readable.from(imageBuffer).pipe(uploadStream);
      });

      // 6. Get permanent Cloudinary URL
      mediaUrl = uploadResult.secure_url;
    }
    // Save generation in MongoDB
    const generation = await Generation.create({
      user: req.user?._id,
      prompt,
      content,
      mediaUrl,
      mediaType: mediaUrl ? "image" : undefined,
      tone,
    });

    // 7. Return response
    res.status(200).json(generation);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error generating post",
      error: error.message,
    });
  }
};

//Get Generations
//GET /api/get/generations
export const getGenerations = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {};

//Get post
//Get /api/posts
export const getPosts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {};

//Schedule post
//POST /api/posts
export const schedulePosts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {};
