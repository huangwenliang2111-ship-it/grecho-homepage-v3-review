# GRECHO Contact 与 FAQ 视觉样板

本轮正文只改 Contact 与 FAQ。全部原有文案、字段、26 条 FAQ 答案、4 条精选答案、链接、图片和业务内容保留。表单仍是禁用的静态预览，未接入正式 WordPress 或真实提交。

- [Contact 样板](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/contact/)
- [FAQ 样板](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/faq/)
- [本轮修改页面清单](reports/contact-faq-modified-pages.csv)
- [当前运行文件清单](CURRENT_PREVIEW_MANIFEST.json)
- [本轮实际托管浏览器检查与未测试项](CURRENT_BROWSER_QA.json)
- [运行版本 de27cc38cdc71bb04bcda9a02028ad5841c1954d](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/commit/de27cc38cdc71bb04bcda9a02028ad5841c1954d)
- [该运行版本 Pages 部署成功](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/actions/runs/37089141330)

## 本轮范围

Contact 使用紧凑 Hero、四类申请入口和提前的主要表单；辅助的三步说明移至表单之后。FAQ 的搜索和一组主要类别筛选前置，原来的类别锚点保留为答案后的低优先级折叠区。正文结构和视觉更新共 2 页。

42 篇技术文章仅新增独立表格提示脚本和样式引用，正文逐字节不变。只有实际超过容器宽度的表格显示 “Scroll horizontally to view all columns”。不缩小文字、不裁列、不统一强制列宽。其余 31 页整份 HTML 不变；全部既有 CSS、JS 和图片不变。前轮 59 页与已确认 7 个样板的正文全部保留。

## 实际检查

1180×757 与 500×757 是实际桌面 Chromium 视口，500px 为窄窗，并非手机设备。Contact 与 FAQ 已核对实拍像素、字段禁用、申请路径、搜索、类别、无结果、重置、Accordion 和窄窗菜单关闭。桌面全部 26 个 FAQ Accordion 点击/Enter 开关通过。Contact 桌面表单起点从 1453px 提前到 899px。

原有 application-review 申请路径会保留参数并进入表单，但旧预填逻辑没有对应的 Request Type 选项映射，因而该选项仍为空；本轮按范围保留该行为。

42 篇文章在两种宽度分别检查了 65 个表格：桌面 2 个实际溢出显示提示、63 个不显示；窄窗 62 个显示、3 个不显示。实际尺寸变化后提示同步更新，表格内部横滚 120px 时整页横坐标仍为 0。全部 346 个运行文件已与实际托管字节逐一核对一致。几何检查不代表逐像素检查了所有文章。

320px、390px 实际托管渲染、真实禁用 JavaScript 后托管重载、触屏、200% 缩放以及跨浏览器检查仍为 NOT RUN。

## 公开仓库与源码交接

Public Repo 是静态预览发布产物。仓库实际没有 scripts/build.py 和 scripts/qa-expansion.py，下载仓库不能直接运行这些命令，也不构成可重建源码交付。

如需源码交接，应另行提供与目标版本匹配的可重建源码、构建及检查脚本、依赖说明和获准交付的资料。不会为了补 README 向公开仓库上传私有基线、数据库、凭证或受保护资料。旧源码 ZIP 不是本轮最新源码。

## 前轮历史

[前轮 README 原文](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/blob/4952dd315b9e02dc9a0c943f8dabcf9ab7aa9015/README.md)、[前轮 59 页清单](reports/actual-modified-pages.csv)及已有历史证据保留。前轮测试不能替代本轮测试；原 README 中的本地构建说明不适用于当前公开仓库。
