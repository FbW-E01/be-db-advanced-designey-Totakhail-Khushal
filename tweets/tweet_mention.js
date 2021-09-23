import mongoose from 'mongoose'


const tweetSchemaMention = new mongoose.Schema({
    url:string,
    id:number,
    
})
const tweetMention="tweets";
const MentionTweets=mongoose.model(tweetMention,tweetSchemaMention);

export default MentionTweets;