#!/bin/bash
#更改php代码存放目录的权限，防止出现文件权限问题
chown -R www.www /home/wwwroot
#安装文件转换环境
yum install -y libreoffice-core libreoffice-writer libreoffice-langpack-zh* libreoffice-calc libreoffice-impress
