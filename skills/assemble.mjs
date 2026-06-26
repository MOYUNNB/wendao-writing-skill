#!/usr/bin/env node
/**
 * 问道写作 SKILL.md 拼接脚本
 *
 * 用法：node skills/assemble.mjs
 *
 * 拼接 skills/prompts/ 下的 5 个源文件，生成 skills/SKILL.md
 * 包含 token 估算 + 超限警告
 *
 * 零外部依赖，纯 Node 标准库
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROMPTS_DIR = join(__dirname, 'prompts');
const OUTPUT_FILE = join(__dirname, 'SKILL.md');

// 拼接顺序（固定）
const ORDER = [
  '01-core-principles.md',
  '02-modules-overview.md',
  '03-modules-detail.md',
  '04-methodology-brief.md',
  '05-output-and-upgrade.md',
];

// Token 估算：中文字符按 1.5 字符/token，英文按 4 字符/token
function estimateTokens(text) {
  let chineseChars = 0;
  let otherChars = 0;

  for (const char of text) {
    // 中文字符范围（含中文标点）
    if (/[一-鿿　-〿＀-￯]/.test(char)) {
      chineseChars++;
    } else {
      otherChars++;
    }
  }

  return Math.ceil(chineseChars / 1.5 + otherChars / 4);
}

// Skill 元数据（同步 metadata.json 的关键字段）
const SKILL_META = {
  name: '问道写作',
  version: '1.2.0',
  description:
    '基于苏格拉底接生法的网文/短篇创作引导工具。长篇路径拆分为 Phase A（写作前准备，必走）+ Phase B（写作手艺，可选）；短篇路径 5 模块一线贯之。帮作者想，不帮作者写——永远不生成正文。',
  category: '创作助手',
  tags: ['网文', '小说', '创作', '苏格拉底', '大纲', '人设', '世界观', '伏笔', '短篇', '知乎体', '微小说', '情绪驱动', '两阶段'],
};

// 主函数
function assemble() {
  console.log('📦 问道写作 SKILL.md 拼接工具');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // 读取并拼接
  const sections = [];
  let totalText = '';
  const fileTokenStats = [];

  for (const filename of ORDER) {
    const filepath = join(PROMPTS_DIR, filename);

    if (!existsSync(filepath)) {
      console.error(`❌ 文件不存在: ${filename}`);
      console.error(`   请检查 skills/prompts/${filename}`);
      process.exit(1);
    }

    const content = readFileSync(filepath, 'utf-8');
    const tokens = estimateTokens(content);

    sections.push({ filename, content, tokens });
    totalText += content + '\n\n';

    fileTokenStats.push({ filename, tokens });
    console.log(`  ✓ ${filename.padEnd(30)} ${tokens.toString().padStart(5)} tokens`);
  }

  const totalTokens = estimateTokens(totalText);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  📊 总计                          ${totalTokens.toString().padStart(5)} tokens`);

  // 警告检查
  const TARGET_MIN = 3500;
  const TARGET_MAX = 4500;
  const ABSOLUTE_MAX = 6000;

  if (totalTokens > ABSOLUTE_MAX) {
    console.error(`\n❌ 超过绝对上限 ${ABSOLUTE_MAX} tokens！必须精简！`);
    console.error('   建议：');
    console.error('   1. 压缩 04-methodology-brief.md（最易压缩）');
    console.error('   2. 减少 03-modules-detail.md 中的示例');
    console.error('   3. 简化 02-modules-overview.md 的描述');
    process.exit(1);
  } else if (totalTokens > TARGET_MAX) {
    console.warn(`\n⚠️  超过推荐上限 ${TARGET_MAX} tokens`);
    console.warn(`   建议精简到 ${TARGET_MIN}-${TARGET_MAX} tokens 范围`);
  } else if (totalTokens < TARGET_MIN) {
    console.log(`\n✅ Token 数在推荐范围内 (${TARGET_MIN}-${TARGET_MAX})`);
  } else {
    console.log(`\n✅ Token 数完美 (${TARGET_MIN}-${TARGET_MAX})`);
  }

  // 生成 SKILL.md
  const frontmatter = [
    '---',
    `name: ${SKILL_META.name}`,
    `version: ${SKILL_META.version}`,
    `description: ${SKILL_META.description}`,
    `category: ${SKILL_META.category}`,
    `tags: [${SKILL_META.tags.join(', ')}]`,
    '---',
    '',
  ].join('\n');

  const header = `${frontmatter}# 问道写作 Skill

> **基于**：问道写作 v${SKILL_META.version}
> **生成时间**：${new Date().toISOString().replace('T', ' ').substring(0, 19)}
> **总 Token 数**：约 ${totalTokens}
>
> 本文件由 skills/assemble.mjs 自动生成，请勿手动修改。
> 修改请编辑源文件：skills/prompts/*.md

---

`;

  const output = header + sections.map(s => s.content).join('\n\n---\n\n');

  writeFileSync(OUTPUT_FILE, output, 'utf-8');
  console.log(`\n✅ 已生成: ${OUTPUT_FILE}`);
  console.log(`   文件大小: ${(output.length / 1024).toFixed(2)} KB`);
}

// 执行
try {
  assemble();
} catch (err) {
  console.error(`\n❌ 拼接失败: ${err.message}`);
  process.exit(1);
}