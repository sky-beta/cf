export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname="https://live.com"; //beta.radiance.thatgamecompany.com
      let new_request=new Request(url,request);
      return fetch(new_request);
    }
    // 否则，提供静态资产。
    return env.ASSETS.fetch(request);
  }
};
