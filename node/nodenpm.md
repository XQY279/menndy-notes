## Node.js环境及npm命令深入

#### Node.js REPL(交互式解释器)

通过 `node`命令进入环境，一般用于简单的运算 简单的代码的验证

| Command        | description                       |
| -------------- | --------------------------------- |
| `ctrl + c`     | 退出当前终端                      |
| `ctrl + c`     | 连续按两次 退出Node REPL          |
| `ctrl + d`     | 退出Node REPL                     |
| 向上 / 向下 键 | 查看输入的历史记录                |
| tab键          | 列出当前命令                      |
| .help          | 列出使用命令                      |
| .break         | 退出多行表达式                    |
| .clear         | 退出多行表达式                    |
| .save filename | 保存当前的Node REPL会话到指定文件 |
| .load filename | 载入当前Node REPL会话的文件内容   |



#### NPM命令

| Command                    | description                |
| -------------------------- | -------------------------- |
| `npm install <pageName>`   | 安装某项依赖包 `-g`全局    |
| `npm uninstall <pageName>` | 卸载某项包                 |
| `npm search <pageName>`    | 查找某个包                 |
| `npm help`                 | 列出所有自命令             |
| `npm help <cmd>`           | 查看对应的某一个命令的用法 |

