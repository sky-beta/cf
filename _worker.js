export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname="https://nsp-game-jxs-p01-drcn.obs.cn-north-2.myhuaweicloud.com/resource_package/1940b32a763f4067b2c87c2432625f3f.ipa?attname=Sky(1).ipa"; //beta.radiance.thatgamecompany.com
      let new_request=new Request(url,request);
      return fetch(new_request);
    }
    // 否则，提供静态资产。
    return env.ASSETS.fetch(request);
  }
};
