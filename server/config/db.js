import mongoose from "mongoose";
require("dotenv").config();
export default connect = async () => {
    try {
        const response = mongoose.connect(process.env.URL);
    } catch (error) {
        console.log("Error in mongo connect : " + error);
    }
}
