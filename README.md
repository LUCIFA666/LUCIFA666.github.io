# 徐亦栋的个人主页

无构建依赖的静态个人主页，可部署到 GitHub Pages。页面内容根据用户提供的简历整理，仅保留个人介绍、教育背景、智元实习经历与联系方式。

站点地址：[lucifa666.github.io](https://lucifa666.github.io/)

源码仓库：[LUCIFA666/LUCIFA666.github.io](https://github.com/LUCIFA666/LUCIFA666.github.io)

## 内容

- 同济大学自动化本科背景，预计 2027 年毕业；已保研至中科院自动化所。
- 智元算法实习生，2026 年 11 月 16 日起。年份按本次任务的当前年份整理。
- 个人简介与足球、围棋、乒乓球等兴趣。
- 首页文字：做可以SCALING的事情。
- 响应式布局、深浅主题、邮箱联系与复制。

## 本地预览

在本目录运行 `python -m http.server 8765`，然后访问 `http://localhost:8765`。也可直接打开 `index.html`；浏览器可能限制本地文件复制到剪贴板。

## GitHub Pages

1. 将本目录中的文件（包含隐藏的 `.github` 目录及 `.nojekyll`）上传到你拥有的 GitHub 仓库的 `main` 分支。
2. 打开仓库的 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
3. 在 **Actions** 中运行 **Deploy personal homepage**，或推送一次提交，触发自动发布。
4. 等待部署成功后，从 **Settings → Pages** 或 Actions 的 `github-pages` 环境打开真实网址。

仓库名若为 `你的用户名.github.io`，主页发布在根域名；其他仓库发布在仓库路径下。全部资源使用相对路径，同时支持两种方式。

也可选择 **Deploy from a branch**，部署 `main` 分支的 `/ (root)`。这种方式由 GitHub Pages 直接托管静态文件，不需要安装 Node.js。

此仓库已配置 GitHub Actions；推送到 `main` 分支会自动发布。每次部署的结果以仓库 **Actions** 页面为准。

发布工作流依据 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) 配置。
