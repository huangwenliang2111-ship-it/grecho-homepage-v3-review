# GRECHO 英文静态预览 · 七个视觉样板待审核

本轮只重排 6 类、7 个样板页面。预览仍保留 75 条英文路线、340 个运行文件；其余 68 页整份 HTML 与修改前逐字节相同。首页、Solutions 美工稿和 High-Hiding 美工稿产品页未改。

- 当前运行版本：[9a7604197bbd70b4621d4ae072c97dd3d84b9584](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/commit/9a7604197bbd70b4621d4ae072c97dd3d84b9584)
- [现行运行文件清单](CURRENT_PREVIEW_MANIFEST.json)
- [本轮浏览器检查与限制](CURRENT_BROWSER_QA.json)
- [全部 75 页路线清单](CURRENT_PAGE_LIST.csv)

## 本轮七个样板

1. [Products 产品汇总](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/products/)：舒适双列、独立图片区、标题与行动优先；保留 23 张卡、8 系列、Featured 6 / All 23、筛选及原有详情展开
2. [High-Airflow / High-Whiteness 通用产品](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/products/high-airflow-high-whiteness-acoustic-facing/)：Hero 聚焦名称、说明、原产品图和 CTA；身份、参数、资料状态完整移到下方
3. [Acoustic Hub](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/solutions/acoustic-ceiling-wall-facers/)：用途与行动在前，场景图与正文方向、材料、资料分层
4. [Resources](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/resource-center/)：资料任务和六类入口前移，15 张模糊预览作辅助，申请流程放回对应段落
5. [Class A / A2-s1,d0 技术文章](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/class-a-a2-s1-d0-noncombustible-facer-evidence/)：编辑型单栏长标题、分隔 metadata、清楚的目录和三列表格
6. [Typical Value 技术文章](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/facer-technical-data-typical-values-specification-limits/)：同类编辑布局，五列表格桌面完整显示、窄屏在容器内横滑
7. [Privacy Policy](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/privacy-policy/)：窄目录、宽正文、18 章连续阅读；窄屏目录可折叠

样板内的 DESIGN REVIEW 增加美工稿产品快捷入口并使用清楚产品名称。其他 68 页的评审条也保持原样，本轮没有全站评审导航更新。

## 已检查与未检查

实际 GitHub Pages 已检查 1180×757 与 500×757 的桌面浏览器视口，覆盖七页首屏构图、正文节奏与代表性下方模块。Products 实际筛选数量正确；两篇文章及 Privacy 共 47 个目录链接点击后显示目标并收起窄屏目录；菜单关闭和 Escape 恢复焦点与滚动；表格真实容器内横滑不带动整页。

最终细调已复测：五列表格桌面不再截断末列、Resources 的 01/02/03 不换行、深蓝 Hero 的主 CTA 层级清楚、通用产品正文标签与间距清楚、窄屏产品结果数量更紧凑。

320px / 390px 仍为 NOT RUN。500px 是桌面窄窗，不能当作手机实测；真实禁用 JavaScript 重载、触屏、200% 缩放和跨浏览器检查也未运行。无脚本 23 张卡基础 HTML 已单独验证。

七页原文、标题、ID、链接、图片和表格数据均保留。其他 68 页和既有公共资源逐字节保持；原有目录避让、紧凑面包屑、Latest 6、菜单关闭、表格横滑和筛选功能继续保留。

这是样板交付，等待用户视觉审核后才可扩展；不代表全站视觉通过。

## 静态预览边界与历史

未连接正式 WordPress、真实表单、邮件、受保护文档下载、Search、WPML 或统计。没有新增全站动画，也不猜填技术参数、FAQ 答案或资料权限。

CURRENT_BROWSER_QA.json 内保留 previous_functional_baseline 作为之前运行版本的历史功能证据。旧 PREVIEW_BUILD_INFO.md、GITHUB_PREVIEW_ASSET_MANIFEST.tsv 和 historical/README-homepage-before-v4.md 继续原样保留；它们不是本轮样板清单。
