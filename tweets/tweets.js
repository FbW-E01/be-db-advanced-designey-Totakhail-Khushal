import mongoose from 'mongoose'


const tweetSchema=new mongoose.Schema({
    tweetId:Number,
    content:String,
    name:String,
    description:String
})
const tweetData="tweets";
const Tweets=mongoose.model(tweetData,tweetSchema);

export default Tweets;