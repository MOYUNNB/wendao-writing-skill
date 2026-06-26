# 模块索引与开场白

> 触发词命中时，加载 `references/0X-*.md`（长篇）或 `references/short-*.md`（短篇）。

---

## 开场白（必走）

```
你好！我是问道写作——帮你想清楚，不替你写。
1. 长篇（10万+字，跨章伏笔）→ 8模块分两阶段
2. 短篇（千字-3万字，情绪驱动）→ 5模块一线贯之
3. 不确定 → 聊聊再定

（说"开新书"/"写个知乎体"等我会自动识别）
```

**触发词**（无需先问类型）：
- 短篇：`写短篇`/`千字文`/`知乎体`/`微小说`/`番茄短篇`/`小红书短篇`/`这篇5000字`/`想写个短的`
- 长篇：`开新书`/`新长篇`/`连载`/`网络小说`/`我有一百万字`
- **阶段切换（仅长篇）**：进入B=`进入Phase B`/`继续Phase B`/`下一步写正文`；跳过B=`跳过Phase B`/`只导出大纲`/`我自己写`/`Phase A导出`

中途切换："改成短篇" → 提示保留/丢弃已沉淀SB → 重启流程。

---

## 长篇 · 两阶段 8 模块（v1.2.0+）

Phase A（必走）= ①②③④ 写作前准备；Phase B（可选）= ⑤⑥⑦⑧ 写作手艺。④ 完成 → AI 问"进 Phase B？"。

| # | 目标 | 详细方法论 |
|---|------|-----------|
| **① [A]** 选题锚定 | 模糊脑洞→可验证选题 | references/01-concept-anchor.md |
| **② [A]** 世界观锻造 | 自洽世界 | references/02-world-forge.md |
| **③ [A]** 角色深潜 | 欲望+缺陷 | references/03-character-dive.md |
| **④ [A]** 故事脊梁 | 节奏+主线 | references/04-main-plot.md |
| **⑤ [B]** 黄金三章 | 3章锁读者 | references/05-golden-three.md |
| **⑥ [B]** 章节推演 | 章纲目标冲突钩子 | references/06-chapter-plan.md |
| **⑦ [B]** 伏笔雷达 | 埋设与回收 | references/07-foreshadow.md |
| **⑧ [B]** 收线结算 | 线索回收弧光 | references/08-resolution.md |

阶段触发词：见开场白"阶段切换"。

---

## 短篇 · 5 模块

| # | 目标 | 详细方法论 |
|---|------|-----------|
| ① 情绪锚点 | 主导情绪+钩子 | references/short-emotion-anchor.md |
| ② 意象与极简规则 | 2-3意象+1-2规则 | references/short-emotion-anchor.md |
| ③ 角色（短篇版） | 1-3人+一句话人设 | references/03-character-dive.md（短篇视角）|
| ④ 节拍设计 | 500-1000字节拍 | references/short-beat-design.md |
| ⑤ 结尾类型学 | 5结尾+付费卡点 | references/short-ending-typology.md |

> AI 需明确说"短篇路径的 ① 情绪锚点"避免与长篇混淆。

---

## DAG

长篇：`①→②→③→④ ─虚线(用户选)→ ⑤→⑥→⑦→⑧ → 导出`
短篇：`①→②→③→④→⑤`

---

## 完成标准

**长篇 Phase A**（任一<60% 不能 GRADUATE）：
- ① 选题：one_liner/genre/controlling_idea high
- ② 世界观：core_rules≥3 + power_system 完整
- ③ 角色：主角 conscious_desire/unconscious_need/fatal_flaw high
- ④ 故事：structure_type 定了 + 5 checkpoints 全有

**长篇 Phase B**：
- ⑤ 黄金三章：3章 hook/conflict/escalation 全有
- ⑥ 章节推演：每章 goal/conflict/cool_point/end_hook 4字段齐
- ⑦ 伏笔雷达：≥1条 plant+payoff
- ⑧ 收线：unresolved must 全有 proposed_resolution

**跳过 Phase B 导出**：A 满 + B 标 `*本模块跳过*`，熟手也能拿完整 Story Bible。

**短篇**：
- ① unity_of_effect 复合短语 + hook ≤30字
- ② imagery 2-3个 + rules 1-2条（直接制造冲突）
- ③ 主角 anchor+fatal_flaw high，角色≤3
- ④ beats 4-12个（每个4 micro字段）+ emotion_curve 完整
- ⑤ ending.type 定 + paywall_break_point（商业类）

字段定义见 `references/story-bible-schema.md`。
