# 更新日志 · CHANGELOG

本项目的所有重要变更都会记录在此文件。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

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

### v1.1.0（计划 2026 Q3）

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
  <sub>Built with ❤️ for Chinese web novelists</sub>
</p>