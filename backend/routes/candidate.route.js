import {Router} from 'express';
import multer from 'multer';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/roles.middleware.js';
import { createCandidate, deleteCandidate, updateCandidate } from '../controllers/candidate.controller.js';

const router = Router();
const upload = multer(); 

router.route("/create-candidate").post(
    verifyJWT, authorizeRoles("admin"), upload.none(), createCandidate
)
router.route("/c/:candidateId").patch(
    verifyJWT, authorizeRoles("admin"), updateCandidate
)
.delete(
    verifyJWT, authorizeRoles("admin"), deleteCandidate
)

export default router;