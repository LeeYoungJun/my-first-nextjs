'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Badge,
  Alert,
  Heading,
  Text,
  ImageCard,
} from '@/components/ui';

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[var(--background-secondary)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading level="h1" className="mb-4">
            Esri Design System
          </Heading>
          <Text size="lg" color="muted">
            esri_theme.json 기반 재사용 가능한 컴포넌트 라이브러리
          </Text>
        </div>

        {/* Typography Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Typography
          </Heading>
          <Card>
            <CardContent>
              <div className="space-y-4">
                <Heading level="h1">Heading 1 (48px)</Heading>
                <Heading level="h2">Heading 2 (36px)</Heading>
                <Heading level="h3">Heading 3 (28px)</Heading>
                <Heading level="h4">Heading 4 (24px)</Heading>
                <Heading level="h5">Heading 5 (20px)</Heading>
                <Heading level="h6">Heading 6 (18px)</Heading>
                <hr className="my-4 border-[var(--color-light-gray)]" />
                <Text size="xl">Text Extra Large</Text>
                <Text size="lg">Text Large</Text>
                <Text size="base">Text Base (Default)</Text>
                <Text size="sm">Text Small</Text>
                <Text size="xs">Text Extra Small</Text>
                <hr className="my-4 border-[var(--color-light-gray)]" />
                <div className="flex flex-wrap gap-4">
                  <Text color="default">Default Color</Text>
                  <Text color="muted">Muted Color</Text>
                  <Text color="primary">Primary Color</Text>
                  <Text color="success">Success Color</Text>
                  <Text color="warning">Warning Color</Text>
                  <Text color="danger">Danger Color</Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Buttons
          </Heading>
          <Card>
            <CardContent>
              <div className="space-y-6">
                {/* Variants */}
                <div>
                  <Text weight="semibold" className="mb-3">Variants</Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <Text weight="semibold" className="mb-3">Sizes</Text>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                {/* States */}
                <div>
                  <Text weight="semibold" className="mb-3">States</Text>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button isLoading={isLoading} onClick={handleLoadingClick}>
                      {isLoading ? 'Loading...' : 'Click for Loading'}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Cards
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>기본 카드 스타일</CardDescription>
              </CardHeader>
              <CardContent>
                <Text>카드 내용이 여기에 들어갑니다. 테두리와 그림자가 함께 적용됩니다.</Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>강조된 그림자 스타일</CardDescription>
              </CardHeader>
              <CardContent>
                <Text>더 큰 그림자로 요소를 강조할 때 사용합니다.</Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="outline">
              <CardHeader>
                <CardTitle>Outline Card</CardTitle>
                <CardDescription>테두리만 있는 스타일</CardDescription>
              </CardHeader>
              <CardContent>
                <Text>그림자 없이 깔끔한 테두리 스타일입니다.</Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="ghost">Details</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Inputs
          </Heading>
          <Card>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Default Input"
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="With Helper Text"
                  placeholder="Enter email..."
                  helperText="We'll never share your email."
                />
                <Input
                  label="Error State"
                  placeholder="Enter password..."
                  error="Password must be at least 8 characters."
                  defaultValue="short"
                />
                <Input
                  label="Disabled Input"
                  placeholder="Cannot edit..."
                  disabled
                  defaultValue="Disabled value"
                />
                <Input
                  label="Small Input"
                  inputSize="sm"
                  placeholder="Small size..."
                />
                <Input
                  label="Large Input"
                  inputSize="lg"
                  placeholder="Large size..."
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Badges
          </Heading>
          <Card>
            <CardContent>
              <div className="space-y-6">
                {/* Variants */}
                <div>
                  <Text weight="semibold" className="mb-3">Variants</Text>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="purple">Purple</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <Text weight="semibold" className="mb-3">Sizes</Text>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge size="sm">Small</Badge>
                    <Badge size="md">Medium</Badge>
                    <Badge size="lg">Large</Badge>
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <Text weight="semibold" className="mb-3">Use Cases</Text>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="success">Active</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="danger">Expired</Badge>
                    <Badge variant="default">New</Badge>
                    <Badge variant="purple">Beta</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alerts Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Alerts
          </Heading>
          <div className="space-y-4">
            <Alert variant="default" title="Default Alert">
              기본 알림 메시지입니다. 일반적인 정보를 전달할 때 사용합니다.
            </Alert>
            <Alert variant="info" title="Information">
              시스템 업데이트가 예정되어 있습니다. 자세한 내용은 공지사항을 확인하세요.
            </Alert>
            <Alert variant="success" title="Success!">
              작업이 성공적으로 완료되었습니다.
            </Alert>
            <Alert variant="warning" title="Warning">
              주의가 필요합니다. 진행하기 전에 내용을 다시 확인하세요.
            </Alert>
            <Alert variant="danger" title="Error">
              오류가 발생했습니다. 다시 시도해 주세요.
            </Alert>
          </div>
        </section>

        {/* Image Cards Section */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Image Cards
          </Heading>

          {/* Image Position: Top (Default) */}
          <div className="mb-8">
            <Text weight="semibold" className="mb-4">Image Position: Top (Default)</Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImageCard
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
                alt="City Building"
                title="시설물 관리"
                description="도시가스 시설물을 효율적으로 관리하고 모니터링합니다."
                badge="New"
                badgeVariant="success"
                footer={<Button size="sm">자세히 보기</Button>}
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                alt="Analytics"
                title="데이터 분석"
                description="실시간 데이터 분석으로 안전한 운영을 지원합니다."
                badge="Popular"
                badgeVariant="warning"
                variant="elevated"
                footer={<Button size="sm" variant="secondary">Learn More</Button>}
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
                alt="Team Work"
                title="협업 도구"
                description="팀 간 원활한 협업을 위한 통합 플랫폼을 제공합니다."
                variant="outline"
                footer={<Button size="sm" variant="ghost">Details</Button>}
              />
            </div>
          </div>

          {/* Image Position: Left/Right */}
          <div className="mb-8">
            <Text weight="semibold" className="mb-4">Image Position: Left / Right</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageCard
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
                alt="Server Room"
                imagePosition="left"
                title="클라우드 인프라"
                description="안정적인 클라우드 기반 서비스를 제공합니다."
                badge="Cloud"
                badgeVariant="default"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop"
                alt="Mobile App"
                imagePosition="right"
                title="모바일 지원"
                description="언제 어디서나 모바일로 접근 가능합니다."
                badge="Mobile"
                badgeVariant="purple"
              />
            </div>
          </div>

          {/* Image Position: Background */}
          <div className="mb-8">
            <Text weight="semibold" className="mb-4">Image Position: Background (Overlay)</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageCard
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop"
                alt="City Night"
                imagePosition="background"
                title="GeoLab 시스템"
                description="도시가스 안전관리의 새로운 기준"
                badge="Featured"
                badgeVariant="warning"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                alt="Digital World"
                imagePosition="background"
                title="GIS 기반 솔루션"
                description="공간 데이터 분석 및 시각화"
              />
            </div>
          </div>

          {/* Aspect Ratios */}
          <div>
            <Text weight="semibold" className="mb-4">Aspect Ratios</Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImageCard
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop"
                alt="Tech"
                aspectRatio="square"
                title="Square"
                contentPadding="sm"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
                alt="Tech"
                aspectRatio="video"
                title="Video (16:9)"
                contentPadding="sm"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop"
                alt="Tech"
                aspectRatio="portrait"
                title="Portrait (3:4)"
                contentPadding="sm"
              />
              <ImageCard
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop"
                alt="Tech"
                aspectRatio="wide"
                title="Wide (2:1)"
                contentPadding="sm"
              />
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Color Palette
          </Heading>
          <Card>
            <CardContent>
              <div className="space-y-6">
                {/* Primary Colors */}
                <div>
                  <Text weight="semibold" className="mb-3">Primary</Text>
                  <div className="flex flex-wrap gap-3">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-primary)] mb-2" />
                      <Text size="xs">Blue</Text>
                      <Text size="xs" color="muted">#007AC2</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-primary-dark)] mb-2" />
                      <Text size="xs">Dark Blue</Text>
                      <Text size="xs" color="muted">#0079C1</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-primary-light)] mb-2" />
                      <Text size="xs">Light Blue</Text>
                      <Text size="xs" color="muted">#00A9E0</Text>
                    </div>
                  </div>
                </div>

                {/* Secondary Colors */}
                <div>
                  <Text weight="semibold" className="mb-3">Secondary</Text>
                  <div className="flex flex-wrap gap-3">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-secondary-green)] mb-2" />
                      <Text size="xs">Green</Text>
                      <Text size="xs" color="muted">#6BBE4C</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-secondary-orange)] mb-2" />
                      <Text size="xs">Orange</Text>
                      <Text size="xs" color="muted">#F89927</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-secondary-purple)] mb-2" />
                      <Text size="xs">Purple</Text>
                      <Text size="xs" color="muted">#8B4C9E</Text>
                    </div>
                  </div>
                </div>

                {/* Neutral Colors */}
                <div>
                  <Text weight="semibold" className="mb-3">Neutral</Text>
                  <div className="flex flex-wrap gap-3">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-black)] mb-2" />
                      <Text size="xs">Black</Text>
                      <Text size="xs" color="muted">#000000</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-dark-gray)] mb-2" />
                      <Text size="xs">Dark Gray</Text>
                      <Text size="xs" color="muted">#323232</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-medium-gray)] mb-2" />
                      <Text size="xs">Medium Gray</Text>
                      <Text size="xs" color="muted">#6E6E6E</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-light-gray)] border mb-2" />
                      <Text size="xs">Light Gray</Text>
                      <Text size="xs" color="muted">#EFEFEF</Text>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[var(--color-white)] border mb-2" />
                      <Text size="xs">White</Text>
                      <Text size="xs" color="muted">#FFFFFF</Text>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Usage Guide */}
        <section>
          <Heading level="h2" className="mb-6 pb-2 border-b border-[var(--color-light-gray)]">
            Usage Guide
          </Heading>
          <Card>
            <CardContent>
              <div className="prose max-w-none">
                <Text weight="semibold" className="mb-2">Import Components</Text>
                <pre className="bg-[var(--color-dark-gray)] text-white p-4 rounded-lg overflow-x-auto text-sm">
{`import { Button, Card, Input, Badge, Alert, Heading, Text } from '@/components/ui';`}
                </pre>

                <Text weight="semibold" className="mt-6 mb-2">Example Usage</Text>
                <pre className="bg-[var(--color-dark-gray)] text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<Button variant="primary" size="md">
  Click Me
</Button>

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>

<Input
  label="Email"
  placeholder="Enter email..."
  helperText="We'll never share your email."
/>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
