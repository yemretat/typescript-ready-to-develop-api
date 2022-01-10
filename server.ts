import express from "express";
import { Application } from "express";
import {port,environment} from "./config/config"
import ServerIndex from "./routers/serverIndex"

// Creating our server
const app: Application = express();
const PORT: number = parseInt(port)


const server: ServerIndex  = new ServerIndex(app)

export default app.listen(PORT, () => {
    console.log(
      `server is running http://localhost:${PORT} : ${environment}`
    );
  });
  