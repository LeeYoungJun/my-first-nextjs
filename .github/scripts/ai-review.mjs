import { readFileSync, writeFileSync } from 'fs';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const CHANGED_FILES = process.env.CHANGED_FILES || '';
const PR_TITLE = process.env.PR_TITLE || '';
const PR_BODY = process.env.PR_BODY || '';

async function callClaudeAPI(prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API request failed: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is not set');
    process.exit(1);
  }

  // Read the diff from file
  let diff = '';
  try {
    diff = readFileSync('/tmp/pr_diff.txt', 'utf-8');
  } catch (e) {
    console.error('Could not read diff file:', e.message);
    process.exit(1);
  }

  if (!diff.trim()) {
    console.log('No diff to review');
    writeFileSync('/tmp/review_comment.md', '## 🤖 AI Code Review\n\nNo changes to review.');
    process.exit(0);
  }

  const changedFilesList = CHANGED_FILES.split(' ').filter(Boolean);

  const prompt = `You are an expert code reviewer. Review the following pull request changes and provide constructive feedback.

## PR Information
- **Title**: ${PR_TITLE}
- **Description**: ${PR_BODY || 'No description provided'}
- **Changed Files**: ${changedFilesList.join(', ')}

## Code Diff
\`\`\`diff
${diff}
\`\`\`

## Review Guidelines
Please provide a code review focusing on:
1. **Code Quality**: Clean code, readability, and maintainability
2. **Potential Bugs**: Logic errors, edge cases, null/undefined handling
3. **Performance**: Inefficient operations, unnecessary re-renders (React)
4. **Security**: Potential vulnerabilities, unsafe operations
5. **Best Practices**: TypeScript usage, React patterns, modern JavaScript

## Response Format
Respond in Korean with the following structure:

### 요약
Brief overall assessment (1-2 sentences)

### 좋은 점 ✅
- List positive aspects of the code (if any)

### 개선 제안 💡
- Specific suggestions for improvement with file names and line references when possible
- Use code snippets to show recommended changes

### 주의 사항 ⚠️
- Any critical issues that should be addressed before merging (if any)

### 총평
Overall recommendation (Approve / Request Changes / Comment)

Keep the review concise, constructive, and actionable. If the changes look good, say so!`;

  try {
    console.log('Calling Claude API for code review...');
    const review = await callClaudeAPI(prompt);

    const comment = `## 🤖 AI Code Review

> Powered by Claude AI | Reviewing ${changedFilesList.length} file(s)

${review}

---
<sub>이 리뷰는 AI에 의해 자동 생성되었습니다. 참고용으로만 사용하세요.</sub>`;

    writeFileSync('/tmp/review_comment.md', comment);
    console.log('Review completed successfully!');
  } catch (error) {
    console.error('Error during review:', error.message);

    // Write error message as comment
    const errorComment = `## 🤖 AI Code Review

⚠️ **리뷰 생성 중 오류가 발생했습니다.**

\`\`\`
${error.message}
\`\`\`

---
<sub>잠시 후 다시 시도하거나, API 키 설정을 확인해 주세요.</sub>`;

    writeFileSync('/tmp/review_comment.md', errorComment);
    process.exit(1);
  }
}

main();
