import express, { Request, Response } from "express";

const app = express();

function createApp() {

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World')
    })

    return app;
};

export default createApp;