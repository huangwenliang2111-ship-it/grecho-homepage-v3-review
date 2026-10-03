# GRECHO Contact + FAQ 静态视觉样板候选版

本轮以已验证的主版本 4952dd315b9e02dc9a0c943f8dabcf9ab7aa9015、运行版本 616a4b284b099da1dcbdd9818cd72ebaf747c01e 为基线，343 个运行文件逐一哈希一致后开始。候选版共 75 条英文路线、346 个运行文件。

正文仅调整 Contact 与 FAQ 的信息层级与样式。Contact 保留全部表单字段及禁用状态，Hero 后依次为紧凑申请类型和主要表单，三步 Request Review Path 移到表单之后。FAQ 保留全部 26 问答与 6 类，搜索和类别入口前置到 Featured quick answers 之前，申请与资源入口放在查找答案之后。原有文字、链接、图片、表单 DOM 和 FAQ 问答 DOM 均通过保留核对，原有筛选、搜索、预填及静态安全 JS 未修改。

42 篇技术文章只新增独立溢出提示 CSS/JS 引用，正文逐字节不变；表格仅在实际 scrollWidth > clientWidth 时显示“Scroll horizontally to view all columns”。其余 31 页整份 HTML 不变，全部既有非 HTML 运行文件不变。前轮 59 页与已确认 7 个样板的正文全部保留。

Contact 与 FAQ 已完成独立静态保留核对；托管版本的检查结果将写入当前浏览器验收记录。

以上为本候选版静态检查结果，实际托管浏览器验收须单独记录，不能沿用下方前轮通过结果。320px、390px、真实禁用 JavaScript 重载、触屏及 200% 缩放均仍为 NOT RUN。静态预览不连接生产 WordPress、真实表单或业务后台。

## 前轮已发布范围与历史验证

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

## 公开仓库与源码交付（当前说明）

本公开仓库是静态发布产物，供浏览和核对已发布页面。已核对主版本 4952dd315b9e02dc9a0c943f8dabcf9ab7aa9015：公开仓库不含 scripts/build.py 或 scripts/qa-expansion.py，因此下载本仓库并不提供可运行的源码构建或逐页保留检查环境。

需要重新构建时，应另行提供与目标版本对应的可重建源码、构建及检查脚本、必要依赖说明和获准交付的输入资料。历史源码 ZIP 不能替代当前版本源码。不会为补正文档而向公开仓库上传私有冻结基线、数据库、凭据或受保护文件。

[此前 README 原文](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/blob/4952dd315b9e02dc9a0c943f8dabcf9ab7aa9015/README.md)保留为发布历史记录，其中的本地构建说明不适用于下载当前公开仓库。以上历史范围和已发布验证记录描述先前同类型扩展版本；下一候选版的变更与验收须由其独立清单和检查记录确认。
