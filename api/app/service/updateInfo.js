const { Service } = require('egg');


class updateInfoService extends Service {
    /**
     * 查询用户id
     */
    async findUserbyId(user_id) {
        const { ctx, app } = this;
        const user = await ctx.model.UpdateInfo.find({ 'userInfo.user_id': user_id });
    }
}

module.exports = updateInfoService;