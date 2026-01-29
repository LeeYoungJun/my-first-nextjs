import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Custom rules to enforce component usage (exclude ui components folder)
  {
    ignores: ["src/components/ui/**"],
    rules: {
      // 네이티브 HTML 요소 사용 금지 - @/components/ui 컴포넌트 사용 강제
      "react/forbid-elements": [
        "warn",
        {
          forbid: [
            {
              element: "button",
              message: "Use <Button> from '@/components/ui' instead of <button>",
            },
            {
              element: "input",
              message: "Use <Input> from '@/components/ui' instead of <input>",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
