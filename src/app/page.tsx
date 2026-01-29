'use client';

import { Button, Heading, Text, Card, CardContent, Badge } from '@/components/ui';

export default function IntroPage() {
  const handleGeoLabClick = () => {
    window.location.href = 'https://geolab.sphinfo.co.kr/geolab/main';
  };

  const features = [
    {
      title: '시설물 조회',
      description: '웹 기반 가스 시설물 조회 및 관리',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: '태블릿 관제',
      description: '실시간 현장 작업자 위치 및 상태 모니터링',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: '긴급상황분석',
      description: '가스 누출 시 영향 범위 분석 및 대응',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: '공간데이터 관리',
      description: 'GIS 기반 도면 데이터 통합 관리',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
  ];

  const clients = [
    'CNCITY 에너지',
    '미래엔서해에너지',
    '참빛원주도시가스',
    'JB',
    '인천도시가스',
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d9488] via-[#0891b2] to-[#0e7490]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* City Illustration */}
        <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-1/2 opacity-30">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMaxYMax slice">
            {/* Buildings */}
            <rect x="50" y="200" width="60" height="200" fill="white" opacity="0.3" />
            <rect x="130" y="150" width="80" height="250" fill="white" opacity="0.4" />
            <rect x="230" y="180" width="50" height="220" fill="white" opacity="0.3" />
            <rect x="300" y="100" width="100" height="300" fill="white" opacity="0.5" />
            <rect x="420" y="160" width="70" height="240" fill="white" opacity="0.4" />
            <rect x="510" y="120" width="90" height="280" fill="white" opacity="0.3" />
            <rect x="620" y="180" width="60" height="220" fill="white" opacity="0.4" />
            <rect x="700" y="140" width="80" height="260" fill="white" opacity="0.3" />
            {/* Gas Pipes */}
            <path d="M 0 350 Q 200 320 400 350 T 800 330" stroke="#fbbf24" strokeWidth="4" fill="none" opacity="0.6" />
            <path d="M 0 370 Q 200 340 400 370 T 800 350" stroke="#f97316" strokeWidth="3" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Badge variant="warning" size="lg" className="mb-6">
            도시가스 안전관리 시스템
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            GeoLab
          </h1>

          <Text as="p" className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            오픈소스 GIS SW, SuperMap GIS 기반
          </Text>

          <Text as="p" className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            도시가스 시설물을 웹, 모바일 환경에서 관리할 수 있는 통합 안전관리 시스템
          </Text>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <Text className="text-4xl font-bold text-white">2018</Text>
              <Text className="text-white/70 text-sm">서비스 시작</Text>
            </div>
            <div className="text-center">
              <Text className="text-4xl font-bold text-white">5+</Text>
              <Text className="text-white/70 text-sm">도시가스사 도입</Text>
            </div>
            <div className="text-center">
              <Text className="text-4xl font-bold text-white">6</Text>
              <Text className="text-white/70 text-sm">핵심 기능</Text>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">주요 기능</Heading>
            <Text color="muted" size="lg">
              GIS 기반 다양한 도시가스 솔루션을 제공합니다
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="outline" className="hover:shadow-lg transition-shadow">
                <CardContent className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0d9488] to-[#0891b2] text-white mb-4">
                    {feature.icon}
                  </div>
                  <Heading level="h5" className="mb-2">{feature.title}</Heading>
                  <Text color="muted" size="sm">{feature.description}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-6 bg-[var(--background-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Heading level="h3" className="mb-2">도입 고객사</Heading>
            <Text color="muted">2018년부터 도시가스사와 함께하고 있습니다</Text>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-lg shadow-sm border border-[var(--color-light-gray)]"
              >
                <Text weight="medium" color="muted">{client}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="default" className="mb-4">Cloud 기반</Badge>
              <Heading level="h2" className="mb-6">
                안정적인 클라우드 아키텍처
              </Heading>
              <Text color="muted" className="mb-6">
                Google Cloud Platform 기반으로 안정적이고 확장 가능한 서비스를 제공합니다.
                Web GL 기반 지도 렌더링과 벡터 타일을 활용하여 대용량 데이터도 빠르게 시각화합니다.
              </Text>
              <ul className="space-y-3">
                {[
                  '오픈소스 GIS SW를 이용한 시설물 조회 시스템',
                  'SuperMap GIS를 이용한 공간데이터 관리',
                  '긴급 상황분석 기능',
                  '대용량 공간 데이터 빠른 가시화',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0d9488]/10 to-[#0891b2]/10 rounded-2xl p-8">
              <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center border">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-[#0d9488] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <Text weight="semibold" className="text-[#0d9488]">GIS 기반 통합 관리</Text>
                  <Text size="sm" color="muted">배관, 밸브, TB, 정압기 관리</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#323232] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level="h2" className="text-white mb-6">
            지금 바로 GeoLab을 경험해보세요
          </Heading>
          <Text className="text-white/70 mb-10 text-lg">
            도시가스 안전관리의 새로운 기준, GeoLab과 함께하세요
          </Text>

          <Button
            variant="primary"
            size="lg"
            onClick={handleGeoLabClick}
            className="bg-gradient-to-r from-[#0d9488] to-[#0891b2] hover:from-[#0f766e] hover:to-[#0e7490] border-none text-lg px-12 py-4"
          >
            GeoLab 시작하기
            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>

          <Text size="sm" className="text-white/50 mt-6">
            https://geolab.sphinfo.co.kr/geolab
          </Text>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Text className="text-white font-semibold">SPH</Text>
            <Text size="sm" className="text-white/50">Story Place & Human</Text>
          </div>
          <Text size="sm" className="text-white/50">
            © 2025 SPH. All rights reserved.
          </Text>
        </div>
      </footer>
    </main>
  );
}
