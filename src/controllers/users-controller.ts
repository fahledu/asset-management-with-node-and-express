import { Request, Response } from "express";
import { getUsersService } from "../services/users-services";
import { ok } from "../utils/http-helper";

export const getUser = async (req:Request, res: Response) => {

    const data = await getUsersService();

    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
};