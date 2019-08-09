# Docker常用命令


## docker build [OPTIONS] PATH | URL | -（Build an image from a Dockerfile）

+ -t ：镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签；
+ -f ：指定要使用的Dockerfile路径；
+ -m ：设置内存最大值；
+ -q ：安静模式，成功后只输出镜像 ID；

```shell
docker build -t mengchen:nginx .
docker images -a
```

## docker run [OPTIONS] IMAGE [COMMAND] [ARG...]（Run a command in a new container）

+ --name ：为容器指定一个名称；
+ -d ：后台运行容器，并返回容器ID；
+ -p ：指定端口映射，格式为：主机(宿主)端口:容器端口；
+ -h ：指定容器的hostname；
+ -e ：设置环境变量，username="xxx"；
+ -m ：设置容器使用内存最大值；
+ --expose=[] ：开放一个端口或一组端口；
+ --volume , -v ：绑定一个卷；

```shell
docker run --name mengchen:nginx-container -d -p 8080:80 mengchen:nginx
```

## docker ps [OPTIONS]（List containers）

+ -a ：显示所有的容器，包括未运行的；
+ -f ：根据条件过滤显示的内容；
+ -l ：显示最近创建的容器；
+ -h ：指定容器的hostname；
+ -n ：列出最近创建的n个容器；

```shell
docker ps -a
```

## docker images [OPTIONS] [REPOSITORY[:TAG]]（List images）

+ -a ：列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）；
+ -f ：显示满足条件的镜像；

```shell
docker images -a
```