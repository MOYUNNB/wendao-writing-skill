# 贡献指南 · Contributing

> 感谢你考虑为问道写作做出贡献！🎉

我们欢迎任何形式的贡献：Bug 报告、功能建议、代码改进、文档完善、翻译、推广。

---

## 📜 行为准则

- **友善包容**：尊重不同观点，聚焦问题本身
- **建设性**：批评要给出具体改进建议
- **作者优先**：永远把作者（用户）体验放在第一位

---

## 🐛 报告 Bug

发现 Bug？请通过 [GitHub Issues](../../issues) 提交，并提供：

### 必需信息

```markdown
**Bug 描述**：
[一句话说明发生了什么问题]

**复现步骤**：
1. 加载 skills/SKILL.md 到 Claude Code
2. 输入「[触发词]」
3. 观察到的行为：「[实际回答]」
4. 期望的行为：「[应该怎么回答]」

**环境信息**：
- 平台：Claude Code / Claude.ai / 虾评 / Coze / 其他
- 模型：Claude Sonnet 4.6 / GPT-4 / 其他
- SKILL.md 版本：v1.0.0（从 metadata.json 查）

**严重程度**：
- 🔴 阻断（违反核心原则 / 无法使用）
- 🟡 重要（影响体验 / 与设计意图不符）
- 🟢 优化（细节问题 / 锦上添花）
```

---

## 💡 功能建议

新功能建议也通过 Issues 提交，使用 `enhancement` 标签。

请说明：
- **痛点**：当前缺什么
- **解决方案**：你希望怎么实现
- **替代方案**：考虑过的其他方案
- **优先级**：你愿意投入多少时间推动

---

## 📝 改进 Prompt

Prompt 是这个项目的核心。我们非常欢迎 Prompt 优化贡献！

### 工作流程

```bash
# 1. Fork 仓库
# 2. 克隆你的 fork
git clone https://github.com/[你的用户名]/wendao-writing-skill.git

# 3. 创建分支
git checkout -b improve/module-X-question

# 4. 编辑源文件
#    - skills/prompts/01-core-principles.md 等
#    - skills/references/0X-*.md 等

# 5. 重新拼接
node skills/assemble.mjs

# 6. 手动验证
#    按 tests/manual-walkthrough.md 走一遍

# 7. 提交
git add .
git commit -m "feat(prompts): improve 角色深潜 第3层追问"

# 8. Push 并创建 PR
git push origin improve/module-X-question
```

### Prompt 优化原则

1. **护栏优先**：永远不要破坏"不生成正文"的核心原则
2. **3 问题上限**：每次回复不超过 3 个问题
3. **不居高临下**：语气像教练而非裁判
4. **Token 预算**：主 SKILL.md 目标 3500-4500 tokens
5. **向后兼容**：修改不要破坏现有用户的体验

---

## 🌍 翻译

欢迎将文档翻译成其他语言！

### 当前翻译状态

- [x] 简体中文（本仓库）
- [ ] 繁体中文（待认领）
- [ ] English（待认领）
- [ ] 日本語（待认领）

### 翻译指南

1. 保持技术术语一致（参考各语言的网文术语表）
2. 苏格拉底循环等专业概念可保留英文并加注释
3. 翻译后请更新 README 的语言徽章

---

## 🧪 测试

### 手动验证

```bash
# 1. 加载 SKILL.md 到 Claude Code
# 2. 按 tests/manual-walkthrough.md 走通 8 模块
# 3. 按 tests/verification-checklist.md 检查
```

### 提交验证结果

如果你是新贡献者，建议先跑一遍手动验证脚本，把发现的问题作为你的第一个 PR。

---

## 📐 代码规范

虽然本项目主要是 Markdown，但仍有一些规范：

### Markdown

- 文件编码：UTF-8
- 换行符：LF（Unix）
- 中文与英文之间加空格
- 标题层级不超过 4 级
- 代码块标注语言

### 文件命名

- `kebab-case.md`（如 `manual-walkthrough.md`）
- 编号前缀保持两位数（`01-`, `02-`, ...）

### 提交信息

遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

```
feat(prompts): 增加角色深潜第3层示例
fix(export): 修复空字段显示问题
docs(readme): 更新快速开始步骤
style(format): 统一 markdown 格式
refactor(scripts): 重构 assemble.mjs
test(verification): 新增模块⑤验收用例
chore(deps): 更新 Node 版本要求
```

---

## 🔄 发布流程

维护者发布流程：

1. 修改源文件
2. 运行 `node skills/assemble.mjs` 验证
3. 更新 `CHANGELOG.md`
4. 更新 `metadata.json` 的 version
5. 创建 GitHub Release
6. 在虾评 / Coze 更新 Skill 版本

---

## 💬 社区

- **GitHub Issues** — Bug 报告、功能建议
- **GitHub Discussions** — 想法交流、使用心得
- **小红书**：（待补充）

---

## ❓ 我有问题

有问题？在 [Discussions](../../discussions) 开帖，我们很乐意帮忙。

---

<p align="center">
  再次感谢你的贡献！<br>
  <sub>每一份贡献都让问道写作变得更好 ❤️</sub>
</p>