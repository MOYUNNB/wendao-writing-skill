# 问道写作 · WenDao Writing

> **不是帮你写，而是帮你想。**
> 基于苏格拉底接生法的网文创作引导工具。

[![License: BSL 1.1](https://img.shields.io/badge/License-BSL_1.1-orange.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](CHANGELOG.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Platform: 虾评 / Coze](https://img.shields.io/badge/平台-虾评%20%2F%20Coze-purple.svg)](#快速开始)

---

## 😩 你是不是这样？

- 脑子里的故事很精彩，**写下来就变味**？
- 想写网文赚钱，**却卡在大纲**卡了一周？
- 用 AI 代写工具生成正文，**结果跟自己的文风不搭**？
- 写完一章不知道**下一章该写什么**，越写越迷茫？
- 角色越写越**单薄像纸片人**，自己都读不下去？

**你不是文笔不行。你缺的不是 AI 代笔，是 AI 教练。**

---

## ✨ 问道写作是什么？

一个**只提问、不写正文**的网文创作引导工具。

把苏格拉底接生法引入网文创作——
像助产士帮助妇女生孩子一样，AI 通过**精准提问**帮作者"生产"自己的想法。

| | 代写工具（ChatGPT / Claude / 各种写手 AI） | 问道写作 |
|--|----------|---------|
| **做什么** | 帮你写正文 | 帮你想清楚 |
| **产出** | 一堆需要修改的文本 | 大纲、人设、设定 |
| **文风污染** | 严重（带 AI 味） | 无（你自己写） |
| **技能提升** | 越用越依赖 | 越用越会写 |
| **核心价值** | 短期产出 | 长期能力 |

---

## 🎯 8 大创作模块

```
  ① 选题锚定 → ② 世界观锻造 → ③ 角色深潜 → ④ 故事脊梁
       ↓              ↓              ↓              ↓
  ⑤ 黄金三章 → ⑥ 章节推演 → ⑦ 伏笔雷达 → ⑧ 收线结算
```

| # | 模块 | 解决什么问题 | 触发词 |
|---|------|-------------|--------|
| ① | **选题锚定** | 把模糊脑洞变成可验证的选题 | "我要开新书" |
| ② | **世界观锻造** | 构建自洽、服务爽点的世界 | "设计世界" |
| ③ | **角色深潜** | 创造有欲望、有缺陷的角色 | "添加角色" |
| ④ | **故事脊梁** | 找到故事自己的节奏骨架 | "梳理大纲" |
| ⑤ | **黄金三章** | 用 3 章锁住读者不弃书 | "设计开篇" |
| ⑥ | **章节推演** | 为每章定义目标、冲突、钩子 | "规划章节" |
| ⑦ | **伏笔雷达** | 管理伏笔的埋设与回收 | "埋伏笔" |
| ⑧ | **收线结算** | 确保所有线索回收、角色弧光完成 | "写完了" |

**模块可独立进入**——不需要走完全流程，从任何模块开始都行。

---

## 🚀 快速开始

### 选项 1：直接用 Skill 版（推荐新手）

1. 访问 [虾评 Skill 市场](#) 或 [Coze 商店](#)
2. 搜索「**问道写作**」
3. 一键启用，立即对话

**零安装、零配置，搜索即用**。

### 选项 2：本地运行（开发者）

```bash
# 1. 克隆仓库
git clone https://github.com/[你的用户名]/wendao-writing-skill.git
cd wendao-writing-skill

# 2. 拼接生成 SKILL.md
node skills/assemble.mjs

# 3. 加载到 Claude Code 或 Claude.ai
#    把 skills/SKILL.md 内容作为系统提示粘贴
```

**输出**：

```
📦 问道写作 SKILL.md 拼接工具
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✓ 01-core-principles.md            953 tokens
  ✓ 02-modules-overview.md           734 tokens
  ✓ 03-modules-detail.md            1373 tokens
  ✓ 04-methodology-brief.md         1116 tokens
  ✓ 05-output-and-upgrade.md         661 tokens
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📊 总计                           4838 tokens
✅ 已生成: skills/SKILL.md
```

### 选项 3：MCP 版（高级用户，Phase 2）

> 即将推出。提供持久化创作记忆、跨会话同步、多本书管理。

---

## 🧠 工作原理：苏格拉底循环

每次对话都走这 5 阶段：

```
┌─────────────────────────────────────────┐
│  LISTEN  →  接收作者回答                 │
│     ↓                                    │
│  ASSESS  →  评估具体性/一致性/深度       │
│     ↓                                    │
│  DECIDE  →  选择 6 种分支动作之一        │
│     ↓                                    │
│  RESPOND →  生成回应（最多 3 个问题）    │
│     ↓                                    │
│  UPDATE  →  内部更新会话 Story Bible     │
└─────────────────────────────────────────┘
```

### 6 种分支动作

| 动作 | 何时触发 | 做什么 |
|------|---------|--------|
| **DEEPEN** | 回答具体但不够深 | 下一层追问 |
| **CONFIRM** | 回答够具体 | 复述确认后存储 |
| **CHALLENGE** | 回答与已有矛盾 | 指出矛盾，让作者选择 |
| **UNBLOCK** | 作者卡住/含糊 | 给 2-3 个选择题 |
| **PIVOT** | 当前维度挖透 | 切换问题方向 |
| **GRADUATE** | 必填字段全完成 | 总结，进入下一模块 |

### 5 层深挖（每模块通用）

```
第1层 表面 → 这个[角色/设定]最想让什么发生？
第2层 动机 → 为什么？这个欲望的根源是什么经历？
第3层 矛盾 → 想要的 vs 真正需要的——一样吗？
第4层 极限 → 保护这个欲望需要背叛最重要的人，他怎么选？
第5层 代价 → 致命弱点是什么？反派会怎么利用？
```

不是每次都必须走完 5 层。AI 根据回答的具体性动态决定深度。

---

## 📂 项目结构

```
问道写作/
├── README.md                          # 本文档
├── LICENSE                            # BSL 1.1 许可证
├── CHANGELOG.md                       # 版本历史
├── CONTRIBUTING.md                    # 贡献指南
├── docs/
│   ├── PRD-v4-summary.md              # PRD 关键章节摘要
│   └── platform-submission.md         # 上架流程
├── skills/
│   ├── SKILL.md                       # ⭐ 主技能文件（上传到平台）
│   ├── metadata.json                  # Skill 元数据
│   ├── assemble.mjs                   # 拼接脚本
│   ├── prompts/                       # 5 个模块化 Prompt 源文件
│   │   ├── 01-core-principles.md
│   │   ├── 02-modules-overview.md
│   │   ├── 03-modules-detail.md
│   │   ├── 04-methodology-brief.md
│   │   └── 05-output-and-upgrade.md
│   └── references/                    # 10 个深度方法论文档（按需读取）
│       ├── 01-concept-anchor.md
│       ├── 02-world-forge.md
│       ├── 03-character-dive.md
│       ├── 04-main-plot.md
│       ├── 05-golden-three.md
│       ├── 06-chapter-plan.md
│       ├── 07-foreshadow.md
│       ├── 08-resolution.md
│       ├── story-bible-schema.md
│       └── export-template.md
└── tests/
    ├── manual-walkthrough.md          # 8 模块验证脚本
    └── verification-checklist.md      # 验收清单
```

---

## 🛣️ 路线图

### ✅ Phase 1：Skill 版（当前，2026 Q2）
- [x] 5 个模块化 Prompt 源文件
- [x] 10 个深度方法论文档
- [x] 自动拼接脚本（assemble.mjs）
- [x] 8 模块手动验证脚本
- [x] 虾评 / Coze 上架指南

### 🚧 Phase 2：MCP 版（2026 Q3）
- [ ] Trae / Claude Code MCP 实现
- [ ] 持久化创作记忆（Story Bible 跨会话同步）
- [ ] 多本书管理
- [ ] 知识库 CDN 自动更新
- [ ] 知识图谱可视化

---

## 💡 设计哲学

### 4 条不可违反的核心原则

1. **永远不生成正文** — 不写段落、对话、场景描写
2. **永远只提问** — 提问、追问、反问、确认
3. **每次回复最多 3 个问题** — 避免信息过载
4. **不居高临下** — 像教练而非裁判

### 为什么只提问不写？

> "代写工具让你**写得更轻松**，问道写作让你**写得更会**。"
>
> —— 一个用过 ChatGPT 写了 30 万字然后全部废稿重写的网文作者

写网文是**手艺活**。AI 代写就像外卖——方便但永远不是你自己的手艺。
问道写作是**私教**——不替你跑，但让你跑得越来越快。

---

## 🤝 贡献

我们欢迎所有形式的贡献：

- 🐛 **报告 Bug**：[GitHub Issues](../../issues)
- 💡 **提建议**：[GitHub Discussions](../../discussions)
- 📝 **改进 Prompt**：编辑 `skills/prompts/*.md` 后跑 `assemble.mjs`
- 🌍 **翻译**：将内容翻译成其他语言
- ⭐ **Star** 这个项目，让更多人看到

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 📜 许可证

本项目采用 **Business Source License 1.1 (BSL)**。

| 维度 | 说明 |
|------|------|
| **免费使用** | ✅ 个人使用、学习、研究、非生产用途 |
| **免费商用** | ⚠️ 需满足 [Additional Use Grant](LICENSE) 条件 |
| **付费商用** | 大规模商用请联系获得商业许可 |
| **开源时间** | 2030-06-23 后自动转为 Apache 2.0 |
| **完整条款** | 见 [LICENSE](LICENSE) 文件 |

**为什么用 BSL 而不是 MIT？**
- MIT 太宽松——别人可以分叉出"问道写作 Pro"直接商用
- BSL 给我们 **4 年变现窗口**，同时 **4 年后开源积累社区**
- 类似 MariaDB / Sentry / HashiCorp 的成熟做法

---

## 🙏 致谢

- **Robert McKee** — 《Story》提供的角色/结构方法论
- **Donald Maass** — 《Writing the Breakout Novel》提供的人物深度技法
- **虾评 / Coze** — Skill 平台基础设施
- 所有早期测试用户 — 你们的反馈让这个项目更好

---

## 📮 联系方式

- **问题反馈**：[GitHub Issues](../../issues)
- **功能建议**：[GitHub Discussions](../../discussions)
- **商业合作**：1392612377@qq.com
- **作者博客**：（待补充）

---

## ⭐ Star History

如果这个项目对你有帮助，请给我们一个 Star！

[![Star History Chart](https://api.star-history.com/svg?repos=[用户名]/wendao-writing-skill&type=Date)](https://star-history.com/#[用户名]/wendao-writing-skill)

---

<p align="center">
  <strong>问道写作 · 帮作者想，不帮作者写</strong>
  <br>
  <sub>Built with ❤️ for Chinese web novelists</sub>
</p>