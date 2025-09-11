import { Router } from "express";
import { register, login, getProfile } from "../controllers/user.controller.js";
import multer from "multer";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/roles.middleware.js";

const router = Router();
const upload = multer(); // for parsing multipart/form-data

router.route("/register").post(
    upload.none(), register
)

router.route("/login").post(
    login
)

router.route("/profile").get(
    verifyJWT, getProfile
)

// admin only can access
router.get("/admin-dashboard", verifyJWT, authorizeRoles("admin"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin Dashboard",
    user: req.user,
  });
});

// voter only can access
router.get("/voter-dashboard", verifyJWT, authorizeRoles("voter"), (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Voter Dashboard",
    user: req.user,
  });
});

export default router;