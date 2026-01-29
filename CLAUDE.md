# Project Rules for Claude Code

## Component Usage Rules

이 프로젝트에서는 **반드시** `@/components/ui`의 컴포넌트를 사용해야 합니다.

### Required Components

| 대신 사용 금지 | 반드시 사용 |
|---------------|------------|
| `<button>` | `<Button>` from `@/components/ui` |
| `<input>` | `<Input>` from `@/components/ui` |
| `<h1>` ~ `<h6>` | `<Heading>` from `@/components/ui` |
| `<p>`, `<span>` (텍스트용) | `<Text>` from `@/components/ui` |
| 커스텀 카드 div | `<Card>` from `@/components/ui` |
| 커스텀 뱃지/태그 | `<Badge>` from `@/components/ui` |
| 커스텀 알림 div | `<Alert>` from `@/components/ui` |
| 이미지+텍스트 카드 | `<ImageCard>` from `@/components/ui` |

### Import Pattern

```tsx
import { Button, Card, Input, Badge, Alert, Heading, Text, ImageCard } from '@/components/ui';
```

### Available Components

1. **Button** - 모든 버튼 UI
   - variants: `primary`, `secondary`, `success`, `warning`, `danger`, `ghost`
   - sizes: `sm`, `md`, `lg`

2. **Card** (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
   - variants: `default`, `elevated`, `outline`

3. **Input** - 모든 텍스트 입력
   - props: `label`, `error`, `helperText`, `inputSize`

4. **Badge** - 상태 표시, 태그
   - variants: `default`, `secondary`, `success`, `warning`, `danger`, `purple`, `outline`

5. **Alert** - 알림 메시지
   - variants: `default`, `info`, `success`, `warning`, `danger`

6. **Heading** - 모든 제목
   - levels: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

7. **Text** - 모든 본문 텍스트
   - sizes: `xs`, `sm`, `base`, `lg`, `xl`
   - colors: `default`, `muted`, `primary`, `success`, `warning`, `danger`

8. **ImageCard** - 이미지와 텍스트가 결합된 카드
   - variants: `default`, `elevated`, `outline`, `ghost`
   - imagePosition: `top`, `left`, `right`, `background`
   - aspectRatio: `video`, `square`, `portrait`, `wide`, `auto`
   - props: `src`, `alt`, `title`, `description`, `badge`, `footer`, `overlay`

### Color Variables

CSS 변수를 사용하여 일관된 스타일 유지:

```css
var(--color-primary)        /* #007AC2 - Esri Blue */
var(--color-primary-hover)  /* #005A8F */
var(--color-secondary-green)
var(--color-secondary-orange)
var(--color-secondary-purple)
var(--color-dark-gray)
var(--color-medium-gray)
var(--color-light-gray)
```

### Example Usage

```tsx
// Good
<Button variant="primary" size="md">Submit</Button>
<Heading level="h1">Page Title</Heading>
<Text color="muted">Description text</Text>
<Input label="Email" placeholder="Enter email..." />

// Bad - 이렇게 하지 마세요
<button className="...">Submit</button>
<h1>Page Title</h1>
<p>Description text</p>
<input type="text" />
```

## File Structure

```
src/
├── components/ui/     # 공용 UI 컴포넌트 (수정 시 주의)
├── lib/utils.ts       # 유틸리티 함수
├── styles/theme.ts    # 테마 토큰
└── app/               # 페이지 및 라우팅
```

## Do NOT

- 새로운 버튼, 입력, 카드 컴포넌트를 직접 만들지 마세요
- 인라인 스타일로 테마 색상을 하드코딩하지 마세요
- `@/components/ui` 컴포넌트의 기본 스타일을 override하지 마세요
