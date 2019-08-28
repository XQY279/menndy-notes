## Linux免密登录

#### 第一步：生成秘钥对

```bash
ssh-keygen -t rsa -C "<name>" -f "<name_rsa>"
```

`-t` 选择加密算法； 这里选择 `rsa` 

`-C` 设置名字将会设置到生成的秘钥中去 注意要是字符串 `""`

`-f` 设置秘钥的文件名 注意要是字符串 `""`

> 按下`Enter` 后 会问你是否设置使用秘钥的口令， 一定不要设置否则达不到免密登录的效果；连续按 `Enter` 即可；
>
> 然后会在当前文件夹生成两个文件 ：一个公钥 一个私钥，带有 `.pub` 的是公钥
>
> 私钥的权限一定要是 600



#### 第二步：上传配置公钥

上传公钥到服务器对应账号的home路径下的.ssh/中

```bash
ssh-copy-id -i "公钥文件名" 用户名@服务器ip或域名
```

然后输入密码即可 



#### 第三部：配置本地私钥

把第一步生成的私钥复制到你的home目录下的.ssh/ 路径下

配置你的私钥文件访问权限为 600  `chmod 600 <你的私钥文件名>`

这时可以通过` ssh -i <你的私钥文件名> root@172.16.143.129`  登录



#### 第四部：免密登陆功能的本地配置文件

编辑自己home目录的.ssh/ 路径下的config文件 

以下是配置模板 

```bash
# 多主机配置
Host gateway-produce
HostName IP或绑定的域名
Port 22
Host node-produce
HostName IP或绑定的域名
Port 22
Host java-produce
HostName IP或绑定的域名
Port 22

Host *-produce
User root
IdentityFile ~/.ssh/produce_key_rsa
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO

#单主机配置
Host evil-cloud
User root
HostName IP或绑定的域名
IdentityFile ~/.ssh/evilboy_rsa
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO

#单主机配置
Host git.yideng.site
User git
IdentityFile ~/.ssh/evilboy_rsa
Protocol 2
Compression yes
ServerAliveInterval 60
ServerAliveCountMax 20
LogLevel INFO

```



> 配置过后即可通过 `ssh <Host>` 即可免密登录
>
> Host为 配置文件中对应的Host



