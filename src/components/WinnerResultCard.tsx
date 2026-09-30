import React, { useState, useEffect } from 'react';
import { ExternalLink, Check, Copy, AlertTriangle, Gift, ZoomIn, X } from 'lucide-react';
import { CHALLENGE_INFO } from '../data/challengeData';

interface WinnerResultCardProps {
  name: string;
}

interface ImageModalData {
  src: string;
  fallbackSrc: string;
  title: string;
  subtitle: string;
}

export const WinnerResultCard: React.FC<WinnerResultCardProps> = ({ name }) => {
  const [copied, setCopied] = useState(false);
  const [modalImage, setModalImage] = useState<ImageModalData | null>(null);

  // Close modal on ESC key and prevent body background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
    };

    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(CHALLENGE_INFO.surveyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in zoom-in-95 duration-500">
      {/* Main Winner Banner Card */}
      <div className="bg-gradient-to-br from-[#FFFDF7] via-white to-[#F5FAFE] rounded-3xl border-3 border-[#95B8D1] p-6 sm:p-10 card-shadow relative overflow-hidden">
        {/* Decorative corner ribbons */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9F2F8] rounded-bl-full -z-0 opacity-60 pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#F6F1DE] rounded-tr-full -z-0 opacity-70 pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
          {/* Trophy & Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9F2F8] border border-[#95B8D1] text-[#31516A] text-xs sm:text-sm font-black shadow-xs">
            <Gift className="w-4 h-4 text-[#31516A]" />
            <span>2~3주차 미션 리워드 당첨자 선정</span>
          </div>

          {/* Name & Congratulatory Headline */}
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D3436] tracking-tight">
            🎉 축하합니다! <span className="text-[#31516A] underline decoration-[#95B8D1] decoration-4 underline-offset-4">{name}</span> 님
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed">
            10일 동안 3회 이상 근력 운동 인증 미션을 훌륭하게 완수하셨으며,
            <br className="hidden sm:inline" />
            <strong>주간 미션 리워드 당첨자(20명)</strong>로 최종 선정되셨습니다!
          </p>

          {/* Reward Item Highlight Box */}
          <div className="my-6 p-4 sm:p-5 bg-white rounded-2xl border-2 border-[#D5E5F1] shadow-sm text-center">
            <span className="text-xs font-bold text-[#8F7B4A] uppercase tracking-wider">당첨 리워드 상품</span>
            <div className="text-xl font-black text-[#2D3436] mt-1">
              {CHALLENGE_INFO.rewardName}
            </div>
          </div>

          {/* Critical Survey Action CTA Container */}
          <div className="pt-2 space-y-3">
            <a
              href={CHALLENGE_INFO.surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-[#31516A] hover:bg-[#253E52] text-white text-base sm:text-xl font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all transform active:scale-[0.98]"
            >
              <span>장갑 사이즈 조사 설문 작성하기</span>
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              <span>설문 링크 바로 접속이 안 되시나요?</span>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 font-bold text-[#31516A] hover:underline"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">설문 URL 복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>설문조사 URL 복사하기</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Important Notices with Glove Image & Size Guide Image */}
          <div className="mt-6 text-left p-5 sm:p-6 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 space-y-4">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>당첨자 필수 확인 안내사항</span>
            </div>
            <ul className="space-y-1.5 pl-5 list-disc text-amber-900 leading-relaxed">
              <li>
                <strong>사이즈 선택:</strong> 아래 안내된 <strong>장갑 사이즈 이미지(사이즈 표)</strong>를 꼭 참고하시어 설문 링크에서 사이즈를 선택해 주세요.
              </li>
              <li>
                <strong>환불/교환 불가:</strong> <strong>접수 후 사이즈 변경이나 환불/교환이 불가</strong>하므로, 신중하게 치수를 측정한 뒤 작성 부탁드립니다.
              </li>
              <li>
                <strong>로고 색상:</strong> 로고 색상은 <strong>화이트가 기본</strong>이나, 공급사 품절이나 수급 상황에 따라 <strong>블랙 색상으로 대체</strong>될 수 있습니다.
              </li>
            </ul>

            {/* Embedded Glove Image & Glove Size Guide Image */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. 장갑 사진 이미지 */}
              <div className="bg-white rounded-2xl p-3.5 border border-amber-200/90 shadow-2xs flex flex-col items-center">
                <div className="w-full flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                  <span className="font-extrabold text-slate-800 text-xs">장갑 사진 이미지</span>
                  <button
                    type="button"
                    onClick={() =>
                      setModalImage({
                        src: '/images/glove.jpg',
                        fallbackSrc: 'https://i.imgur.com/WZ8NogB.jpg',
                        title: '장갑 사진 이미지',
                        subtitle: '1. 화이트 (기본 로고) / 2. 블랙 (수급 품절 시 대체 로고)',
                      })
                    }
                    className="text-[11px] text-[#31516A] hover:text-[#253E52] hover:bg-[#E9F2F8] px-2 py-0.5 rounded-md flex items-center gap-1 font-bold transition-colors"
                  >
                    <ZoomIn className="w-3 h-3 text-[#31516A]" />
                    <span>사진 크게보기</span>
                  </button>
                </div>
                <div
                  onClick={() =>
                    setModalImage({
                      src: '/images/glove.jpg',
                      fallbackSrc: 'https://i.imgur.com/WZ8NogB.jpg',
                      title: '장갑 사진 이미지',
                      subtitle: '1. 화이트 (기본 로고) / 2. 블랙 (수급 품절 시 대체 로고)',
                    })
                  }
                  className="w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center cursor-zoom-in group"
                  title="클릭하여 사진 크게보기"
                >
                  <img
                    src="/images/glove.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/WZ8NogB.jpg';
                    }}
                    alt="아디다스 헬스장갑 화이트 및 블랙 실물 사진"
                    className="w-full h-auto max-h-[220px] object-contain transition-transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] text-slate-600 mt-2 font-medium text-center">
                  1. 화이트(기본) / 2. 블랙(대체)
                </span>
              </div>

              {/* 2. 장갑 사이즈 이미지 */}
              <div className="bg-white rounded-2xl p-3.5 border border-amber-200/90 shadow-2xs flex flex-col items-center">
                <div className="w-full flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                  <span className="font-extrabold text-slate-800 text-xs">장갑 사이즈 이미지</span>
                  <button
                    type="button"
                    onClick={() =>
                      setModalImage({
                        src: '/images/size_guide.jpg',
                        fallbackSrc: 'https://i.imgur.com/ROpTGqy.jpg',
                        title: '장갑 사이즈 이미지 (SIZE GUIDE)',
                        subtitle: '손바닥 둘레 기준 추천 치수 안내표 (XS ~ XL)',
                      })
                    }
                    className="text-[11px] text-[#31516A] hover:text-[#253E52] hover:bg-[#E9F2F8] px-2 py-0.5 rounded-md flex items-center gap-1 font-bold transition-colors"
                  >
                    <ZoomIn className="w-3 h-3 text-[#31516A]" />
                    <span>사진 크게보기</span>
                  </button>
                </div>
                <div
                  onClick={() =>
                    setModalImage({
                      src: '/images/size_guide.jpg',
                      fallbackSrc: 'https://i.imgur.com/ROpTGqy.jpg',
                      title: '장갑 사이즈 이미지 (SIZE GUIDE)',
                      subtitle: '손바닥 둘레 기준 추천 치수 안내표 (XS ~ XL)',
                    })
                  }
                  className="w-full overflow-hidden rounded-xl bg-white flex items-center justify-center cursor-zoom-in group"
                  title="클릭하여 사진 크게보기"
                >
                  <img
                    src="/images/size_guide.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/ROpTGqy.jpg';
                    }}
                    alt="장갑 사이즈 표 이미지"
                    className="w-full h-auto max-h-[220px] object-contain transition-transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] text-slate-600 mt-2 font-medium text-center">
                  손바닥 둘레별 추천 사이즈 표 (XS ~ XL)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating/Fixed CTA Reminder */}
      <div className="bg-[#E9F2F8] border-2 border-[#D5E5F1] rounded-2xl p-5 text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-left">
          <div className="text-sm font-extrabold text-[#31516A]">
            사이즈를 확인하셨나요?
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            아래 버튼을 눌러 마이크로소프트 폼즈 설문에서 {name} 님의 사이즈를 제출해 주세요.
          </p>
        </div>

        <a
          href={CHALLENGE_INFO.surveyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3 rounded-xl bg-[#31516A] hover:bg-[#253E52] text-white text-sm font-black transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <span>설문 링크로 이동</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* In-app Image Zoom / Lightbox Modal */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/90">
              <div>
                <h4 className="font-black text-slate-800 text-base sm:text-lg">
                  {modalImage.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {modalImage.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="닫기 (ESC)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body / Image */}
            <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-[#FAF9F6] min-h-[320px]">
              <img
                src={modalImage.src}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = modalImage.fallbackSrc;
                }}
                alt={modalImage.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-slate-200 bg-white"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-slate-100 bg-white flex items-center justify-between text-xs text-slate-500">
              <span>바깥 어두운 영역이나 닫기(ESC) 버튼을 누르면 이전 화면으로 돌아갑니다.</span>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="px-4 py-2 rounded-xl bg-[#31516A] hover:bg-[#253E52] text-white font-bold transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
