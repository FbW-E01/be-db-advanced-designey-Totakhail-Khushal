import mongoose from 'mongoose'

const tweetUserSchema=new mongoose.Schema({
    Id:Number,
    firstName:String,
    LastName:String,
    email:String,
    phone:Number,
    address:String,
    created_date:String,
    followers:Number
})
const tweetUser="tweets";
const TweetsUser=mongoose.model(tweetUser,tweetUserSchema);

export default TweetsUser;