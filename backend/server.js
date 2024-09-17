const express=require("express")
const mongoose = require('mongoose')
const dotenv =require('dotenv');
const app = express();

const adminRoute = require('./routes/admin.route.js')
const userRoute = require('./routes/user.route.js')
const cors=require("cors")

dotenv.config();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))

app.use("/api/admin", adminRoute)
app.use("/api/user", userRoute)

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
    } catch (error) {
        throw error;
    }
}



app.listen(1712, () => {
    connectMongoDB();
    console.log("App listening: http://localhost:1712/");
})