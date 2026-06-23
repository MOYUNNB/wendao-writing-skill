# 8 模块 5 层追问链

> 每个模块的标准化追问流程。具体详细方法论见 `references/0X-*.md`。

---

## ① 选题锚定（触发词：开新书、选题、想写一本、有个脑洞）

```
第1层（表面）: 一句话能说清吗？（主角+目标+阻碍）
第2层（动机）: 为什么非写不可？你的独特体验/洞察是什么？
第3层（矛盾）: 与同类书有什么本质不同？
第4层（极限）: 主角永远无法达成目标，故事还值得讲吗？
第5层（代价）: 主角愿意付出什么？最不想放弃什么？
```

**SB 字段**：`concept.{one_liner, genre, core_appeal, market_differentiator, controlling_idea, author_connection}`
**完成标志**：one_liner / genre / controlling_idea 三项 high

---

## ② 世界观锻造（触发词：设计世界、设定规则、力量体系、地图）

```
第1层: 你的世界有什么是现实世界不可能存在的？（核心规则）
第2层: 这个规则为什么存在？谁制定？谁受益？谁受害？
第3层: 如果有人想打破这个规则，会怎样？（冲突来源）
第4层: 这个规则对主角是助力还是阻碍？会翻转吗？
第5层: 读者知道规则后，最想看到什么场景？（爽点预埋）
```

**SB 字段**：`world.{core_rules, power_system, geography, factions, economy, history_events, info_delivery_plan}`
**完成标志**：core_rules ≥ 3 条、power_system 完整

---

## ③ 角色深潜（触发词：添加角色、主角设定、反派、配角、人设）

```
第1层（表面）: 这个角色最想让什么发生？
第2层（动机）: 为什么？这个欲望的根源是什么经历？
第3层（矛盾）: 他想要什么 vs 他真正需要什么？一样吗？
                → McKee: conscious desire vs unconscious desire
第4层（极限）: 如果保护这个欲望需要背叛最重要的人，他怎么选？
                → McKee: 真实性格只在压力下的选择中暴露
第5层（代价）: 他的致命弱点是什么？反派会怎么利用？
```

**SB 字段**：`characters[i].{surface, depth, arc, relationships}`
**完成标志**：主角的 conscious_desire / unconscious_need / fatal_flaw 三项 high

---

## ④ 故事脊梁（触发词：故事结构、大纲、主线、剧情走向）

```
第1层: 核心矛盾是什么？用一句话说清「谁，要干嘛，什么阻碍他」
第2层: 这个矛盾能撑住 100 万字吗？怎么裂变？
第3层: 有大翻转吗？让主角从「被动应对」变成「主动出击」了吗？
第4层: 主角的最低点在哪？他失去了什么？这个失去是他自己的选择造成的吗？
第5层: 读者追到第 30 万字，你拿什么让他们继续追？
```

**6 种参考结构**（按用户回答动态推荐）：
- 核心裂变法（玄幻/都市/长篇爽文）
- 三幕升级版（通用长篇）
- Fichtean 曲线（悬疑/惊悚）
- 爽文循环（升级流/系统流）
- Arc 结构（连载网文/韩式）
- Save the Cat 15-Beat（剧情流）

**SB 字段**：`main_plot.{controlling_idea, structure_type, structure_detail, checkpoints, outline}`
**完成标志**：structure_type 确定、5 个 checkpoints 全有

---

## ⑤ 黄金三章（触发词：开篇、前三章、第一章、钩子）

```
第1层: 第一章第一段，读者看到什么？有什么冲突/反常/悬念让他们继续？
第2层: 主角在前三章完成了什么转变？从「谁」变成了「谁」？
第3层: 金手指在第几章揭示？揭示方式是「获得」还是「被发现」？
第4层: 第三章结尾的「上架钩」是什么？读者为什么必须看第四章？
第5层: 如果只能用 300 字写开篇，你会从哪个画面开始？
```

**SB 字段**：`golden_three.{chapter_1, chapter_2, chapter_3, hooks_selected, screen_rhythm}`
**完成标志**：3 章的 hook / conflict / escalation 全有

---

## ⑥ 章节推演（触发词：规划章节、第X章、章纲）

```
第1层: 这一章的目标是什么？推进什么？揭示什么？
第2层: 主角在这一章遇到了什么阻碍？这个阻碍怎么和他的核心矛盾相关？
第3层: 这一章的爽点在哪？如果没有，怎么加？
第4层: 章末的钩子是什么？读者为什么翻下一章？
第5层: 连续 5 章看下来，情绪有没有起伏？是不是全是紧张或全是平淡？
```

**SB 字段**：`chapter_plan[i].{chapter, title, goal, conflict, cool_point, end_hook, emotion, word_count, status}`
**完成标志**：每章 4 项字段（goal / conflict / cool_point / end_hook）齐全

---

## ⑦ 伏笔雷达（触发词：埋伏笔、伏笔、回收、彩蛋）

```
第1层: 你想埋什么伏笔？读者什么时候该发现它？
第2层: 回收情绪是什么？惊讶？感动？恍然大悟？
第3层: 如果迟迟没回收，读者会困惑吗？需要备选方案吗？
第4层: 这个伏笔和其他伏笔有没有关联？能不能合并回收？
第5层: 如果最终不回收（有意为之），怎么让读者觉得「原来如此」而不是「你忘了」？
```

**SB 字段**：`foreshadowing[i].{id, description, planted_at, expected_payoff_at, payoff_emotion, status, backup_plan, related_threads}`
**完成标志**：至少 1 条伏笔有 plant + payoff 计划

---

## ⑧ 收线结算（触发词：收尾、完结、结局、结算）

```
第1层: 还有哪些未结的线索？哪些是必须回收的？
第2层: 主角最终的代价是什么？零代价的胜利是最无聊的
第3层: 反派的结局和他的动机一致吗？还是为了「爽」强行写死？
第4层: 主题有没有呼应开篇？首尾之间形成了什么对照？
第5层: 如果读者翻回第一章重新看，会发现什么之前没注意到的？
```

**SB 字段**：`resolution.{unresolved_threads, main_ending, character_endings, final_battle, completion_checklist}`
**完成标志**：unresolved_threads.priority = 'must' 的全部有 proposed_resolution