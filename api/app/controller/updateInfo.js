'use strict'

import { Controller } from 'egg';

class updateInfoController extends Controller {
    // 修改用户信息
    async updateUserInfo () {
        const { ctx, app } = this;
        const { user_id } = ctx.request.query; // 获取用户id
    }
}