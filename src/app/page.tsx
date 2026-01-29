'use client';

import { Button, Heading, Text, Card, CardContent, Badge, ImageCard } from '@/components/ui';

export default function IntroPage() {
  const handleGeoLabClick = () => {
    window.location.href = 'https://geolab.sphinfo.co.kr/geolab/main';
  };

  const features = [
    {
      title: 'Data Architecture',
      description: '대량 시설물, ERP 결합, 권한 관리, 빠른 조회 성능 보장',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'GIS 계층 설계',
      description: '조직별 계층구조, DB 파티셔닝, ERP/SAP 연동',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'ETL & 데이터 적재',
      description: 'Shape File → PostgreSQL 자동 적재 및 검증',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      title: '권한 기반 UI',
      description: '사용자 권한별 화면, Preset, 태블릿 환경 지원',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: '100% 오픈소스',
      description: 'PostGIS, MapLibre GL 기반 구축',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: '핵심 기능 집중',
      description: '불필요 요소 배제, 활용 중심 기능만 구현',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const clients = [
    {
      name: 'CNCITY 에너지',
      logo: '/images/clients/cncity.png',
      url: 'https://www.cncityenergy.com/jsp/index.jsp',
    },
    {
      name: '미래엔서해에너지',
      logo: '/images/clients/seohae.png',
      url: 'https://www.shgas.co.kr',
    },
    {
      name: '참빛원주도시가스',
      logo: '/images/clients/wonju.png',
      url: 'https://www.cwjgas.co.kr',
    },
    {
      name: 'JB 주식회사',
      logo: '/images/clients/jb.png',
      url: 'https://www.jbcorporation.com/',
    },
    {
      name: '인천도시가스',
      logo: '/images/clients/incheon.png',
      url: 'http://www.icgas.co.kr/2016/start.asp',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://www.samchully.co.kr/assets/img/page/group/overview-cover-1.webp')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#004a8f]/80 to-[#0066b3]/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Badge variant="warning" size="lg" className="mb-6">
            도시가스 안전관리 시스템
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            GeoLab
          </h1>

          <Text as="p" className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            PostGIS · MapLibre GL 기반
          </Text>

          <Text as="p" className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            100% 오픈소스 GIS로 구축된 도시가스 시설물 통합 안전관리 시스템
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
            <Badge variant="default" className="mb-4">Core Features</Badge>
            <Heading level="h2" className="mb-4">GeoLab 핵심 기술</Heading>
            <Text color="muted" size="lg">
              라이센스 리스크 최소화와 성능 최적화를 위한 설계
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="outline" className="hover:shadow-lg transition-shadow">
                <CardContent className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0066b3] to-[#0078d4] text-white mb-4">
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

      {/* Video Section */}
      <section className="py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/images/video-poster.jpg"
          >
            <source src="https://www.esri.com/content/dam/esrisites/en-us/home/homepage-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="warning" className="mb-4">Open Source GIS</Badge>
              <Heading level="h2" className="text-white mb-6">
                라이센스 리스크 없는<br />순수 오픈소스 GIS
              </Heading>
              <Text className="text-white/70 mb-8 text-lg">
                GIS 엔진을 배제하고 PostGIS, MapLibre GL 등 검증된 오픈소스만으로 구축.
                핵심 기능에 집중하여 불필요한 요소를 배제한 실용적인 시스템입니다.
              </Text>
              <div className="flex gap-4">
                <Button variant="primary" className="bg-gradient-to-r from-[#0066b3] to-[#0078d4] border-none">
                  데모 신청
                </Button>
                <Button variant="ghost" className="text-white border-white/30 hover:bg-white/10">
                  자세히 보기
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/geolab-demo-poster.jpg"
                >
                  <source src="https://www.esri.com/content/dam/esrisites/en-us/home/homepage-video.mp4" type="video/mp4" />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions ImageCard Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4">Architecture</Badge>
            <Heading level="h2" className="mb-4">기술 아키텍처</Heading>
            <Text color="muted" size="lg">
              GIS 엔진 없는 순수 오픈소스 기반의 안정적인 시스템
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageCard
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
              alt="Data Architecture"
              title="Data Architecture & DB 모델링"
              description="대량 시설물 정보와 ERP 결합, 개인식별 및 팀 권한 관리, 빠른 조회 성능을 보장하는 최적화된 데이터 구조"
              badge="Database"
              badgeVariant="success"
              variant="elevated"
              aspectRatio="video"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
              alt="GIS Layer Design"
              title="GIS 계층 구조 설계"
              description="통짜 레이어(Single Layer) 방식 탈피, 조직별 계층구조와 DB 파티셔닝, ERP/SAP 연동을 고려한 설계"
              badge="GIS Design"
              badgeVariant="warning"
              variant="elevated"
              aspectRatio="video"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
              alt="ETL Process"
              title="ETL 데이터 적재"
              description="메인 GIS의 Shape File을 PostgreSQL에 자동 적재. 데이터 검증, 좌표계 체크 및 반영, 안정적인 적재 프로세스"
              badge="ETL"
              badgeVariant="purple"
              variant="elevated"
              aspectRatio="video"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ImageCard
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800"
              alt="권한 기반 화면 설계"
              title="권한 기반 화면 설계"
              description="사용자 권한(지역, 부서 등)과 역할에 맞는 데이터 조회. Preset 기능으로 업무 리스트, 신규 시설물, 점검 대상 등 주요 관심 데이터 즉시 접근. 현장 확대를 위한 태블릿 환경 지원."
              badge="User Experience"
              badgeVariant="default"
              variant="outline"
              imagePosition="left"
              aspectRatio="square"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
              alt="오픈소스 스택"
              title="100% 오픈소스 스택"
              description="DBMS: PostGIS / Back-end: TileServer GL / Front-end: MapLibre GL, Turf / Tools: QGIS, Tippecanoe. 과도한 라이센스와 End of Service 리스크 최소화."
              badge="Open Source"
              badgeVariant="success"
              variant="outline"
              imagePosition="right"
              aspectRatio="square"
            />
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
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer min-w-[180px] border border-[var(--color-light-gray)] hover:border-[var(--color-primary)]"
              >
                {/* 이미지 영역 - 흰색 배경 */}
                <div className="bg-white px-6 py-5 flex items-center justify-center">
                  <div className="w-24 h-14 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} 로고`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-14 h-14 bg-[var(--color-light-gray)] rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-[var(--color-medium-gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* 텍스트 영역 - 테마 컬러 배경 */}
                <div className="bg-gradient-to-r from-[#0066b3] to-[#0078d4] px-4 py-3 text-center">
                  <Text weight="medium" size="sm" className="text-white">{client.name}</Text>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="default" className="mb-4">Tech Stack</Badge>
              <Heading level="h2" className="mb-6">
                오픈소스 기반 기술 스택
              </Heading>
              <Text color="muted" className="mb-6">
                GIS 엔진을 배제한 순수 오픈소스 활용 개발로 과도한 라이센스 비용과
                End of Service 리스크를 최소화합니다.
              </Text>
              <ul className="space-y-3">
                {[
                  'DBMS: PostgreSQL + PostGIS 공간 데이터베이스',
                  'Back-end: TileServer GL 타일 서버',
                  'Front-end: MapLibre GL JS, Turf.js 공간분석',
                  'Tools: QGIS 데이터 편집, Tippecanoe 타일 생성',
                  'ETL: Shape File 자동 적재 및 좌표계 변환',
                  '권한관리: 조직/역할 기반 데이터 접근 제어',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066b3] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0066b3]/10 to-[#0078d4]/10 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#0066b3]/5 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066b3] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
                      </svg>
                    </div>
                    <div>
                      <Text weight="semibold" size="sm">PostGIS</Text>
                      <Text size="xs" color="muted">공간 데이터베이스</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#0066b3]/5 rounded-lg">
                    <div className="w-10 h-10 bg-[#0078d4] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <div>
                      <Text weight="semibold" size="sm">TileServer GL</Text>
                      <Text size="xs" color="muted">WMS/WFS/벡터 타일 서버</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#0066b3]/5 rounded-lg">
                    <div className="w-10 h-10 bg-[#004a8f] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <Text weight="semibold" size="sm">MapLibre GL + Turf.js</Text>
                      <Text size="xs" color="muted">WebGL 지도 렌더링 & 공간분석</Text>
                    </div>
                  </div>
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
            className="bg-gradient-to-r from-[#0066b3] to-[#0078d4] hover:from-[#003366] hover:to-[#004a8f] border-none text-lg px-12 py-4"
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
