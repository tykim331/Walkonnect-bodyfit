import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { CHALLENGE_INFO } from '../data/challengeData';

interface HeaderProps {
  onOpenRoster: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRoster }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EA]/90 backdrop-blur-md border-b border-[#E8DDB5]/70 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E9F2F8] border border-[#D5E5F1] flex items-center justify-center shadow-xs">
            <span className="text-xl">🏋️‍♂️</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-black tracking-wider text-[#31516A] uppercase">
                WALKONNECT
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#8F7B4A] bg-[#F6F1DE] px-2 py-0.5 rounded-full border border-[#EEE3C3]">
                시즌 II
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-[#2D3436] tracking-tight">
              BODY-FIT 근력 챌린지
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Entire Roster Modal Trigger */}
          <button
            onClick={onOpenRoster}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#31516A] bg-white border border-[#D5E5F1] hover:bg-[#E9F2F8] transition-all shadow-xs"
            title="참여자 명단 전체 보기"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">전체 명단</span>
            <span className="sm:hidden">명단</span>
          </button>

          {/* Link to Official Challenge Introduction Page */}
          <a
            href={CHALLENGE_INFO.mainChallengeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#31516A] hover:bg-[#253E52] transition-all shadow-xs"
          >
            <span>챌린지 소개</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
