文件管理系统
===============

## 简介

该系统主要提供简单的文件上传、预览、管理服务，可实现线上文件独立、统一管理

## 相关技术

+ Thinkphp5.1
+ Ant Design Pro
+ nginx
+ mysql
+ docker
+ docker-compose

## 安装

> 安装前，机器必须安装docker、和docker-compose环境

~~~
docker-compose -d up
~~~

然后就可以在浏览器中访问

~~~
http://localhost:2020
~~~

需要修改访问端口的，只需编辑docker-compose.yml的ports节点

## 在正常使用之前，要进入容器，进行数据库配置修改与初始化

进入容器

~~~
docker-compose exec php_nginx bash
~~~

然后进入指定目录，编辑配置文件

~~~
cd /home/wwwroot/api/hello_file/
vim .env
修改相关配置项，改成可用配置
[database]
DB_CONNECTION=mysql
DB_HOST=192.168.1.100
DB_PORT=3306
DB_DATABASE=hello_file
DB_USERNAME=root
DB_PASSWORD=root
DB_PREFIX=lz_

编辑完成，在该目录下执行命令
php think migrate:run
~~~

完成搭建

