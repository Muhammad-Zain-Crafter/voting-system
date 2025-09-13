import {Router} from 'express';
import multer from 'multer';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/roles.middleware.js';
import { createCandidate } from '../controllers/candidate.controller.js';

const router = Router();
const upload = multer(); 

router.route("/create-candidate").post(
    verifyJWT, authorizeRoles("admin"), upload.none(), createCandidate
)


export default router;