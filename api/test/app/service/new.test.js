const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/service/newTest.js', () => {
    let ctx;

    before(async () => {
      ctx = app.mockContext(); // 获取egg的上下文
    });


    /**
     * 测试查询用户信息
     */

    // it('findUserbyId()', async () => {
    //     const user = await ctx.service.newTest.findUserbyId(4);
    //     console.log("user:",user)
    //     assert(user); // 断言user存在
    // });
    /**
     * 测试添加用户信息
     */
    it('addPeopleInfo()', async () => {
      const userInfo = {
        user_id: 1,
        name: 'gina',
        age: 17,
        account: '000',
        pwd: '000',
        address: '广东佛山',
      }
      const flag = await ctx.service.newTest.findUserbyId(userInfo.user_id);
      if(flag) {
        const user = await ctx.service.newTest.addPeopleInfo(userInfo);
        console.log("user:",user)
        assert(user);
      }else {
        console.log("用户已存在")
      }
    });


    /**
     * 测试更新用户id
     */

    // it('updatePeopleUseId()', async () => {
    //   const old_id = 5;
    //   const new_id = 6;
    //     const user = await ctx.service.newTest.updatePeopleUseId(old_id,new_id);
    //     console.log("user:",user)
    //     assert(user);
    // });


    /**
     * 测试删除用户信息
     */

    // it('deletePeopleInfo()', async () => {
    //     const user_id = 6;
    //     const user = await ctx.service.newTest.deletePeopleInfo(user_id);
    //     console.log("user:",user)
    //     assert(user);
    // });


});