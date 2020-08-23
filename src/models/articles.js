
import {Schema, model} from 'mongoose';

const newArticle = new Schema({
    author: String,
    title: String,
    titleSection: String,
    description: String,
    urlImage: String,
    sobre: String,
    urlContendDetail: String,
    createdDate: String
})


export default model('news', newArticle);