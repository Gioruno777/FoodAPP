import express, { Request, Response } from "express"
import cros from "cors"
import "dotenv/config"
import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected Database"))

const app = express()
app.use(express.json())
app.use(cros())

app.get("/", async (req: Request, res: Response) => {
    res.send("OK")
})

app.listen(80, () => {
    console.log("http://127.0.0.1")
})