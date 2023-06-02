import express, { Request, Response } from 'express';

const app = express();
const port = 8080;



app.get("/", (req: Request, res: Response) => {
    res.send(/*html*/`
        <h1>Hello World!</h1>
    `);
})



app.listen(port, () => {
    console.log("App listening on port", port)
})