const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({ 
    email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    timelogged:{
        type:String,
        required:true
    },
    sourcetype:{
        type:String,
        required:true
    },
    latN:{
        type:Number,
        required:true
    },
    latS:{
        type:Number,
        required:true
    },
    lonW:{
        type:Number,
        required:true
    },
    lonE:{
        type:Number,
        required:true
    },
    variable:{
        type:Array,
        required:true
    },
    shadelevel:{
        type:String,
        required:true
    },
    hod:{
        type:Number,
        required:true
    },
    interval:{
        type:String,
        required:true
    },
    aggregation:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    status_message:{
        type:String,
        required:false
    },
    outputformat:{
        type:String,
        required:true
    }
}
)
const modelSchema = mongoose.model("Ebms",RequestSchema)
module.exports = modelSchema;

        
        