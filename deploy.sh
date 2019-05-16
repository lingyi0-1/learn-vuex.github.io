# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com:nusr/resume-vue 项目的 gh-pages 分支
git push -f git@github.com:nusr/resume-vue.git master:gh-pages

cd -

#作者：nusr
#链接：https://juejin.im/post/5cb5d68e51882532525a097d
#来源：掘金
#著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。