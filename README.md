# myapp

## Project setup

```bash
# 安装
yarn install
# 注意如果安装这一步报错，那么多半是node-sass模块安装报错
# 这是由于使用了淘宝镜像的缘故，将源从淘宝镜像切换为正常分支，再执行一次安装即可

# 启动
yarn run serve
# 打包构建
yarn run build
# 对所有文件进行语法检测
yarn run lint
```

## 注意

### 安装时报错

> 注意如果`yarn install`这一步报错，那么多半是安装`node-sass`模块时导致的报错. 这是由于使用了淘宝镜像的缘故。将安装源从淘宝镜像切换为正常分支后 ,再执行一次`yarn install`即可.
