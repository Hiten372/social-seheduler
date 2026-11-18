import { AuthRequest } from "../middlewares/authMiddleware.js";
import { Response } from "express";

//Generate post
//POST /api/posts/generate
export const generatePost = async (req: AuthRequest, res: Response):Promise<void>=> {};


//Get Generations
//GET /api/get/generations
export const getGenerations = async (req: AuthRequest, res: Response):Promise<void>=> {};

//Get post
//Get /api/posts
export const getPosts = async (req: AuthRequest, res: Response):Promise<void>=> {};

//Schedule post
//POST /api/posts
export const schedulePosts = async (req: AuthRequest, res: Response):Promise<void>=> {};