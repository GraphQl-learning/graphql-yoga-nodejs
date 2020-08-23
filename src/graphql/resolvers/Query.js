import Message from '../../models/message';
import Articles from '../../models/articles';

const Query = {
    ping(){
        return "pong!"
    },

    messages:async()=>{
        return await Message.find({})
    },

    message2:()=>{
        return [{
            name:'lllll',
            lastname:'lastttname...'
        }]
    },

    articles: async()=>{
        return await Articles.find({})
    }
}


export default Query;