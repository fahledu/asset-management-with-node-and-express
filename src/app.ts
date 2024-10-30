import express, { Request, Response } from "express";
import { getUser } from "./controllers/user-controller";

const app = express();

function createApp() {

    app.get('/', getUser);

    return app;
};

export default createApp;