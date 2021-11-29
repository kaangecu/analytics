const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NetworkTimingsSchema= new Schema({
  initiatorType:{
    type: String,
    required:true
  },
  name:{
    type: String,
    required:true
  },
  duration:{
    type: Number,
    required:true
  },
})

// export default NetworkTimingsSchema
// module.exports=NetworkTimings=mongoose.model('networkTimings',NetworkTimingsSchema)

module.exports.NetworkTimingsSchema = NetworkTimingsSchema;

// module.exports.NetworkTimings = mongoose.model('networkTimings', NetworkTimingsSchema);