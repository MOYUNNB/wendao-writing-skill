# PRD-v4 关键章节摘要

> 完整 PRD：`docs/PRD-v4.md`（~1850 行）
> 本文档：开发时快速查阅版

---

## 一、产品一句话

**问道写作** 是基于苏格拉底接生法的网文创作辅助工具 — 永远不替写，只通过精准提问引导作者自己想清楚。

## 二、双版本架构

| 维度 | Skill 版（当前） | MCP 版（Phase 2） |
|------|----------------|------------------|
| 形态 | 虾评/Coze Skill | Trae/Claude Code MCP |
| 价格 | 免费 | $9.9/月 |
| 持久化 | 会话内临时 | 本地文件持久化 |
| 知识库 | 20-30 条硬编码 | 模块+关键词检索 + CDN |

## 三、8 大模块

1. **选题锚定** — 把模糊脑洞变成可验证的选题
2. **世界观锻造** — 构建自洽世界
3. **角色深潜** — 创造有欲望有缺陷的角色
4. **故事脊梁** — 找到故事节奏
5. **黄金三章** — 3 章锁住读者
6. **章节推演** — 每章目标冲突钩子
7. **伏笔雷达** — 伏笔埋设与回收
8. **收线结算** — 线索回收、弧光完成

## 四、苏格拉底循环

```
LISTEN → ASSESS → DECIDE → RESPOND → UPDATE
```

### 5 层追问
```
第1层 表面 → 第2层 动机 → 第3层 矛盾 → 第4层 极限 → 第5层 代价
```

### 6 种分支动作

| 动作 | 触发 | 做什么 |
|------|------|--------|
| DEEPEN | 回答具体但不够深 | 下一层追问 |
| CONFIRM | 回答够具体 | 复述确认后存储 |
| CHALLENGE | 回答与已有矛盾 | 指出矛盾 |
| UNBLOCK | 作者卡住/含糊 | 给选择题 |
| PIVOT | 当前维度挖透 | 切换问题方向 |
| GRADUATE | 必填字段全完成 | 总结进入下一模块 |

## 五、4 条不可违反的原则

1. 永远不生成正文（段落、对话、场景描写）
2. 永远只提问、追问、反问、确认
3. 每次回复最多 3 个问题
4. 不居高临下（像教练而非裁判）

## 六、Skill Prompt 架构（7 section）

PRD §4.2 原始设计：
1. 核心原则
2. 苏格拉底循环（5 阶段 + 6 动作）
3. 8 大模块策略
4. 硬编码方法论（20-30 条）
5. 会话内 Story Bible 模板
6. 导出指令
7. 升级引导话术

**本项目采用精简版**：5 个源文件 + 1 个 SKILL.md（3500-4500 token）

## 七、会话内 Story Bible（简化版）

AI 在对话中维护：

```typescript
interface SessionStoryBible {
  concept: { one_liner, genre, core_appeal, controlling_idea } | null;
  world: { core_rules, power_system_overview } | null;
  characters: { name, role, conscious_desire, fatal_flaw, gold_finger }[];
  main_plot: { controlling_idea, structure_type, checkpoints } | null;
  golden_three: { chapter_1_hook, chapter_2_escalation, chapter_3_climax } | null;
  chapter_plan: { chapter, goal, conflict, end_hook }[];
  foreshadowing: { description, expected_payoff }[];
  resolution: { main_ending, completion_status } | null;
}
```

## 八、升级引导话术（5 个场景）

| 触发场景 | 引导话术 |
|---------|---------|
| 模块完成时 | "升级MCP版，创作记忆永久保留" |
| 新会话重复回答 | "升级MCP版，不需要每次重新开始" |
| 想追踪伏笔 | "MCP版支持完整伏笔管理" |
| 想导出完整项目 | "MCP版支持Markdown/JSON一键导出" |
| 超过 5 轮对话 | "MCP版不会因为关闭窗口丢失进度" |

## 九、PRD 必读章节（开发时）

- §4.1 核心能力清单：L199-210
- §4.2 Skill Prompt 架构：L211-256
- §4.3 会话内 SB Schema：L258-302
- §4.4 导出格式示例：L304-340
- §4.5 用户体验流程：L342-355
- §4.6 限制与边界：L357-366
- **§6 模块①-⑧**：第 6 章（5 层追问链源头）⭐ 最重要
- **§7.1 5 阶段 + 6 动作**：第 7 章 ⭐ 最重要
- **§9.1 硬编码方法论 30 条**：L1300-1331 ⭐ 最重要

---

## 十、与命运之书的差异

| 维度 | 命运之书 | 问道写作 |
|------|---------|---------|
| 核心方法论 | 8 技能驱动 | 8 模块驱动 |
| 引导深度 | 4 维追问（动作/语言/心理/空间） | 5 层深挖（表面/动机/矛盾/极限/代价） |
| 知识库结构 | 7 个 references | 10 个 references（按 8 模块组织） |
| 输出 | 自动生成 Markdown 文档 | Markdown + 升级 MCP 引导 |

**相同点**：
- 都用苏格拉底接生法
- 都不生成正文
- 都触发词驱动
- 都有 references/ 深度文档
- 主 SKILL.md 都保持精炼

---

> **摘要结束**
> 完整内容请查阅 `docs/PRD-v4.md`