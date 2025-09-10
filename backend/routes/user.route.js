import { Router } from "express";
import { register } from "../controllers/user.controller.js";
import multer from "multer";

const router = Router();
const upload = multer(); // for parsing multipart/form-data

router.route("/register").post(
    upload.none(), register
)

export default router;