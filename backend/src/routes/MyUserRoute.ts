import express from "express"
import MyUserControllers from "../controllers/MyUserControllers"
import { jwtCheck } from "../middleware/auth0"

const router = express.Router()

router.post("/", MyUserControllers.CreateCurrentUser)

export default router