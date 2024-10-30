import { Request, Response } from "express";
import { getUsersService } from "../services/users-services";

export const getUser = async (req:Request, res: Response) => {

    const data = await getUsersService();

    res.status(200).json(data);
};