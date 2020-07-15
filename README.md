# 自动疫情通填报

 -- A project 6 months too late. Powered by Nightwatch.js

Todo: 可能会加个Mock地理信息的功能吧

## 如何使用 - Docker

运行时需将`<Your-ID-Here>`及`<Your-Password-Here>`分别换成学号及统一认证登陆密码

```bash
mkdir tests_output && mkdir screens

docker run --rm \
    -e NW_USERNAME=<Your-ID-Here> \
    -e NW_PASSWORD=<Your-Password-Here> \
    -v $PWD/tests_output:/usr/src/app/tests_output \
    -v $PWD/screens:/usr/src/app/screens \
    chenseanxy/yiqingtong
```

### Cron Scheduling

在服务器上使用Cron定时运行：这里使用Ofelia来执行Docker相关定时任务。

#### 配置环境变量

将`.env.example`重命名至`.env`，并编辑，在其中填上统一认证的用户名（学号）与密码

#### 启动服务

```bash
mkdir tests_output && mkdir screens
docker-compose up -d
```

其中`docker-compose.yml`中 `0 30 0 * * *`表示在每天0:30:00执行。

## 如何使用 - 本地安装

需求：Chrome。

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

将`.env.example`重命名至`.env`，并编辑，在其中填上统一认证的用户名（学号）与密码

### 填报

`npm run test`，如果有报错可以在tests_output里查看详情，或者screens里查看报错时截屏
