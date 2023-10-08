## 项目标题：静态页面复刻——智谱AI首页（PC端）
项目作者: Zhen Gong

项目预览:[https://zhengong1997.github.io/static-webpage/dist/index.html](https://zhengong1997.github.io/static-webpage/dist/index.html)

项目描述:通过使用HTML、CSS和JavaScript，我成功地复刻了[智谱AI官网](https://www.zhipuai.cn/)的主页PC端。该项目旨在练习我的前端开发技能和模仿能力，以便更好地理解现有网站的结构和设计。

技术栈：
HTML, CSS, JavaScript

### 挑战和解决方案

在复刻过程中，导航栏的状态变化是一个大挑战。主要包括主导航栏的悬浮变色，子导航栏的展开和隐藏判定，以及页面滚动时主导航状态的判定。另一个挑战是两个模块之间的互动切换。我的主要解决方法都是利用监听事件来进行判定，然后直接操作DOM改变属性。

页面布局使用的是流行的flexbox布局。

在代码重构方面，我根据模块进行分类，合理命名，以及函数封装，使代码更加简约可读。

### 改进方向
也许大佬们对功能实现或页面效果有更好，简单，巧妙的解决方案，或者代码习惯上的建议，我都很欢迎并虚心接受指导！

以下是我的一些初步改进方向和想法（若有时间）
1. 适配手机端页面
2. 增加模块加载时动画
3. 对重复出现的逻辑或代码块重构

## 如何本地运行和开发？
macos localhost运行
```bash
npx http-server . -c-1
```

windows localhost运行
```bash
http-server . -c-1
```



