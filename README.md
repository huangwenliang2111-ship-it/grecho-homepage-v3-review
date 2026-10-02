# GRECHO 英文全站视觉预览 · 当前版本

当前范围：75 条英文路线，336 个运行文件。保留上一版全部 69 页，新增 Latest Insights 对应的 6 篇已有英文文章。

- 预览：[GRECHO English Preview](https://huangwenliang2111-ship-it.github.io/grecho-homepage-v3-review/)
- 页面运行版本：[abf430688f8216f249809ccffd1d1dafbd59d36a](https://github.com/huangwenliang2111-ship-it/grecho-homepage-v3-review/commit/abf430688f8216f249809ccffd1d1dafbd59d36a)
- [现行 75 页清单](CURRENT_PAGE_LIST.csv)
- [现行运行文件与版本校验清单](CURRENT_PREVIEW_MANIFEST.json)
- [现行浏览器检查结果与限制](CURRENT_BROWSER_QA.json)

## 本轮增量

- 所有沿用原文页面的实际锚点统一避开固定 Header，覆盖 H2、H3 和其他 ID；不改变原文、标题级别或原有锚点
- 16 个通用产品页面的完整面包屑路径紧凑排布，长名称自然换行
- 能力条和补充 CTA 使用独立的辅助模块间距；首页与两份美工稿页面不改版
- Latest 六篇加入完整原英文文章；Featured 的筛选只作用于 13 篇精选文章，并显示数量
- Products 基础 HTML 显示全部 23 张卡；脚本就绪后启用原有 Featured=6、All=23 和系列筛选；不恢复已删除的 Product Selector 介绍栏目
- 仅在手机菜单打开时提高抽屉层级，避免预览状态条遮住关闭按钮；关闭后原布局不变

## 验证边界

75 页离线结构及静态安全检查通过；42 篇文章的 553 个目录链接（含 168 个 H3）均对应唯一目标。新六篇正文、标题级别和原有 ID 已与官方英文抓取核对。首页、设计稿页面和既有文章正文保持。

320px / 390px 必须看现行浏览器检查文件的实际结果。已有的离线数据、500px 桌面窄窗或源码断言不能替代实际托管网址在 320px / 390px 的验收；也不代表触屏、200% 缩放或全浏览器兼容性通过。

实际托管网址已在 500×758 和 1180×758 的桌面浏览器视口检查全部 75 页，整页横向溢出为 0；每档实际点击 553 个目录链接，标题遮挡为 0。Products、Insights、目录、菜单及表格内部横滑的已测项通过。菜单关闭按钮遮挡问题已修复并在最终运行版本复测。

完整页面及锚点巡检对应 451017e69c06860b61002586eb7dcf4ee9053d3b；最终 abf430688f8216f249809ccffd1d1dafbd59d36a 只增加菜单打开状态的层级修复，关闭、Escape、遮罩、重开、焦点及滚动恢复已另行复测。500px 是桌面窄窗，不能记为手机实测。320/390px、真实禁用 JavaScript 重载、触屏与 200% 缩放仍未测试；其中 23 张产品卡的无脚本基础 HTML 已单独验证。

## 静态预览边界

未连接正式 WordPress、真实表单、邮件、受保护文档下载、Search、语言切换或统计系统。技术参数、3 个待确认 FAQ 答案与资料权限状态不猜填。所有运行素材为本地文件。

## 历史记录

PREVIEW_BUILD_INFO.md 和 GITHUB_PREVIEW_ASSET_MANIFEST.tsv 均为 2026-09-29 首页导出历史，不代表当前 75 页；旧 TSV 原样保留，不作为现行文件清单使用。历史首页说明存于 historical/README-homepage-before-v4.md。当前版本以本页链接的 CURRENT_* 文件为准。
