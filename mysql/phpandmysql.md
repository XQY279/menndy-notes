# 初识phpMyAdmin

**mySQL** （关系型数据库管理系统） 编辑 讨论 MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件之一。 MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。 MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。 由于其社区版的性能卓越，搭配 PHP 和 Apache 可组成良好的开发环境。



#### 什么是 SQL？

- SQL 指结构化查询语言
- SQL 使我们有能力访问数据库
- SQL 是一种 ANSI 的标准计算机语言



#### SQL 能做什么？

- SQL 面向数据库执行查询
- SQL 可从数据库取回数据
- SQL 可在数据库中插入新的记录
- SQL 可更新数据库中的数据
- SQL 可从数据库删除记录
- SQL 可创建新数据库
- SQL 可在数据库中创建新表
- SQL 可在数据库中创建存储过程
- SQL 可在数据库中创建视图
- SQL 可以设置表、存储过程和视图的权限



**新建数据库**

自定义数据库名称后 选择 `utf8_general_ci` 并点击 创建



#### 增删改查

**增加** `INSERT` 

```sql
INSERT INTO `news`(`newsid`, `newstitle`, `newsimage`, `newstontent`, `addtime`) VALUES (1, 'title', 'imageurl', 'content', '2018-10-12')

'INSERT INTO'后面的是表名
前面小括号中的是键，后面小括号中的是值 
```



**删除** `DELETE`

```sql
DELETE FROM `news` WHERE newsid=2 

WHERE后面跟的是条件，删除newsid为2的数据
```



**修改** `UPDATA`

```sql
UPDATE `news` SET `newstitle`='NEW-TITLE',`newsimage`='newsimage',`newstontent`='newcontent',`addtime`= '2019-1-1' WHERE newsid=1

WHERE 后面跟的是条件 改变newsid是1的那条数据
```



**查找** `SELECT`

```sql
SELECT * FROM `news` WHERE 1 

从news表中查找所有 1 代表真
```



