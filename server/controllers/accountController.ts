import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware.js";
import { Account } from "../models/Accounts.js";
import zernio from "../config/zernio.js";

//Get al accounts
//GET /api/accounts
export const getAccounts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const accounts = await Account.find({ user: req.user._id });
    res.json(accounts);
  } catch (error: any) {
    res.status(500).json({ message: error?.message || "Server error" });
  }
};

//Add account
//POST  /api/accounts
export const addAccount = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { platfrom, handle, avatarUrl } = req.body;

    const account = await Account.create({
      user: req.user._id,
      platfrom,
      handle,
      avatarUrl,
    });
    res.status(201).json(account);
  } catch (error: any) {
    res.status(500).json({ message: error?.message || "Server error" });
  }
};
//Disconnect account
//DELETE  /api/accounts/:id
export const dissconnectAccount = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const account = await Account.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!account) {
      res.status(404).json({ message: "Account not found" });
      return;
    }
    if (account.zernioAccountId) {
      try {
        await zernio.accounts.deleteAccount({
          path: { accountId: account.zernioAccountId },
        });
      } catch (error: any) {
        res
          .status(500)
          .json({ message: error?.reposnse?.data?.message || error?.message });
        return;
      }
    }
    await account.deleteOne();
    res.json({ message: "Account disconnect successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error?.message || "Server error" });
  }
};
