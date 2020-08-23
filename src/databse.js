import mongoose from 'mongoose';

mongoose.connect('mongodb://192.168.99.100:27017/NewsBoliviaDB',{  useNewUrlParser:true,useUnifiedTopology: true })
.then(d=>{
    console.log('coneccion a la base de datos establecido')
})
.catch(err=>{
    console.log(err)
})