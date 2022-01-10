import { Router } from "express";
class NewsRouter{
    router = Router();

    constructor(){
        this.initializeRoutes()
    }
    initializeRoutes() {
        this.router.get('/',(req,res) => {
            res.send("Hello")
        })
    }
}
export default new NewsRouter().router