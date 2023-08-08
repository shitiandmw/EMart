module.exports = app => {
    const mongoose = app.mongoose; // 获取mongoose实例
    const Schema = mongoose.Schema; // 获取Schema实例

    const UserSchema = new Schema({
        user_id: { type: Number },
        name: { type: String },
        age: { type: Number },
        account: { type: String },
        pwd: { type: String },
        address: { type: String },
        userInfo: { type: Object },
    }); // 定义UserSchema



    let schema = mongoose.model('newTest', UserSchema); // 定义模型
    return schema;
}