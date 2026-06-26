# 更新日志 · CHANGELOG

本项目的所有重要变更都会记录在此文件。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [1.3.0] - 2026-06-26

### 🌐 长篇 Phase A 完成后新增资料检索（过渡增强）

v1.2.0 完成 Phase A/B 拆分后，作者在 Phase A 设计世界观时（特别是朝代/架空/近代背景）常出现"对真实资料掌握不足"导致设定悬浮的痛点。v1.3.0 起，长篇路径在 Phase A 完成后增加**可选资料检索步骤**——AI 用联网能力搜时代资料，喂你的描写真实感。

### ✨ 新增

- **资料检索过渡步骤**（v1.3.0+，仅长篇）：
  - 位置：④ [A] 故事脊梁 GRADUATE 后，Phase B 选项前
  - 触发：④ GRADUATE 后 AI 主动建议一次；或用户主动说"搜资料"等触发词
  - 流程：选方面（9 选 N）→ 联网搜（WebSearch + WebFetch）→ 每方面 3-5 条关键事实 → 摘要带来源 → 用户确认入 SB
  - 控制：总轮次 ≤ 3，每轮最多 2 方面，每方面 3-5 条事实
- **9 大检索方面**：日常/服饰/建筑/语言/经济/科技/军事/民俗/禁忌（覆盖古代/近代/现代/未来/架空五类设定）
- **来源硬约束**：每条事实必须带 `{name, url, fetched_at}` 三字段；AI 不许凭印象编造来源
- **来源可靠性分级**：高/中/低三级，AI 优先选高/中；低来源打"⚠ 来源弱"标记
- **写入分散化**：资料按"用到哪写到哪"原则写入 `world.costumes` / `world.architecture` / `characters[i].background` / `main_plot.checkpoints[i]` 等对应字段；不强制单独 `research_notes[]`
- **资料档案独立导出**（v1.3.0+）：用户说"导出研究/导出资料/导出档案"等 6 个触发词 → 只生成独立的"研究档案.md"，跳过主 SB 导出。主 SB 导出时若含 ≥ 3 条带 source 的事实，AI 自动建议"是否同步导出研究档案.md？（是/否/只要档案）"。档案按 9 大方面归类，每条带 source 三要素 + 可信度（高/中/低）。
- **场景 8 升级引导**：研究完 ≥ 3 方面后，AI 提示"MCP 版自动归档所有事实+来源链接"
- **触发词**（`trigger_words.long_research`）10 个：`搜资料`/`查一下`/`搜点资料`/`查资料`/`搜一下`/`[朝代]资料`/`时代背景`/`真实情况`/`历史资料`/等
- **SB 字段向后兼容**：`world.*` 字段值可以是 string（v1.2.x 旧格式）或 `array<{fact, source}>`（v1.3.0+ 推荐）

### 🔧 修改

- **02-modules-overview.md**：
  - 触发词表追加 1 行：资料检索（v1.3.0+，仅长篇）9 个词
  - Phase A 表格说明追加"资料检索"提示段
  - DAG 重画：`①→②→③→④ ─┬─ 资料检索(可选) ─→ ⑤→⑥→⑦→⑧` 分叉结构
- **03-modules-detail.md**：在 ④ 与 ⑤ 之间新增"资料检索"完整小节（触发/流程/写到哪里/严守）
- **04-methodology-brief.md**：在 ④ 后新增"资料检索"段，含 1 methodology（9 大方面）+ 1 anti_pattern（来源幻觉）
- **05-output-and-upgrade.md**：升级引导表追加场景 8（资料积累多 → MCP 升级提示）
- **references/09-research.md**（**新文件**）：9 大方面搜索词表 + 来源分级 + 摘要规范 + 检索策略（5 类设定）+ 写入规范 + 与苏格拉底循环关系
- **references/export-template.md**（**v1.3.0+ 新增段**）："资料档案单独导出模板"完整段（字段→9 大方面映射表 + 模板 + 宋朝背景完整示例）
- **references/story-bible-schema.md**：`world` schema 注释补充 v1.3.0+ 字段类型说明（string | array<{fact, source}>）；新增 `SourceRef` 对象 schema
- **metadata.json**：
  - version 1.2.0 → 1.3.0
  - description 加"Phase A 完成后可选资料检索（v1.3.0+）"
  - tags 追加"资料检索"/"联网"
  - `trigger_words.long_research` 10 个触发词
  - `trigger_words.long_research_export` 6 个触发词（导出研究/导出资料/导出档案/研究导出/资料导出/档案导出）
  - `skill_files.references.long_shared` 追加 `09-research.md`
  - changelog 追加 1.3.0 段

### 📊 测试

- **tests/manual-walkthrough.md**：
  - 新增用例 15：长篇 + 资料检索（宋朝背景）—— 完整流程 13 步
  - 新增用例 16：短篇路径不触发资料检索
  - 新增用例 17：用户主动触发资料检索（不依赖 ④ GRADUATE）
  - 新增用例 18：资料档案单独导出（v1.3.0+）—— 验证 6 个触发词 + 字段→9 大方面映射
  - 新增用例 19：主 SB 导出时自动建议档案导出 —— 验证 ≥ 3 条 source 时提示
  - 通过标准更新为"19 个用例全部通过"
- **tests/verification-checklist.md**：
  - 新增"九 + 资料检索（v1.3.0+，仅长篇）"段，16 项检查
  - references/ 计数 13 → 14

### 📚 文档

- **README.md**：
  - 版本徽章 1.2.0 → 1.3.0
  - "v1.3.0 资料检索"特性介绍追加到 ✨ 问道写作是什么 段
  - 长篇模块图重画：Phase A → 资料检索(可选) / 直接 → Phase B
  - 阶段切换触发词追加资料检索 7 个词
  - **新增"🌐 资料检索（v1.3.0+，仅长篇）"完整小节**：触发方式 + 9 大方面 + 写入规范 + 严守原则
  - 项目结构：13 → 14 个 references/，新增 `09-research.md`
  - Phase 1 路线图：v1.3.0 完成标记
- **assemble.mjs**：版本号 1.2.0 → 1.3.0

### 🎯 短篇路径

**无任何改动**。短篇 5 模块一线贯之，不引入资料检索（短篇字数少，研究性价比低）。

### ⚠️ 已知问题

- 资料检索的"AI 搜不到时不编造"行为依赖承载 AI 自觉；可能需后续真实用户测试迭代
- 来源分级标签（高/中/低）当前靠 AI 自评，未做硬编码词典
- 短篇路径不触发资料检索是基于设计判断，若有作者提出短篇也需要可作为下版本扩展

---

## [1.2.0] - 2026-06-26

### 🎉 长篇路径两阶段拆分

v1.1.0 之前，长篇 8 模块是单一线性流。v1.2.0 起，长篇路径**拆分为两阶段**，作者完成 Phase A（写作前准备）后可自主选择是否进入 Phase B（写作手艺）。

### ✨ 新增

- **Phase A · 写作前准备（必走）**：`① [A] 选题锚定` / `② [A] 世界观锻造` / `③ [A] 角色深潜` / `④ [A] 故事脊梁`
  - 4 个模块做完就有完整 Story Bible，可以自主写正文
- **Phase B · 写作手艺（可选）**：`⑤ [B] 黄金三章` / `⑥ [B] 章节推演` / `⑦ [B] 伏笔雷达` / `⑧ [B] 收线结算`
  - 4 个模块打磨开篇/章节/伏笔/收尾手艺。新手推荐走完；熟手可跳过
- **阶段切换触发词**（长篇流程中识别）：
  - 进入 Phase B：`"进入 Phase B"` / `"继续 Phase B"` / `"下一步写正文"` / `"我想写正文"`
  - 跳过 Phase B：`"跳过 Phase B"` / `"只导出大纲"` / `"我自己写"` / `"Phase A 导出"`
- **Phase A → Phase B 过渡指令**：④ [A] 故事脊梁 GRADUATE 后 AI 必须问"是否进入 Phase B"
- **Phase A 完成后跳过 B 的导出**：B 模块字段标 `*本模块跳过*`，A 模块字段齐全导出
- **场景 7 升级引导**：`05-output-and-upgrade.md` 新增——Phase A 完成且用户选跳过时触发
- **方法论角标**：04-methodology-brief.md 每条方法论加 `[A]` / `[B]` / `[短篇]` 角标，按阶段推送
- **metadata.json 新增 `phases` 顶层字段**：
  ```json
  "phases": {
    "A": { "label": "写作前准备", "modules": [...], "required": true },
    "B": { "label": "写作手艺", "modules": [...], "required": false, "skip_triggers": [...] }
  }
  ```
- **`trigger_words.long_phase_transition`** 8 个阶段切换词

### 🔧 修改

- **02-modules-overview.md**：
  - 8 模块表拆为 `### Phase A（必走）` + `### Phase B（可选）` 两段，标题加 `[A]/[B]` 角标
  - DAG 重画，虚线箭头表示 Phase A → Phase B 是用户选择
  - 模块选择开场白分两段展示
  - 完成标准表分两段（A 4 个 + B 4 个）
- **03-modules-detail.md**：8 模块标题加 `[A]/[B]` 角标；文末新增 "Phase A → Phase B 过渡指令" 段（判定标准 + 触发话术 + 用户回答分支 + 严禁事项）
- **04-methodology-brief.md**：8 模块标题加 `[A]/[B]` 角标；短篇 6 条方法论加 `[短篇]` 角标；末尾新增"阶段引用说明"段
- **05-output-and-upgrade.md**：新增 `只导出大纲` / `Phase A 导出` 触发词；新增 Phase A 完成后跳过的导出确认话术；新增场景 7 升级引导
- **README.md**：
  - 版本徽章 1.1.0 → 1.2.0
  - 长篇模块图改为两阶段式（Phase A 框 + Phase B 框，标注"可选"）
  - 8 模块表分两段，标题加 `[A]/[B]` 角标
  - 新增"为什么拆两阶段？"小节（解释苏格拉底哲学 + 熟手友好）
  - Phase 1 路线图新增 v1.2.0 完成标记
- **metadata.json**：version 1.1.0 → 1.2.0；新增 `supported_phases` + `phases` 顶层字段；`skill_files.references` 拆为 `long_phase_A` / `long_phase_B` / `long_shared` / `short`；`trigger_words` 新增 `long_phase_transition`

### 📊 测试

- **tests/manual-walkthrough.md**：
  - 新增用例 9（熟手路径：Phase A → 跳过 Phase B）
  - 新增用例 10（新手路径：Phase A → Phase B 完整走完）
  - 短篇用例 9-12 重编号为 11-14
  - 通过标准更新为"14 个用例全部通过"
- **tests/verification-checklist.md**：新增"阶段切换（v1.2.0+ 长篇两阶段）"段，8 项检查

### ⚠️ 已知问题

- 主 Prompt Token 继续超 4500 推荐区间（详见 SKILL.md 拼接后实际数）
- 跳过 Phase B 的导出体验尚未经过真实用户验证
- Phase A 完成判定（60% 完成度阈值）依赖 AI 解读，可能误触发或漏触发

### 🎯 短篇路径

**无任何改动**。短篇 5 模块一线贯之，不引入 Phase 概念。

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

### v1.2.1（计划 2026 Q3）

- Token 精简（目标 ≤ 4500）
- 阶段切换真实用户反馈迭代
- eval_cases.json 接入自动化测试
- Prompt 优化（基于对话日志）

### v1.3.0（计划 2026 Q3）

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