import express from "express"
import cros from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import MyUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected Database"))

const app = express()
app.use(express.json())
app.use(cros())

app.use("/api/my/user", MyUserRoute)

app.listen(80, () => {
    console.log("http://localhost:80")
})