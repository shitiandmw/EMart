'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io  } = app;
  // router.get('/', controller.home.index);
  router.post('/account/register', controller.account.register);
  router.post('/account/userkey_login', controller.account.login);
  router.get('/default/getnowtime', controller.default.getnowtime);
  router.get('/default/test', controller.default.test);
  router.post('/default/test', controller.default.test);

  router.get('/user/myinfo', controller.user.getMyInfo);
  router.get('/user/getuser', controller.user.getUserInfoById);
  
  router.post('/friend/search', controller.firend.findFirendByNumber);
  router.post('/friend/apply', controller.firend.applyFirend);
  router.get('/friend/list', controller.firend.firendApplyList);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
};
