一个cf worker反代emby的脚本
1. **登录 Cloudflare 并创建一个新的 Worker**:
   - 登录到你的 Cloudflare 账户。
   - 导航到 “Workers & Pages”。
   - 点击 “Create a Service” 来创建一个新的 Worker 服务。
   - 给你的 Worker 起一个名字，并选择 “HTTP handler”。

2. **编写 Worker 脚本**:
   - 在 Worker 编辑器中复制粘贴worker.js的代码

3. **部署 Worker**:
   - 保存并部署你的 Worker。
   - 记下你的 Worker 的子域名（例如：`your-worker.your-domain.workers.dev`）。

4. **配置 DNS**:
   - 在 Cloudflare 的 DNS 设置中，创建一个新的 CNAME 记录，指向你的 Worker 子域名。
   - 例如，如果你希望通过 `emby.your-domain.com` 访问 Emby 服务器，可以创建一个 CNAME 记录：
     - 名称：`emby`
     - 目标：`your-worker.your-domain.workers.dev`

5. **测试**:
   - 通过你配置的域名（例如：`emby.your-domain.com`）替换你的 Emby 服务器地址，确认代理功能正常工作。
