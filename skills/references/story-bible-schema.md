# Story Bible 完整 Schema（会话内维护）

> AI 在对话内自行维护这个 JSON。**用户无需感知**，但 AI 必须在每次完成必填字段时更新。

---

## 完整 Schema

```typescript
interface SessionStoryBible {
  // 顶层：作品类型（开场白时确定）
  length_type?: 'long' | 'short';  // 长篇 8 模块 | 短篇 5 模块

  // ==========================================
  // 长篇路径（length_type === 'long'，8 模块）
  // ==========================================

  // ① 选题锚定
  concept?: {
    one_liner?: string;             // 一句话法则
    genre?: string;                 // 类型
    core_appeal?: string;           // 核心爽点
    market_differentiator?: string; // 市场差异
    controlling_idea?: string;      // McKee Value + Cause
    author_connection?: string;     // 作者连接
  } | null;

  // ② 世界观锻造
  world?: {
    core_rules?: string[];          // 核心规则（3-5 条）
    power_system_overview?: string; // 力量体系概要
  } | null;

  // ③ 角色深潜
  characters?: {
    name: string;
    role: string;                   // protagonist/antagonist/ally/mentor/rival
    conscious_desire?: string;      // 显性欲望
    fatal_flaw?: string;            // 致命弱点
    gold_finger?: string;           // 金手指
    gold_finger_cost?: string;      // 金手指代价
  }[];

  // ④ 故事脊梁
  main_plot?: {
    controlling_idea?: string;
    structure_type?: string;        // core_fission/three_act/fichtean/...
    checkpoints?: {
      origin?: string;
      reversal?: string;
      darkest?: string;
      resolution?: string;
    };
  } | null;

  // ⑤ 黄金三章
  golden_three?: {
    chapter_1_hook?: string;
    chapter_2_escalation?: string;
    chapter_3_climax?: string;
  } | null;

  // ⑥ 章节推演
  chapter_plan?: {
    chapter: number;
    goal?: string;
    conflict?: string;
    end_hook?: string;
  }[];

  // ⑦ 伏笔雷达
  foreshadowing?: {
    description: string;
    expected_payoff?: string;
  }[];

  // ⑧ 收线结算
  resolution?: {
    main_ending?: string;
    completion_status?: string;     // 'in_progress' | 'completed'
  } | null;

  // ==========================================
  // 短篇路径（length_type === 'short'，5 模块）
  // ==========================================

  // ① 情绪锚点（替代长篇 concept）
  emotion?: {
    unity_of_effect?: string;       // 主导情绪（如"压抑中的希望"）
    hook_one_liner?: string;        // 一句话故事钩子
    genre?: string;                 // 类型
  } | null;

  // ② 意象与极简规则（替代长篇 world）
  short_world?: {
    imagery_set?: string[];         // 2-3 个核心意象
    short_rules?: string;           // 1-2 条规则即冲突
  } | null;

  // ③ 角色深潜（短篇版）
  short_characters?: {
    name: string;
    role: string;                   // protagonist/antagonist/ally
    anchor_sentence?: string;       // 一句话人设锚点
    conscious_desire?: string;
    unconscious_need?: string;
    fatal_flaw?: string;
    killable?: boolean;             // 能否从故事中删掉？
  }[];

  // ④ 节拍设计（替代长篇 main_plot + golden_three + chapter_plan）
  beats?: {
    id: number;                     // 1-8
    summary: string;                // 这个节拍讲什么
    emotion_delta: string;          // 情绪变化（如"紧张+1"）
    word_count: number;             // 500-1000 字
    imagery_echo?: string[];        // 此节拍出现的意象（用于意象回声）
  }[];
  emotion_curve?: string;           // 全文情绪弧线（如"紧张→更紧→爆发→余韵"）

  // ⑤ 结尾类型学（替代长篇 resolution）
  short_ending?: {
    type: 'twist' | 'open' | 'circular' | 'unresolved' | 'cut';
                                     // 5 种结尾：反转/留白/圆形/开放/截断
    paywall_break_point?: string;   // 付费截断在哪句话
    unity_check?: string;           // 结尾是否呼应了 unity_of_effect
  } | null;
}
```

---

## 字段更新规则

### 何时更新

每完成一个必填字段的高 confidence 回答时：

```
用户答完 → AI 内部识别属于哪个字段 → 评估 confidence → 更新 SB
```

### Confidence 判断标准

| 等级 | 标准 | 是否存储 |
|------|------|---------|
| **high** | 回答具体、可视化、不模糊 | ✅ 立即存储 |
| **medium** | 回答部分具体，但有保留 | ⚠️ 存储但标 medium |
| **low** | 回答模糊或试探性 | ❌ 不存储，等下次回答 |

### 更新示例

```
用户: "主角想复仇"
  ↓ AI 内部判断
  → 字段：characters[0].conscious_desire
  → confidence: high
  → 更新 SB
  ↓ 对话中体现
  "我记下了：主角的显性欲望是复仇"
```

---

## 维护清单（用户对话中可见）

| 完成时点 | AI 应说 |
|---------|--------|
| 字段完成（high） | "我记下了 [字段名]：[值]" |
| 模块完成 | "[模块名] 完成！建议进入下一模块" |
| 整体完成 | "8 大模块全部完成！可以导出 Markdown 了" |

---

## 与 MCP 版 SB 的差异

| 维度 | Skill 版 | MCP 版 |
|------|---------|--------|
| 字段数 | 简化版（PRD §4.3） | 完整版（PRD §8.1） |
| 持久化 | 会话内临时 | 本地文件 + 版本历史 |
| 跨引用 | 无 | 有（角色引用世界观等） |
| 自动更新 | 每次 AI 评估 | 通过 Tool 调用 |
| 用户可见度 | 仅"我记下了..."提示 | 完整 SB 视图 |

---

## 字段完成度自检（每次模块完成时）

```
concept: 
  [✓] one_liner (high)
  [✓] genre (high)
  [✓] controlling_idea (high)
  [ ] market_differentiator (medium)

characters[0]:
  [✓] name: 林风
  [✓] conscious_desire (high)
  [✓] fatal_flaw (high)
  [ ] unconscious_need (待完成)
```

完成度达到 80% 才触发 GRADUATE。

---

## 注意事项

1. **不要替作者决定**：confidence = high 必须是作者明确表述
2. **不要硬塞**：作者答得模糊就标 medium，不要强行升级
3. **不要冲突**：更新前检查与已有字段是否矛盾，矛盾触发 CHALLENGE
4. **用户可见最小化**：不要让用户看到 SB JSON，只说"我记下了"