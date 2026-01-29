// Centralized UI Components Export
// 이 파일에서 모든 UI 컴포넌트를 한 곳에서 import 할 수 있습니다.
// 사용법: import { Button, Card, Input } from '@/components/ui';

export { Button, buttonVariants, type ButtonProps } from './Button';
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
} from './Card';
export { Input, inputVariants, type InputProps } from './Input';
export { Badge, badgeVariants, type BadgeProps } from './Badge';
export { Alert, alertVariants, type AlertProps } from './Alert';
export {
  Heading,
  headingVariants,
  Text,
  textVariants,
  type HeadingProps,
  type TextProps,
} from './Typography';
