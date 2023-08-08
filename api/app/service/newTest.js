const { Service } = require("egg");


class NewTestService extends Service {
    /**
     * 查询用户id
     * @param {string} user_id 用户id
     */

    async findUserbyId(user_id) {
        const { ctx, app } = this;
        console.log("user_id:",user_id);
        const user = await ctx.model.NewTest.find({ 'userInfo.user_id': user_id });
        console.log("user:",user);

        if(!user.length > 0 ) return true;
        return false;

        // if(!user) throw ctx.ltool.err('用户不存在', 200);
        // return user;
    }


    /**
     * 添加用户信息
     * @param {string} user_id 用户id
     */

    async addPeopleInfo(userInfo) {

        let user = new this.ctx.model.NewTest()
        user.userInfo = userInfo
        await user.save()
        return user

    }

    /**
     * 更新用户id
     * @param {Number} user_id 用户id
     */

    async updatePeopleUseId(user_id,new_id) {
        const { ctx, app } = this;
        const user = await ctx.model.NewTest.updateOne({ 'userInfo.user_id': user_id },{ 'userInfo.user_id': new_id }); // 更新第一个user_id =user_id的数据 更新为user_id=6
        if(!user) throw ctx.ltool.err('更新失败，用户不存在', 200);
        return user;
    }

    /**
     * 根据用户id删除用户信息
     */

    async deletePeopleInfo(user_id) {
        const { ctx, app } = this;
        const user = await ctx.model.NewTest.deleteOne({ 'userInfo.user_id': user_id }); // 删除第一个user_id =user_id的数据
        if(!user) throw ctx.ltool.err('删除失败，用户不存在', 200);
        return user;
    }

    /**
     * 添加用户信息object(组合)
     */

    async addCombination(Object) {
        let user = new this.ctx.model.NewTest()
        user.userInfo = userInfo
        await user.save()
        return user
    }

    /**
     * 添加用户信息object
     * @param {Object} userInfo 用户信息
     */
    async addPeopleInfoObject(userInfo) {
        const { ctx, app } = this;
        // 调用查询用户id方法，有则提示用户已存在，没有则添加
        const user = await ctx.service.newTest.findUserbyId(userInfo.user_id);
        if(!user) {
            addPeopleInfo(userInfo)
        }
    }
    

}

module.exports = NewTestService;