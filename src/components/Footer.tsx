import React from 'react';
import { CHALLENGE_INFO } from '../data/challengeData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-[#E8DDB5]/80 bg-white/70 py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#31516A]">
          <span>WALKONNECT 시즌 II</span>
          <span className="text-slate-300">·</span>
          <span>BODY-FIT 근력 챌린지</span>
          <span className="text-slate-300">·</span>
          <span>주간 미션 리워드 결과 조회</span>
        </div>

        <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
          본 결과 페이지는 사내 임직원 대상 &lsquo;2026 Walkonnect BODY-FIT 근력 챌린지&rsquo; 주간 미션 달성 결과 및 리워드(아디다스 헬스장갑) 사이즈 조사를 위해 운영됩니다.
        </p>

        <div className="text-[11px] text-slate-400 font-medium">
          © 2026 Walkonnect BODY-FIT Challenge by {CHALLENGE_INFO.host}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
