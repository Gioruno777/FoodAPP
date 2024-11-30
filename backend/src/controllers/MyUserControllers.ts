import { Request, Response } from "express"
import UserInfo from "../models/UserInfo"

const CreateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body
        const ExistingUser = await UserInfo.findOne({ auth0Id })

        console.log(req.body)

        if (ExistingUser) {
            res.status(200).send("OK")
            return
        }


        const NewUser = new UserInfo(req.body)
        await NewUser.save()

        res.status(201).json(NewUser.toObject());

    } catch (error) {
        res.status(500).json({ message: "Error creating user" })
    }
}

const UpdateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { name, address, city, country } = req.body
        const user = await UserInfo.findById(req.userId)

        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        user.name = name
        user.address = address
        user.city = city
        user.country = country

        await user.save();

        res.send(user)


    } catch (error) {
        res.status(500).json({ message: "Error updating user" })
    }
}

export default {
    CreateCurrentUser,
    UpdateCurrentUser
}