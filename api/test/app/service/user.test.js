const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {
    let ctx;

    before(async () => {
      ctx = app.mockContext();
    });
  
    // it('demoNewUser()', async () => {
    //   const user = await ctx.service.user.demoNewUser();
    //   console.log("user:",user)
    //   assert(true);
    // });
   
    // it('demoFindAccount1()', async () => {
    //     // const user = await ctx.service.user.demoFindAccount(account);
    //     const user = await ctx.service.user.demoFindAccount();
    //     console.log("user:",user)
    //     assert(user);
    // });

    // 删除用户
    // it('demoDeleteAccount()', async ()=>{
    //     const user = await ctx.service.user.demoDeleteAccount();
    //     console.log("user:",user)
    //     // assert(user);
    // })
  });