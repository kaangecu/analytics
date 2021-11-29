const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {NetworkTimingsSchema} = require('./NetworkTimings')

//Create Schema
const AnalyticSchema=new Schema({
    websiteUrl:{
        type: String,
        required:true
    },
    collectedAt:{
        type: Date,
        required:true
    },
    ttfb:{
        type: Number,
        required:true
    },
    fcp:{
        type: Number,
        required:true
    },
    domLoad:{
        type: Number,
        required:true
    },
    windowLoad:{
        type: Number,
        required:true
    },
    networkTimings:[{
        type: NetworkTimingsSchema,
        required:false
    }],
    createdAt:{
        type:Date,
        default:Date.now
    },
})

// module.exports=mongoose.model('analytic',AnalyticSchema)

module.exports.AnalyticSchema = AnalyticSchema;

module.exports.Analytic = mongoose.model('analytic', AnalyticSchema);