import { Application } from "express";
import NewsRouter from "./news"
export default class Routes {
  constructor(app: Application) {
     app.use("/api", NewsRouter);
  }
}
