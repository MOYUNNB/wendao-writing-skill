# 更新日志 · CHANGELOG

本项目的所有重要变更都会记录在此文件。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [1.1.0] - 2026-06-25

### 🎉 新增短篇模式分支

v1.0.0 是长篇连载专用。v1.1.0 起，开场白先识别 `length_type`（长篇 / 短篇），自动加载对应模块流。短篇网文（千字-3 万字，知乎/番茄/小红书短篇）现在有独立创作流程。

### ✨ 新增

- **短篇 5 模块分支**（开场白先问长度，再加载对应模块）：
  - ① 情绪锚点（替代长篇选题锚定）— 单一效果理论 / 一句话钩子 / 200-500 字导语
  - ② 意象与极简规则（替代长篇世界观锻造）— 2-3 意象 + 1-2 规则即冲突
  - ③ 角色深潜（短篇版）— 1-3 人 + 一句话人设 + "能否砍掉"检查
  - ④ 节拍设计（替代长篇脊梁+黄金三章+章节推演）— 500-1000 字节拍 + 情绪弧线
  - ⑤ 结尾类型学（替代长篇收线结算）— 5 种结尾（反转/留白/圆形/开放/截断）+ 付费卡点

- **3 个 references/ 短篇专题文件**：
  - `short-emotion-anchor.md` — 单一效果（坡）/ 6 种钩子原型 / 导语 200-500 字框架
  - `short-beat-design.md` — 5 种短篇结构（密集反转/单一场景/倒叙/圆形/揭示）+ 意象回声系统 + 冰山叙事 6 条 + 对话即叙事 4 重功能
  - `short-ending-typology.md` — 5 种结尾详解 + 付费卡点 4 位置 + 重读奖励 5 位置

- **story-bible-schema.md** 新增 `length_type` 顶层字段 + 短篇专用字段（emotion/short_world/short_characters/beats/emotion_curve/short_ending/paywall_break_point）

- **04-methodology-brief.md** 新增 6 条短篇 P0/P1 精简方法论（单一效果/短篇 5 结构/导语/意象回声/极简规则/5 种结尾）

- **05-output-and-upgrade.md** 新增场景 6：短篇路径完成时升级引导

- **02-modules-overview.md** 开场白改为长度优先问询；模块表分两段（长篇 8 + 短篇 5）；DAG 画两条独立路径

- **08 个长篇 references/** 末尾追加"短篇视角"小节，链向对应短篇专题

- **tests/manual-walkthrough.md** 新增 4 个短篇用例（用例 9-12）：知乎体完整流程 / 触发词识别 / 中途切换 / 付费卡点设计

- **tests/verification-checklist.md** 新增"短篇路径"段，验证触发词识别 / 开场白长度问询 / 5 模块功能 / 中途切换 / 短篇导出

- **README.md** 更新至 v1.1.0：双路径模块体系 + 短篇触发词表 + 13 个 references/ + Phase 1 v1.1.0 标记

- **CLAUDE.md** 新增"5 大模块（短篇路径）"段 + references/ 文件数 10→13 + 当前任务标记

- **metadata.json** v1.0.0 → v1.1.0：新增 `supported_length_types` / `trigger_words` 分长短篇 / `short_opening_message` / 短篇标签

- **assemble.mjs** v1.0.0 → v1.1.0：SKILL_META 描述更新 + 短篇相关 tags

- **export-template.md** 新增短篇路径导出模板（emotion/short_world/short_characters/beats/short_ending 字段 + 完整示例）

### 🔧 技术规格

- **主 SKILL.md**：6027 tokens（含 YAML frontmatter）
  - 01-core-principles.md: 1048
  - 02-modules-overview.md: 1187
  - 03-modules-detail.md: 1508
  - 04-methodology-brief.md: 1421
  - 05-output-and-upgrade.md: 863
- **主 Prompt Token**：6027（接近 6000 目标上限，已超 4500 推荐区间但低于 6000 绝对上限）
- **references/ 文件数**：10 → 13（新增 3 个短篇专题）
- **方法论 brief 条数**：22 → 28（+6 短篇 P0/P1）
- **新增 SB 字段数**：9 个（length_type + 8 个短篇字段）
- **触发词总数**：原 16 个 → 现 32 个（16 长篇 + 16 短篇）

### 🎯 核心指标

| 指标 | v1.0.0 | v1.1.0 |
|------|--------|--------|
| 路径数 | 1（长篇） | 2（长篇 + 短篇） |
| 模块数 | 8（长篇） | 8 + 5（双路径） |
| references/ 文件数 | 10 | 13 |
| 方法论 brief 条数 | 22 | 28 |
| 触发词数 | ~16 | ~32 |
| 主 Prompt Token | 4838 | 6027 |

### ⚠️ 已知问题

- 主 Prompt Token 6027 接近 6000 绝对上限，超 4500 推荐区间；后续版本需继续精简
- 短篇路径尚未经过真实用户验证
- `eval_cases.json` 已有但未在 v1.1.0 中加入自动化测试流程

---

## [1.0.0] - 2026-06-23

### 🎉 首次发布

这是问道写作 Skill 版的第一个正式版本。

### ✨ 新增

- **5 个模块化 Prompt 源文件**：
  - `01-core-principles.md` — 核心原则 + 苏格拉底循环
  - `02-modules-overview.md` — 8 模块速查表
  - `03-modules-detail.md` — 8 模块 5 层追问链
  - `04-methodology-brief.md` — 22 条核心方法论
  - `05-output-and-upgrade.md` — 导出与升级引导

- **10 个深度方法论文档（references/）**：
  - 8 模块详细方法论（每个模块 1 个）
  - `story-bible-schema.md` — 完整 JSON Schema
  - `export-template.md` — Markdown 导出模板

- **工具脚本**：
  - `assemble.mjs` — Node.js 自动拼接脚本（零依赖）
  - Token 估算（中文字符 1.5/token，英文 4/token）
  - 超限警告与优化建议

- **Skill 元数据**：
  - `metadata.json` — 适配虾评 / Coze / 扣子平台
  - 开场白 + 6 个推荐问题

- **测试验证**：
  - `tests/manual-walkthrough.md` — 8 模块手动验证脚本（8 用例）
  - `tests/verification-checklist.md` — 完整验收清单

- **文档**：
  - `README.md` — 项目主文档（营销型）
  - `docs/PRD-v4-summary.md` — PRD 关键章节摘要
  - `docs/platform-submission.md` — 虾评 / Coze 上架指南

### 🔧 技术规格

- **主 SKILL.md**：4838 tokens（含 YAML frontmatter 49 tokens）
- **5 个源文件总 token**：4837 tokens（高度复用）
- **references/ 总 token**：~8000（按需读取，不注入主 Prompt）
- **运行依赖**：零（纯 Markdown + Node 标准库）
- **支持平台**：虾评 / Coze / 扣子 / Claude Code

### 📜 许可证

采用 **Business Source License 1.1 (BSL)**：
- 4 年变现窗口（2026-06-23 → 2030-06-23）
- 4 年后自动转为 Apache License 2.0
- 个人/学习/非生产用途免费
- 商业用途需联系获得商业许可

### 🎯 核心指标

| 指标 | 目标 | 实际 |
|------|------|------|
| 主 Prompt Token | 3500-4500 | 4838 ⚠️ |
| 模块完整覆盖 | 8/8 | 8/8 ✓ |
| 5 层深挖覆盖 | 8/8 | 8/8 ✓ |
| 苏格拉底循环 | LISTEN→UPDATE | ✓ |
| 6 种分支动作 | 全部实现 | ✓ |
| 护栏规则 | 不生成正文 | ✓ |
| 升级引导 | 5 场景 | ✓ |

### 🐛 已知问题

- 主 Prompt Token 略超推荐上限（4838 vs 4500），但远低于绝对上限 6000
- 暂未提供 Coze / 扣子的实际测试反馈
- 升级引导话术尚未经过真实用户反馈调优

### 🚧 下个版本预告（v1.0.1）

根据 v1.0.0 真实用户反馈迭代：
- Prompt 优化（基于对话日志）
- Token 精简（目标 4200）
- 修复手动验证发现的问题
- 增加更多模块示例

---

## [未发布] - 计划中

### v1.1.1（计划 2026 Q3）

- Token 精简（目标 ≤ 4500）
- 短篇路径真实用户反馈迭代
- eval_cases.json 接入自动化测试
- Prompt 优化（基于对话日志）

### v1.2.0（计划 2026 Q3）

- MCP 版支持（Trae / Claude Code）
- 持久化 Story Bible
- 多本书管理
- 知识库 CDN 自动更新

### v2.0.0（计划 2026 Q4）

- 创作者社区
- 选题雷达
- 写作训练营
- 签约平台对接

---

<p align="center">
  <sub>Built with ❤️ for Chinese web novelists & short story writers</sub>
</p>