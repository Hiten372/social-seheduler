import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware.js";
import { ActivityLog } from "../models/ActivityLog.js";

// Get all activity
//GET /api/activity

export const getActivity = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const activity = await ActivityLog.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(10).populate("relatedPost","content")
  } catch (error) {}
};
