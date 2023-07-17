const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/service/friend.test.js', () => {
  let ctx;

  before(async () => {
    ctx = app.mockContext();
  });

  // it('addApply()', async () => {
  //   try {
  //     const apply = await ctx.service.friend.applyFirend('641707acc5be693d80d1c132', '6406a2de2150111ba8d98170',"你好，交个朋友呗");
  //     console.log("apply",JSON.stringify(apply)) ;
  //     assert(true);
  //   } catch (error) {
  //     console.log("error",error);
  //     assert(false);
  //   }
  // });


  // it('passFirendApply()', async () => {
  //    await ctx.service.friend.passFirendApply('6406a2de2150111ba8d98170','6417096ee333e52d10e1af6e');
  //   assert(true);
  // });
  // it('firendApplyList()', async () => {
  //   let list =  await ctx.service.friend.firendApplyList('63df53bbb12c005c28830c481111',null,10);
  //   console.log("list",JSON.stringify(list))
  //   assert(true);
  // });

  // //

  // it('applyHistory()', async () => {
  //   const history = await ctx.service.friend.applyHistory('dsfdsf', 'dsfdsf');
  //   assert(history != null);
  // });

  // it('getUserFriendList()', async () => {
  //   const friends = await ctx.service.friend.getUserFriendList('6406a24d8788583ff83203fa');
  //   assert(typeof friends == "object");
  // });
});
