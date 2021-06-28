const mongoose = require('mongoose');
 Schema= mongoose.Schema; 
 const userSchema = new Schema ( {
     name: String, 
     age:Number,
     favoriteFoods:String,
 }
 )
 module.exports=mongoose.model('User',userSchema) 
 