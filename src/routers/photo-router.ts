import { Router, Request, Response } from "express";
import { getAllPhotos } from "../services/photo-services";

export const photoRouter = Router()

photoRouter.get("/", async (req: Request, res: Response) => {
    const result = await getAllPhotos()

    res.status(200).send(result)
})