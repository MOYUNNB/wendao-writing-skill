# CLAUDE.md — 问道写作项目指令

> 供 Claude Code / Claude 加载的项目级指令。

---

## 项目性质

- **产品**：问道写作 — 基于苏格拉底接生法的网文创作辅助工具
- **当前阶段**：Phase 1 — Skill 版开发
- **PRD 路径**：`docs/PRD-v4.md`（必读）
- **目标用户**：国内网文作者（特别是新人）
- **开发方法**：vibe coding — 快速迭代，工具先于流程

## 核心原则（产品级）

写任何 Prompt 或文档时都必须遵守：

1. **永远不生成正文** — Skill 工具只提问、追问、反问、确认
2. **永远只提问** — 不替作者做创意决策
3. **每次回复最多 3 个问题** — 避免信息过载
4. **不居高临下** — 像教练而非裁判

## 8 大模块（产品骨架）

PRD §6 详细定义。开发时必须严格按这 8 个模块组织 Prompt：

1. 选题锚定 → 2. 世界观锻造 → 3. 角色深潜 → 4. 故事脊梁 → 5. 黄金三章 → 6. 章节推演 → 7. 伏笔雷达 → 8. 收线结算

## 苏格拉底循环（每轮必走）

```
LISTEN → ASSESS → DECIDE → RESPOND → UPDATE
```

6 种分支动作：DEEPEN / CONFIRM / CHALLENGE / UNBLOCK / PIVOT / GRADUATE

## 文件组织约定

### `skills/prompts/`
模块化 Prompt 源文件，**5 个文件**（不再增减）：
- `01-core-principles.md` — 核心原则 + 苏格拉底循环
- `02-modules-overview.md` — 8 模块速查表
- `03-modules-detail.md` — 8 模块的 5 层追问链
- `04-methodology-brief.md` — 20-30 条核心方法论精简版
- `05-output-and-upgrade.md` — 导出指令 + 升级引导

### `skills/references/`
深度方法论（**按需读取，不注入主 Prompt**）：
- 8 个模块详细文档（`01-concept-anchor.md` ~ `08-resolution.md`）
- `story-bible-schema.md` — SB JSON Schema 完整定义
- `export-template.md` — 导出 Markdown 模板

### `tests/`
- `manual-walkthrough.md` — 8 模块手动验证脚本
- `verification-checklist.md` — 验收清单

## Prompt 编写原则

1. **精炼** — 主 SKILL.md 控制在 3500-4500 token（不超 4500）
2. **触发词驱动** — 每个模块有明确触发词（"开新书"、"添加角色"）
3. **不引用未存在的文件** — Prompt 源文件内部自洽
4. **中文优先** — 用户群是国内网文作者
5. **护栏前置** — 核心原则放在 Prompt 开头（注意力黄金位置）

## 不要做的事

- ❌ 不要修改 PRD 内容（除非用户明确要求）
- ❌ 不要创建额外的目录或拆分文件
- ❌ 不要引入 npm 依赖（assemble 脚本用纯 Node 标准库）
- ❌ 不要在主 SKILL.md 中包含大段参考文献（放 references/）
- ❌ 不要生成任何网文正文示例（产品哲学不允许）

## 当前任务

按以下顺序执行：

1. **Phase 1**（已完成）：项目初始化
2. **Phase 2**：写 5 个 Prompt 源文件
3. **Phase 3**：写 10 个 references/ 文档
4. **Phase 4+5**：assemble.mjs + metadata.json
5. **Phase 6**：测试验证脚本
6. **Phase 7**：上架文档

---

## 详细参考

- PRD：`docs/PRD-v4.md`
- 计划文件：`C:\Users\13926\.claude\plans\e-prd-v3-md-prd-parallel-flurry.md`
- 命运之书参考：`E:\桌面\命运之书-skill\`