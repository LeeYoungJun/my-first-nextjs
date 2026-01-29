// Custom ESLint rules to enforce component usage
// 이 파일은 참고용입니다. eslint-plugin-react를 통해 적용됩니다.

module.exports = {
  rules: {
    // 네이티브 HTML 요소 사용 금지 (Button, Input 등 컴포넌트 사용 강제)
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          {
            element: 'button',
            message: 'Use <Button> from @/components/ui instead of <button>',
          },
          {
            element: 'input',
            message: 'Use <Input> from @/components/ui instead of <input>',
          },
        ],
      },
    ],
  },
};
