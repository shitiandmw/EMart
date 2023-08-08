'use strict'


const { Controller } = require('egg'); // 引入egg的Controller


// 定义新的Controller
class NewTestController extends Controller {

    /**
     * 查询用户信息
     */
    async findPeopleInfo () {
        const { ctx, app } = this;
        const { user_id } = ctx.request.query;
        // 查询是否存在这个用户
        const user = await ctx.service.newTest.findUserbyId(user_id);
        if (user) throw ctx.ltool.err('用户已存在', 200);
        ctx.body = user;
        if (!user) this.addPeopleInfo()
    }

    /**
     * 添加用户信息
     */
    async addPeopleInfo () {
        const { ctx, app } = this;
    }

}

module.exports = NewTestController;