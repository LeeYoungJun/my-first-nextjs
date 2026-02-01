'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, AnimatePresence } from 'framer-motion';
import { Button, Heading, Text, Card, CardContent, Badge, ImageCard } from '@/components/ui';

// 카운터 애니메이션 컴포넌트
function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// 파티클 배경 컴포넌트
function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#5eead4]/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            y: [null, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

// 텍스트 글자별 애니메이션
function AnimatedText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// 마우스 커서 효과
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, .hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 8),
        y: mousePosition.y - (isHovering ? 24 : 8),
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div className={`w-full h-full rounded-full border-2 border-white ${isHovering ? 'bg-white/20' : 'bg-white'}`} />
    </motion.div>
  );
}

export default function IntroPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);

  // 패럴랙스 효과
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleGeoLabClick = () => {
    window.location.href = 'https://geolab.sphinfo.co.kr/geolab/main';
  };

  // 주요 기능 데이터
  const keyFeatures = [
    {
      category: '도면 조회',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'from-[#10b981] to-[#5eead4]',
      items: ['지도 영역 제어 (확대/축소/이동)', '지번·도로명·건물명 검색', '거리/면적 측정', '배경지도 (브이월드/카카오)', '주제도 (지적도/용도지역도/침수흔적도)']
    },
    {
      category: '가스 시설물',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-[#5eead4] to-[#10b981]',
      items: ['배관 현황/점검이력', '정압기 현황/점검이력', '밸브 현황/점검이력', 'TB 현황/점검이력', '정류기/MOV 현황', '수용가 현황 조회']
    },
    {
      category: '긴급상황 분석',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'from-red-500 to-orange-500',
      items: ['사고 지점 선택/분석', '1차/2차 차단 밸브 검출', '차단 정압기 결과', '공급중단 배관/수용가', '퍼지량 및 가스량 산출', '분석 결과 인쇄']
    },
    {
      category: '시스템 관리',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500',
      items: ['역할/그룹 관리', '메뉴 권한 관리', '레이어 권한 설정', '공통 코드 관리', '접속/데이터 로그']
    },
  ];

  const features = [
    {
      title: 'Data Architecture',
      description: '대량 시설물, ERP 결합, 권한 관리, 빠른 조회 성능 보장',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'GIS 계층 설계',
      description: '조직별 계층구조, DB 파티셔닝, ERP/SAP 연동',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'ETL & 데이터 적재',
      description: 'Shape File → PostgreSQL 자동 적재 및 검증',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      title: '권한 기반 UI',
      description: '사용자 권한별 화면, Preset, 태블릿 환경 지원',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: '100% 오픈소스',
      description: 'PostGIS, MapLibre GL 기반 구축',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: '핵심 기능 집중',
      description: '불필요 요소 배제, 활용 중심 기능만 구현',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const clients = [
    { name: 'CNCITY 에너지', logo: '/images/clients/cncity.png', url: 'https://www.cncityenergy.com/jsp/index.jsp' },
    { name: '미래엔서해에너지', logo: '/images/clients/seohae.png', url: 'https://www.shgas.co.kr' },
    { name: '참빛원주도시가스', logo: '/images/clients/wonju.png', url: 'https://www.cwjgas.co.kr' },
    { name: 'JB 주식회사', logo: '/images/clients/jb.png', url: 'https://www.jbcorporation.com/' },
    { name: '인천도시가스', logo: '/images/clients/incheon.png', url: 'http://www.icgas.co.kr/2016/start.asp' },
  ];

  const techStack = [
    { name: 'PostGIS', description: '공간 데이터베이스', color: '#336791' },
    { name: 'TileServer GL', description: 'WMS/WFS/벡터 타일', color: '#00ACC1' },
    { name: 'MapLibre GL', description: 'WebGL 지도 렌더링', color: '#4CAF50' },
    { name: 'Turf.js', description: '공간 분석 라이브러리', color: '#FF5722' },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-b from-[#0a1f1a] to-[#0d2818] text-white overflow-x-hidden">
      <CustomCursor />

      {/* Hero Section - 풀스크린 */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* 배경 그라데이션 - 민트/녹색 봄 테마 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f1a] via-[#0d2818] to-[#1a3a2f]" />

        {/* 파티클 효과 */}
        <ParticleBackground />

        {/* 글로우 효과 - 민트/녹색 */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#10b981]/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5eead4]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* 그리드 라인 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />

        {/* 콘텐츠 */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* 서브 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm tracking-widest text-white/60 mb-8">
              <span className="w-2 h-2 bg-[#5eead4] rounded-full animate-pulse" />
              도시가스 안전관리 시스템
            </span>
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <AnimatedText text="GeoLab" className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent" delay={0.5} />
          </motion.h1>

          {/* 서브 텍스트 */}
          <motion.p
            className="text-xl md:text-2xl text-white/50 mb-4 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            PostGIS · MapLibre GL · 100% Open Source
          </motion.p>

          <motion.p
            className="text-lg text-white/40 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            라이센스 리스크 없는 순수 오픈소스 GIS 기반<br />
            도시가스 시설물 통합 안전관리 플랫폼
          </motion.p>

          {/* 통계 카운터 */}
          <motion.div
            className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center hoverable">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#10b981] to-[#5eead4] bg-clip-text text-transparent">
                <AnimatedCounter value={2018} duration={1.5} />
              </div>
              <div className="text-white/40 text-sm tracking-widest mt-2">서비스 시작</div>
            </div>
            <div className="text-center hoverable">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5eead4] to-[#10b981] bg-clip-text text-transparent">
                <AnimatedCounter value={5} suffix="+" duration={1} />
              </div>
              <div className="text-white/40 text-sm tracking-widest mt-2">도시가스사 도입</div>
            </div>
            <div className="text-center hoverable">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#10b981] to-[#5eead4] bg-clip-text text-transparent">
                <AnimatedCounter value={6} duration={1} />
              </div>
              <div className="text-white/40 text-sm tracking-widest mt-2">핵심 기능</div>
            </div>
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleGeoLabClick}
              className="hoverable bg-gradient-to-r from-[#10b981] to-[#059669] border-none text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#10b981]/30"
            >
              GeoLab 시작하기
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-32 px-6 bg-gradient-to-b from-[#0d2818] to-[#0a1f1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#5eead4] text-sm tracking-widest font-medium mb-4 block">CORE FEATURES</span>
            <Heading level="h2" className="text-white text-4xl md:text-5xl font-bold mb-6">
              GeoLab 핵심 기술
            </Heading>
            <Text className="text-white/50 text-lg max-w-2xl mx-auto">
              라이센스 리스크 최소화와 성능 최적화를 위한 설계
            </Text>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="hoverable group h-full"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#10b981]/50 hover:bg-white/10 h-full flex flex-col">
                  {/* 호버 글로우 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/0 to-[#5eead4]/0 group-hover:from-[#10b981]/10 group-hover:to-[#5eead4]/5 transition-all duration-500" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#10b981] to-[#5eead4] text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="min-w-0">
                      <Heading level="h5" className="text-white font-semibold mb-1">{feature.title}</Heading>
                      <Text className="text-white/50 text-sm truncate">{feature.description}</Text>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f1a] via-[#0d2818] to-[#0a1f1a]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#5eead4] text-sm tracking-widest font-medium mb-4 block">TECH STACK</span>
              <Heading level="h2" className="text-white text-4xl md:text-5xl font-bold mb-6">
                오픈소스 기반<br />기술 스택
              </Heading>
              <Text className="text-white/50 text-lg mb-8">
                GIS 엔진을 배제한 순수 오픈소스 활용 개발로 과도한 라이센스 비용과
                End of Service 리스크를 최소화합니다.
              </Text>

              <ul className="space-y-4">
                {[
                  'DBMS: PostgreSQL + PostGIS 공간 데이터베이스',
                  'Back-end: TileServer GL 타일 서버',
                  'Front-end: MapLibre GL JS, Turf.js 공간분석',
                  'Tools: QGIS 데이터 편집, Tippecanoe 타일 생성',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#10b981] to-[#5eead4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <Text className="text-white/70 group-hover:text-white transition-colors">{item}</Text>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="hoverable p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#10b981]/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: tech.color }} />
                    </div>
                    <Text weight="semibold" className="text-white mb-1">{tech.name}</Text>
                    <Text size="sm" className="text-white/40">{tech.description}</Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Rivian Style */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0d2818] to-[#0a1f1a]">
        <div className="max-w-5xl mx-auto">
          {/* Rivian 스타일 이미지 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10"
              style={{ boxShadow: '0 25px 60px rgba(16, 185, 129, 0.15), 0 10px 30px rgba(0, 0, 0, 0.3)' }}
            >
              {/* 메인 이미지 - 호버 시 확대 효과 */}
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <img
                  src="/images/screenshots/geolab-main.png"
                  alt="GeoLab 메인화면"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    filter: 'brightness(1.02) contrast(1.02) saturate(1.05)'
                  }}
                />

                {/* 하단 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* 좌측 하단 텍스트 & 버튼 - Rivian 스타일 */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    <span className="text-[#5eead4]">GeoLab</span>
                    <br />
                    시설물 조회
                  </h2>
                  <button
                    onClick={() => setIsFeatureModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    주요 기능
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 기능 팝업 모달 */}
      <AnimatePresence>
        {isFeatureModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 배경 오버레이 */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFeatureModalOpen(false)}
            />

            {/* 모달 컨텐츠 */}
            <motion.div
              className="relative bg-[#0d2818] border border-white/10 rounded-3xl max-w-4xl w-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* 모달 헤더 */}
              <div className="sticky top-0 bg-[#0d2818]/95 backdrop-blur-md border-b border-white/10 px-8 py-5 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white">주요 기능</h3>
                  <p className="text-white/50 text-sm mt-1">GeoLab 시설물 조회 시스템</p>
                </div>
                <button
                  onClick={() => setIsFeatureModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 모달 바디 */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#10b981]/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white">{feature.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {feature.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-white/60 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#5eead4]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clients Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a1f1a] to-[#0d2818]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#5eead4] text-sm tracking-widest font-medium mb-4 block">TRUSTED BY</span>
            <Heading level="h3" className="text-white text-3xl font-bold mb-4">도입 고객사</Heading>
            <Text className="text-white/50">2018년부터 도시가스사와 함께하고 있습니다</Text>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {clients.map((client, index) => (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 hover:border-[#10b981]/50 transition-all duration-300 min-w-[180px]">
                  <div className="bg-white px-6 py-5 flex items-center justify-center">
                    <div className="w-24 h-14 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} 로고`}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#10b981] to-[#059669] px-4 py-3 text-center">
                    <Text weight="medium" size="sm" className="text-white">{client.name}</Text>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]" />

        {/* 패턴 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading level="h2" className="text-white text-4xl md:text-5xl font-bold mb-6">
            지금 바로 GeoLab을<br />경험해보세요
          </Heading>
          <Text className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            도시가스 안전관리의 새로운 기준, GeoLab과 함께하세요
          </Text>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleGeoLabClick}
              className="hoverable bg-white text-[#059669] hover:bg-white/90 border-none text-lg px-12 py-5 rounded-full shadow-2xl font-semibold"
            >
              GeoLab 시작하기
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </motion.div>

          <Text size="sm" className="text-white/40 mt-8">
            https://geolab.sphinfo.co.kr/geolab
          </Text>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-b from-[#0d2818] to-[#0a1f1a] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <Text size="sm" className="text-white/50">
            SPH(주) | 담당자: 유경수 상무 | Tel: 02-785-9910 | Email: help@sphinfo.com | 서울특별시 마포구 마포대로 92, 효성해링턴스퀘어 A동 3층
          </Text>
          <Text size="sm" className="text-white/40 mt-3">
            Copyright © SPH, Inc. All Rights Reserved.
          </Text>
        </div>
      </footer>
    </main>
  );
}
