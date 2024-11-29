import { Request, Response } from "express"
import UserInfo from "../models/UserInfo"

const CreateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body
        const ExistingUser = await UserInfo.findOne({ auth0Id })

        console.log(req.body)

        if (ExistingUser) {
            res.status(200).send()
            return
        }


        const NewUser = new UserInfo(req.body)
        await NewUser.save()

        res.status(201).json(NewUser.toObject());

    } catch (error) {
        res.status(500).json({ message: "Error creating user" })
    }
}

export default {
    CreateCurrentUser
}