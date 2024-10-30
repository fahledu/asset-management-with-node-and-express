import express, { Request, Response } from "express";
import router from "./routers";

const app = express();

function createApp() {

    app.use('/api', router);

    return app;
};

export default createApp;