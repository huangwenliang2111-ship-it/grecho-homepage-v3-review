# GRECHO 英文静态预览 · 同类型视觉扩展已发布

本轮以最新已发布主版本 f0d0969a8a8becbaa240fe6f6f57d6b78ecf6fe6（运行版本 706fb6aff5b3dffef41ed5cd73641ccc7bdf8115）为基线。恢复后 340 个运行文件的 SHA-256 全部与远程现行清单一致。

本次发布共 75 条英文路线、343 个运行文件。实际新增改版 59 页：15 个普通产品详情、3 个 Solution Hub、40 篇技术文章、1 个 Cookie Policy。16 个未纳入本轮的页面整份 HTML 逐字节不变，包含已确认的 7 个样板及首页、两份美工稿与其他明确排除页面。既有公共 CSS/JS/图片文件均不改动；新增样式仅作用于本轮页面。

- [本轮实际改动页面清单](reports/actual-modified-pages.csv)
- [逐页原文、标题、图片、链接、ID、表格与排除页面哈希证明](reports/type-expansion-proof.json)
- [全部 75 页路线](CURRENT_PAGE_LIST.csv)
- [基线发布版本清单](historical/CURRENT_PREVIEW_MANIFEST-f0d0969.json)
- [预览地址](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/)

- 当前主分支：[main](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/tree/main)
- 当前运行版本：[616a4b284b099da1dcbdd9818cd72ebaf747c01e](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/commit/616a4b284b099da1dcbdd9818cd72ebaf747c01e)
- [本次 Pages 部署成功](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/actions/runs/37055835846)
- [当前运行文件清单](CURRENT_PREVIEW_MANIFEST.json)
- [当前浏览器检查与未运行项](CURRENT_BROWSER_QA.json)

## 同类型扩展

普通产品 Hero 使用各自完整名称、说明、主图及主要 CTA；各自模型、参数、应用、资料状态保留在下方，以清楚的一份概览配合原生 Complete product reference 展开完整身份资料。未复制 S02 数据。

Mineral Wool、Gypsum、PIR/PUR Hub 使用各自原文、原图和卡片数量，按用途与行动、应用场景、问题、材料方向、技术资料、申请与 FAQ 阅读。40 篇文章采用宽标题、独立 metadata、清楚的目录与容器内表格滚动；Cookie Policy 延续政策页目录与宽正文。

## 导航与正文范围

DESIGN REVIEW 的美工稿产品快捷入口及完整产品名称在本轮开始之前已全站同步，本轮原样保留。此前 README 中“其他 68 页评审条未变”只属于更早的七样板历史版本，不能用于描述最新基线。评审导航变化与页面正文改版应分别核对。

保留 Products 的 23 张无脚本基础卡、Featured 6 / All 23 / 8 系列筛选、Latest 6、紧凑面包屑、目录避让固定 Header、手机菜单关闭及表格内部滚动。

## 验证与边界

59 页原有正文文字、标题级别、图片全部属性、链接、ID、表格单元格均通过静态保留检查。15 个普通产品仅增加原生展开标签文字。16 个排除/已确认页面整份 HTML 及正文哈希相同。

实际托管版本已完成 1180×757 与 500×757 两种视口的 118 项路线几何检查，覆盖全部 59 页；没有整页横向溢出。代表性普通产品、长名称产品、Hub、普通/复杂文章及 Cookie 页面已检查实拍截图。15 个产品完整资料展开/键盘收起通过；两篇文章与 Cookie 共 38 个目录链接（含 10 个 H3 目标）点击后避开固定页头并收起窄屏目录。表格实际内部横滚、菜单关闭与焦点恢复、Products 6/23 及 8 系列数量已复核。最宽五列表格仍按自身内容宽度在桌面容器内横滚，不强制统一列宽。343 个运行文件与远程 Git 树匹配。320px、390px 实际托管渲染、真实禁用 JavaScript 重载、触屏及 200% 缩放仍为 NOT RUN；500px 是桌面窄窗，不是手机实测。不会为把未运行项改成 PASS 而另改代码。

未连接正式 WordPress、真实表单、邮件、Search、WPML、资料权限或统计；没有新增全站动画。旧三个源码 ZIP 为历史基线，不是本轮最新源码，不能用于恢复本轮版本。历史发布和检查证据原样保留。

## 本地构建

Python 3.10+：运行 python scripts/build.py。逐页保留检查脚本 scripts/qa-expansion.py 使用 lxml，并依赖与项目并列的冻结基线 grecho_verified_latest_baseline_20261002/public。构建本身不需要第三方依赖或联网。
