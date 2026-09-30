import React from 'react';

interface GloveGraphicProps {
  color?: 'white' | 'black';
  view?: 'back' | 'palm';
  className?: string;
}

export const SingleGloveSvg: React.FC<{
  logoColor: 'white' | 'black';
  view?: 'back' | 'palm';
}> = ({ logoColor, view = 'back' }) => {
  const isWhiteLogo = logoColor === 'white';
  const logoFill = isWhiteLogo ? '#FFFFFF' : '#1F2428';
  const logoStroke = isWhiteLogo ? '#E2E8F0' : '#2A3036';

  return (
    <svg
      viewBox="0 0 280 320"
      className="w-full h-auto max-h-[260px] drop-shadow-md select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glove main body gradient */}
        <linearGradient id={`glove-body-${logoColor}-${view}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2F35" />
          <stop offset="50%" stopColor="#1E2328" />
          <stop offset="100%" stopColor="#15181C" />
        </linearGradient>

        {/* Mesh pattern texture */}
        <pattern id={`mesh-${logoColor}`} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#3D444E" opacity="0.4" />
          <circle cx="5" cy="5" r="0.8" fill="#3D444E" opacity="0.4" />
        </pattern>

        {/* Wrist strap gradient */}
        <linearGradient id={`wrist-strap-${logoColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#181B1F" />
          <stop offset="50%" stopColor="#282D33" />
          <stop offset="100%" stopColor="#14171A" />
        </linearGradient>

        {/* Palm grip pad gradient */}
        <linearGradient id={`palm-pad-${logoColor}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#323841" />
          <stop offset="100%" stopColor="#23272D" />
        </linearGradient>
      </defs>

      {view === 'back' ? (
        /* BACK OF HAND VIEW (With 3-Bars Logo) */
        <g>
          {/* Main glove silhouette */}
          <path
            d="M 68 250 
               C 62 230, 58 190, 60 140
               C 62 105, 68 85, 75 70
               C 78 64, 95 64, 98 72
               C 102 85, 103 100, 105 108
               C 107 92, 110 60, 116 48
               C 120 40, 137 40, 140 48
               C 144 65, 145 92, 147 105
               C 150 90, 154 55, 160 44
               C 164 36, 180 36, 184 44
               C 188 62, 188 88, 188 108
               C 192 98, 196 74, 203 66
               C 207 60, 220 60, 224 68
               C 228 82, 225 118, 222 145
               C 220 180, 218 220, 212 250
               Z"
            fill={`url(#glove-body-${logoColor}-${view})`}
            stroke="#3F4752"
            strokeWidth="2.5"
          />

          {/* Breathable Mesh Overlay */}
          <path
            d="M 75 140 C 75 120, 90 110, 140 110 C 190 110, 205 120, 205 140 C 205 180, 195 210, 140 215 C 85 210, 75 180, 75 140 Z"
            fill={`url(#mesh-${logoColor})`}
          />

          {/* Finger Cut-off Stitching / Trim */}
          {/* Index finger */}
          <path d="M 75 70 Q 86 64 98 72" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
          {/* Middle finger */}
          <path d="M 116 48 Q 128 42 140 48" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
          {/* Ring finger */}
          <path d="M 160 44 Q 172 38 184 44" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
          {/* Pinky finger */}
          <path d="M 203 66 Q 214 60 224 68" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />

          {/* Finger Pull-off loops (distinctive feature) */}
          <path d="M 103 82 C 103 76, 111 76, 111 82" stroke="#525B67" strokeWidth="2.5" fill="none" />
          <path d="M 148 76 C 148 70, 156 70, 156 76" stroke="#525B67" strokeWidth="2.5" fill="none" />

          {/* Thumb structure (fingerless) */}
          <path
            d="M 62 155 C 50 162, 35 175, 28 190 C 24 198, 28 206, 38 208 C 50 206, 60 192, 68 180"
            fill={`url(#glove-body-${logoColor}-${view})`}
            stroke="#3F4752"
            strokeWidth="2.5"
          />
          {/* Thumb tip trim */}
          <path d="M 28 190 Q 33 200 38 208" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />

          {/* Ergonomic Knuckle flex seams */}
          <path d="M 85 115 Q 140 108 195 115" stroke="#363C44" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 90 130 Q 140 124 190 130" stroke="#363C44" strokeWidth="1.5" />

          {/* Center Logo Area (Adidas 3-bars icon) */}
          <g transform="translate(112, 142)">
            {/* Left Bar (Small) */}
            <path
              d="M 4 28 L 15 28 L 26 12 L 15 12 Z"
              fill={logoFill}
              stroke={logoStroke}
              strokeWidth={isWhiteLogo ? 0.5 : 1}
              opacity={isWhiteLogo ? 1 : 0.85}
            />
            {/* Center Bar (Medium) */}
            <path
              d="M 20 28 L 31 28 L 42 0 L 31 0 Z"
              fill={logoFill}
              stroke={logoStroke}
              strokeWidth={isWhiteLogo ? 0.5 : 1}
              opacity={isWhiteLogo ? 1 : 0.85}
            />
            {/* Right Bar (Large / Tallest) */}
            <path
              d="M 36 28 L 47 28 L 58 -10 L 47 -10 Z"
              fill={logoFill}
              stroke={logoStroke}
              strokeWidth={isWhiteLogo ? 0.5 : 1}
              opacity={isWhiteLogo ? 1 : 0.85}
            />
          </g>

          {/* Wrist Support Band & Strap */}
          <rect
            x="64"
            y="242"
            width="152"
            height="32"
            rx="6"
            fill={`url(#wrist-strap-${logoColor})`}
            stroke="#47505C"
            strokeWidth="2"
          />

          {/* Velcro Hook & Loop texture accent */}
          <line x1="72" y1="258" x2="198" y2="258" stroke="#383E47" strokeWidth="16" strokeDasharray="4 2" />

          {/* AEROREADY Label Tag at bottom */}
          <g transform="translate(126, 274)">
            <rect x="0" y="0" width="28" height="24" rx="3" fill="#1C1F24" stroke="#373D46" strokeWidth="1.5" />
            <text
              x="14"
              y="15"
              fill="#94A3B8"
              fontSize="6"
              fontWeight="bold"
              letterSpacing="0.8"
              textAnchor="middle"
              transform="rotate(90 14 15)"
            >
              AEROREADY
            </text>
          </g>

          {/* Bottom Pull loop */}
          <path
            d="M 132 298 C 132 308, 148 308, 148 298"
            stroke="#475569"
            strokeWidth="2.5"
            fill="none"
          />
        </g>
      ) : (
        /* PALM VIEW (Grip & Cushion Pads) */
        <g>
          {/* Main glove silhouette (Palm side) */}
          <path
            d="M 68 250 
               C 62 230, 58 190, 60 140
               C 62 105, 68 85, 75 70
               C 78 64, 95 64, 98 72
               C 102 85, 103 100, 105 108
               C 107 92, 110 60, 116 48
               C 120 40, 137 40, 140 48
               C 144 65, 145 92, 147 105
               C 150 90, 154 55, 160 44
               C 164 36, 180 36, 184 44
               C 188 62, 188 88, 188 108
               C 192 98, 196 74, 203 66
               C 207 60, 220 60, 224 68
               C 228 82, 225 118, 222 145
               C 220 180, 218 220, 212 250
               Z"
            fill={`url(#glove-body-${logoColor}-${view})`}
            stroke="#3F4752"
            strokeWidth="2.5"
          />

          {/* Suede Palm Cushion Pads (callus protection) */}
          {/* Upper knuckle bar pad */}
          <path
            d="M 80 120 C 80 115, 200 115, 200 120 L 195 142 C 195 146, 85 146, 85 142 Z"
            fill={`url(#palm-pad-${logoColor})`}
            stroke="#4A5360"
            strokeWidth="1.5"
          />
          {/* Perforations for ventilation on upper pad */}
          <circle cx="100" cy="130" r="1.5" fill="#1C1F24" />
          <circle cx="120" cy="130" r="1.5" fill="#1C1F24" />
          <circle cx="140" cy="130" r="1.5" fill="#1C1F24" />
          <circle cx="160" cy="130" r="1.5" fill="#1C1F24" />
          <circle cx="180" cy="130" r="1.5" fill="#1C1F24" />

          {/* Lower Palm main cushioned heel pads */}
          <path
            d="M 85 158 C 85 150, 135 152, 135 165 C 135 195, 95 210, 85 190 Z"
            fill={`url(#palm-pad-${logoColor})`}
            stroke="#4A5360"
            strokeWidth="1.5"
          />
          <path
            d="M 145 165 C 145 152, 195 150, 195 158 C 185 210, 145 195, 145 165 Z"
            fill={`url(#palm-pad-${logoColor})`}
            stroke="#4A5360"
            strokeWidth="1.5"
          />

          {/* Thumb reinforcement patch */}
          <path
            d="M 52 165 C 40 174, 34 185, 34 198 C 42 200, 55 190, 64 176 Z"
            fill={`url(#palm-pad-${logoColor})`}
            stroke="#4A5360"
            strokeWidth="1.5"
          />

          {/* Wrist band */}
          <rect
            x="64"
            y="242"
            width="152"
            height="32"
            rx="6"
            fill={`url(#wrist-strap-${logoColor})`}
            stroke="#47505C"
            strokeWidth="2"
          />
          {/* AEROREADY Tag */}
          <g transform="translate(126, 274)">
            <rect x="0" y="0" width="28" height="24" rx="3" fill="#1C1F24" stroke="#373D46" strokeWidth="1.5" />
            <text
              x="14"
              y="15"
              fill="#94A3B8"
              fontSize="6"
              fontWeight="bold"
              letterSpacing="0.8"
              textAnchor="middle"
              transform="rotate(90 14 15)"
            >
              AEROREADY
            </text>
          </g>
        </g>
      )}
    </svg>
  );
};

export const GloveShowcaseCard: React.FC = () => {
  const [selectedColor, setSelectedColor] = React.useState<'white' | 'black'>('white');
  const [activeView, setActiveView] = React.useState<'back' | 'palm'>('back');

  return (
    <div className="bg-white rounded-3xl border-2 border-[#D5E5F1] p-6 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
        <div>
          <span className="text-xs font-bold tracking-wider text-[#31516A] uppercase bg-[#E9F2F8] px-2.5 py-1 rounded-md">
            MISSION REWARD
          </span>
          <h3 className="text-lg font-bold text-[#2D3436] mt-1">
            아디다스 에센셜 헬스 장갑
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            통기성 AEROREADY 메쉬 & 손바닥 굳은살 방지 쿠셔닝 패드 탑재
          </p>
        </div>

        {/* View toggle button (등면 / 손바닥면) */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-medium">
          <button
            onClick={() => setActiveView('back')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'back'
                ? 'bg-white text-[#31516A] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            장갑 등면 (로고)
          </button>
          <button
            onClick={() => setActiveView('palm')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'palm'
                ? 'bg-white text-[#31516A] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            손바닥면 (쿠션패드)
          </button>
        </div>
      </div>

      {/* Two Gloves Side-by-Side (Matches uploaded 장갑 이미지.jpg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Option 1: White Logo (기본) */}
        <div
          onClick={() => setSelectedColor('white')}
          className={`cursor-pointer rounded-2xl p-4 transition-all border-2 relative flex flex-col items-center ${
            selectedColor === 'white'
              ? 'border-[#31516A] bg-[#F8FBFD] shadow-md ring-2 ring-[#95B8D1]/30'
              : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
          }`}
        >
          {/* Badge */}
          <div className="w-full flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#E9F2F8] text-[#31516A]">
              <span className="w-2 h-2 rounded-full bg-[#31516A]"></span>
              1. 화이트 (기본 발송)
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              우선 출고
            </span>
          </div>

          {/* Glove Graphic */}
          <div className="py-2 w-full flex items-center justify-center">
            <SingleGloveSvg logoColor="white" view={activeView} />
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm font-bold text-slate-800">화이트 로고 에디션</p>
            <p className="text-xs text-slate-500 mt-0.5">
              선명한 3-Bars 화이트 로고로 스포티하고 세련된 포인트
            </p>
          </div>
        </div>

        {/* Option 2: Black Logo (품절 시 대체) */}
        <div
          onClick={() => setSelectedColor('black')}
          className={`cursor-pointer rounded-2xl p-4 transition-all border-2 relative flex flex-col items-center ${
            selectedColor === 'black'
              ? 'border-[#31516A] bg-[#F8FBFD] shadow-md ring-2 ring-[#95B8D1]/30'
              : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
          }`}
        >
          {/* Badge */}
          <div className="w-full flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-200 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              2. 블랙 (품절 시 대체)
            </span>
            <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
              스텔스 에디션
            </span>
          </div>

          {/* Glove Graphic */}
          <div className="py-2 w-full flex items-center justify-center">
            <SingleGloveSvg logoColor="black" view={activeView} />
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm font-bold text-slate-800">블랙 로고 에디션</p>
            <p className="text-xs text-slate-500 mt-0.5">
              톤온톤 매트 블랙 로고로 심플하고 시크한 올블랙 무드
            </p>
          </div>
        </div>
      </div>

      {/* Product Highlight Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
        <div className="bg-[#F7F4EA] border border-[#E8DDB5] p-2.5 rounded-xl">
          <div className="font-bold text-[#5E5233]">AEROREADY 메쉬</div>
          <div className="text-[11px] text-[#7C6E4A] mt-0.5">쾌적한 땀 배출 & 통기성</div>
        </div>
        <div className="bg-[#F7F4EA] border border-[#E8DDB5] p-2.5 rounded-xl">
          <div className="font-bold text-[#5E5233]">팜 쿠셔닝 패드</div>
          <div className="text-[11px] text-[#7C6E4A] mt-0.5">굳은살 방지 & 덤벨 그립감</div>
        </div>
        <div className="bg-[#F7F4EA] border border-[#E8DDB5] p-2.5 rounded-xl">
          <div className="font-bold text-[#5E5233]">핑거 풀오프 탭</div>
          <div className="text-[11px] text-[#7C6E4A] mt-0.5">운동 후 간편한 탈착 고리</div>
        </div>
        <div className="bg-[#F7F4EA] border border-[#E8DDB5] p-2.5 rounded-xl">
          <div className="font-bold text-[#5E5233]">벨크로 손목 스트랩</div>
          <div className="text-[11px] text-[#7C6E4A] mt-0.5">밀착감 높은 사이즈 조절</div>
        </div>
      </div>

      {/* Notice Callout */}
      <div className="mt-4 p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-xl text-xs text-amber-900 flex items-start gap-2">
        <span className="text-amber-600 shrink-0 text-sm font-bold">ℹ️</span>
        <div>
          <span className="font-bold">색상 발송 안내:</span> 기본 색상은 <strong>1. 화이트 로고</strong>로 준비되어 있으나, 공급사 재고 및 사이즈별 수급 현황에 따라 부득이하게 <strong>2. 블랙 로고</strong>로 대체되어 발송될 수 있는 점 양해 부탁드립니다.
        </div>
      </div>
    </div>
  );
};
