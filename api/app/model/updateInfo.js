module.exports = app => {
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const UpdateSchema = new Schema({
        user_id: { type: Number },
    });


    let schema = mongoose.model('updateInfo', UpdateSchema);
    return schema;
};