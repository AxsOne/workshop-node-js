const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/');

const { Schema } = mongoose;

const MyModel = mongoose.model('workshop', new Schema({id: {type: String, required: true}, student: {type: String, required: true}}))