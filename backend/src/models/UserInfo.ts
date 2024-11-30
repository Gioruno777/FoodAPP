import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        require: true
    },

    email: {
        type: String
    },

    name: {
        type: String
    },

    address: {
        type: String
    },

    city: {
        type: String,
    },
    country: {
        type: String,
    },
})

const UserInfo = mongoose.model("UserInfo", userSchema)
export default UserInfo