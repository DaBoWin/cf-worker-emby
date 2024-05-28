addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    // 目标 Emby 服务器的 URL
    const targetUrl = 'http://your-emby-server-ip-or-domain.com';

    // 构造新的请求，保留原始请求的 URL 路径和查询参数
    const url = new URL(request.url);
    const newUrl = targetUrl + url.pathname + url.search;

    // 传递请求方法、头部等
    const newRequest = new Request(newUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: 'follow'
    });

    // 发出请求到目标 Emby 服务器
    const response = await fetch(newRequest);

    // 返回响应
    return response;
}
