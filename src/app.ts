import express, { Request, Response } from 'express';
import { DMX, ArtnetDriver}  from "dmx-ts";

const app = express();
const port = 8080;

const dmx = new DMX();
const enttecIP = "10.5.200.119";


const run = async () => {
    const universe = await dmx.addUniverse('demo', new ArtnetDriver(enttecIP));
    universe.update({
        [203]: 0
    })
};
  


app.get("/", (req: Request, res: Response) => {
    res.send(/*html*/`
        <h1>Hello World!</h1>
    `);
})




app.listen(port, () => {
    console.log("App listening on port", port)
    run();
})