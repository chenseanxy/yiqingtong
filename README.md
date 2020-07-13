# 自动疫情通填报

Powered by Nightwatch.js

## 如何使用

### 安装Node.js

自行百度/谷歌，完成后使用`node --version`确保Node成功安装，并`npm --version`确定npm可用

### Clone本仓库

```bash
git clone https://github.com/chenseanxy/yiqingtong.git
cd yiqingtong
```

### 安装依赖

`npm install`

### 配置环境变量

将`.env.example`重命名至`.env`，并编辑，在其中填上统一认证的用户名与密码

### 填报

`npm run test`，如果有报错可以在tests_output里查看详情，或者screens里查看报错时截屏
