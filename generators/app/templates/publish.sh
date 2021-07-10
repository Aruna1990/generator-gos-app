#!/bin/sh
# 打包镜像并发布

docker build -t swr.cn-north-4.myhuaweicloud.com/gos/<%= name %>:"$1" .
docker push swr.cn-north-4.myhuaweicloud.com/gos/<%= name %>:"$1"
