## JavaScript 与 QA 工程师

### 测试的核心概念

#### 单元测试

- 目的：单元测试能够让开发者明确知道代码的结果

- 原则：单一责任，接口抽象，层次分离

- 断言库：保证最小单元是否正常运行的方法

- 测试风格：测试驱动开发（Test-Driven Development, TDD）, (Behavior Driven Development, BDD)均是敏捷开发方法论。

  TDD关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi' == user.name);

  BDD关注整体行为是否符合预期，编写的每一行代码都有目的提供一个全面测试用力

- 单元测试框架：

  - [better-assert](https://github.com/tj/better-assert)（TDD断言库）
  - [should.js](https://github.com/tj/should.js)（BDD断言库）
  -  [Expect.js](https://github.com/Automattic/expect.js)（BDD断言库）
  -  [Chai.js](https://github.com/producthunt/chai-enzyme)（TDD BDD双模）
  - Jasmine.js（BDD）
  - karma 自动化runner集成PhantomJS无刷新 （无界面浏览器）

##### 流程

![](../image/test.png)



每一个测试用例通过describe进行设置

1. before单个测试用例(it)开始
2. beforeEach每一个测试用例开始前
3. it定义测试用例 并利用断言库进行

设置chai如： expect(x).to.equal(true)

异步mocha

以上专业术语叫mock





#### 性能测试

##### 基准测试

面向切面编程AOP无侵入式统计

Benchmark基准方法，它并不是简单的统计执行多少次测试代码后对比时间，它测试有着严密的抽样过程。执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。

##### 压力测试

对网络接口做压力测试需要检查的几个常用指标有 吞吐量 响应时间 和 并发数，这些指标反映了服务器的并发处理能力

pv网站当日的访问人数 UV独立访问人数。PV每天几十万甚至几百万以上需要考虑压力测试。

 换算公式QPS = PV/t  ps:1000000 / 10 * 60 * 60 = 27.2 (100万请求集中在10小时，服务器每秒处理27.2个业务请求)

常用的压力测试工具 ab, siege, heep_load



#### 安全测试

XSS

SQL

CSRF

#### 功能测试

用户真实性检查



selenium-webdriver

protractor selenium-standalone

http://webdriver.io webdriver I/O



- 冒烟测试 smoke test 自由测试的一种，找到一个bug开发修复，然后针对此bug；优点节省时间防止build失败，缺点 覆盖率极地
- 回归测试  修改一处对整体功能进行全部测试，一般配合自动化测试

