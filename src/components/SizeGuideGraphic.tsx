import React, { useState } from 'react';
import { SIZE_GUIDE_DATA } from '../data/challengeData';

interface SizeGuideProps {
  interactive?: boolean;
}

export const HandDiagramSvg: React.FC<{ className?: string }> = ({ className = 'w-full max-w-[240px]' }) => {
  return (
    <svg
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none drop-shadow-sm`}
    >
      {/* Hand Outline (Stylized minimalist hand drawing as in uploaded size guide) */}
      <path
        d="M 85 280 
           C 80 250, 75 220, 65 200
           C 55 180, 40 170, 36 150
           C 32 135, 45 125, 58 135
           C 72 145, 82 170, 92 185
           C 92 140, 88 95, 90 75
           C 92 60, 108 60, 112 75
           C 116 100, 118 140, 120 155
           C 122 130, 124 60, 128 40
           C 130 25, 148 25, 152 40
           C 156 70, 156 125, 158 150
           C 162 130, 166 70, 172 55
           C 176 40, 192 40, 195 55
           C 200 80, 198 130, 198 158
           C 204 140, 210 100, 218 90
           C 224 80, 238 85, 240 100
           C 242 125, 236 170, 232 200
           C 225 240, 215 270, 210 285"
        stroke="#4B5563"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFFFFF"
      />

      {/* Palm crease details */}
      <path
        d="M 98 180 C 130 190, 170 185, 215 175"
        stroke="#CBD5E1"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 82 170 C 110 200, 140 230, 150 265"
        stroke="#E2E8F0"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Measurement Curved Tape / Loop Arrow (Matching uploaded diagram) */}
      <g>
        {/* Back of hand dashed wrap */}
        <path
          d="M 62 172 C 100 155, 180 155, 234 180"
          stroke="#0F172A"
          strokeWidth="3.5"
          strokeDasharray="5 5"
          fill="none"
        />
        {/* Front palm solid wrap with measurement arrow */}
        <path
          d="M 62 172 C 90 200, 185 200, 234 180"
          stroke="#0F172A"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Left arrowhead pointing across */}
        <polygon
          points="140,195 152,190 152,200"
          fill="#0F172A"
        />
        {/* Highlight glow pulse */}
        <circle cx="146" cy="195" r="14" fill="#95B8D1" opacity="0.25" />
      </g>
    </svg>
  );
};

export const SizeGuideCard: React.FC<SizeGuideProps> = ({ interactive = true }) => {
  const [userHandCm, setUserHandCm] = useState<number>(20.5);

  const getRecommendedSize = (cm: number): string => {
    if (cm < 19) return 'XS';
    if (cm < 20) return 'S';
    if (cm < 21.5) return 'M';
    if (cm < 23) return 'L';
    return 'XL';
  };

  const currentRec = getRecommendedSize(userHandCm);

  return (
    <div className="bg-white rounded-3xl border-2 border-[#D5E5F1] p-6 sm:p-7 shadow-sm">
      {/* Title */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold text-[#31516A] tracking-wider uppercase bg-[#E9F2F8] px-2.5 py-1 rounded-md">
            OFFICIAL SIZE GUIDE
          </span>
          <h3 className="text-2xl font-black text-[#2D3436] tracking-tight mt-1">
            SIZE GUIDE
          </h3>
          <p className="text-xs text-slate-500">
            아디다스 헬스장갑 손바닥 둘레별 추천 사이즈 표
          </p>
        </div>
      </div>

      {/* Main Grid (Hand diagram + Size table) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
        {/* Left: Hand Diagram */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-5 bg-[#FBFDFF] rounded-2xl border border-slate-100">
          <HandDiagramSvg className="w-48 h-52" />
          <p className="text-xs font-semibold text-center text-[#2D3436] mt-3 leading-relaxed">
            <span className="text-[#31516A] font-bold">엄지 손가락을 제외한</span>
            <br />
            <strong>손바닥 가장 넓은 부분</strong>의 둘레를 측정해 주세요
          </p>
          <span className="text-[11px] text-slate-500 mt-1 bg-slate-100 px-3 py-1 rounded-full">
            줄자 또는 실을 둘러서 측정 가능
          </span>
        </div>

        {/* Right: Recommended Size Table */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-sm font-bold text-[#2D3436]">추천 사이즈 안내</span>
            <span className="text-xs text-slate-500">단위: cm (손바닥 둘레)</span>
          </div>

          <div className="space-y-2.5">
            {SIZE_GUIDE_DATA.map((item) => {
              const isSelected = currentRec === item.size;
              return (
                <div
                  key={item.size}
                  className={`flex items-center justify-between p-3 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-[#E9F2F8] border-[#31516A] shadow-sm font-bold ring-2 ring-[#95B8D1]/40'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black transition-colors ${
                        isSelected
                          ? 'bg-[#31516A] text-white shadow-sm'
                          : 'bg-slate-800 text-white'
                      }`}
                    >
                      {item.size}
                    </span>
                    <div>
                      <span className="text-sm text-slate-800 font-semibold">{item.range}</span>
                      <span className="text-[11px] text-slate-600 block sm:inline sm:ml-2">
                        ({item.description})
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="text-xs font-black text-[#31516A] bg-white px-2.5 py-1 rounded-full shadow-xs border border-[#95B8D1]">
                      내 추천 사이즈 ✨
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Size Calculator */}
      {interactive && (
        <div className="mt-6 pt-5 border-t border-slate-100 bg-[#F8FBFD] p-4 sm:p-5 rounded-2xl border border-[#D5E5F1]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#31516A] block">
                📏 내 손바닥 둘레로 사이즈 바로 확인하기
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                슬라이더를 움직여 측정하신 둘레를 맞춰보세요.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-600">측정 둘레:</span>
              <span className="text-lg font-black text-[#31516A] bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                {userHandCm.toFixed(1)} cm
              </span>
              <span className="text-sm font-extrabold text-[#31516A] bg-[#E9F2F8] px-3 py-1.5 rounded-xl border border-[#95B8D1]">
                추천: {currentRec}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs text-slate-600 font-bold">17.5cm</span>
            <input
              type="range"
              min="17.5"
              max="25.0"
              step="0.1"
              value={userHandCm}
              onChange={(e) => setUserHandCm(parseFloat(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#31516A]"
            />
            <span className="text-xs text-slate-600 font-bold">25.0cm</span>
          </div>
        </div>
      )}

      {/* Footnotes matching the user uploaded size guide */}
      <div className="mt-5 space-y-1.5 text-xs text-slate-600 bg-[#FFFDF7] p-4 rounded-xl border border-[#EEE3C3]">
        <div className="flex items-start gap-1.5 font-medium">
          <span className="text-slate-400 font-bold">•</span>
          <span>개인의 측정 방법에 따라 1~2cm 내외의 오차 범위가 발생할 수 있습니다.</span>
        </div>
        <div className="flex items-start gap-1.5 font-semibold text-[#8F7B4A]">
          <span className="font-bold">•</span>
          <span>
            사이즈 최대 기준에 해당되는 경우, <strong>한 사이즈 크게</strong> 선택을 추천드립니다.
            <span className="font-normal text-slate-600 ml-1">(ex. 측정 둘레가 20.0cm일 때 ➡️ <strong>M사이즈</strong> 권장)</span>
          </span>
        </div>
        <div className="flex items-start gap-1.5 text-rose-700 font-semibold">
          <span className="font-bold">•</span>
          <span>
            주문 제작 및 단체 수급 특성상 <strong>환불 및 교환이 불가</strong>하므로, 본 사이즈 표를 신중하게 확인 후 설문에 응답해 주시기 바랍니다.
          </span>
        </div>
      </div>
    </div>
  );
};
