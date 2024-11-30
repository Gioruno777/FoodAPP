import express from "express"
import MyUserControllers from "../controllers/MyUserControllers"
import { jwtCheck, jwtParse } from "../middleware/auth0"
import { validateMyUserRequest } from "../middleware/validation"

const router = express.Router()

router.post("/", jwtCheck, MyUserControllers.CreateCurrentUser)
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, MyUserControllers.UpdateCurrentUser)

export default router