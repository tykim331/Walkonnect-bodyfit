import React from 'react';
import { HeartHandshake } from 'lucide-react';

interface NonWinnerResultCardProps {
  name: string;
}

export const NonWinnerResultCard: React.FC<NonWinnerResultCardProps> = ({ name }) => {
  return (
    <div className="w-full space-y-6 animate-in fade-in zoom-in-95 duration-500">
      {/* Warm Empathy & Encouragement Main Card */}
      <div className="bg-white rounded-3xl border-2 border-[#E8DDB5] p-6 sm:p-10 card-shadow relative overflow-hidden">
        {/* Top subtle warm banner bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E8DDB5]" />

        <div className="max-w-2xl mx-auto text-center space-y-5">
          {/* Encouragement Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F6F1DE] border border-[#EEE3C3] text-[#8F7B4A] shadow-xs">
            <HeartHandshake className="w-7 h-7" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#2D3436] tracking-tight">
              {name} 님, 정말 수고 많으셨습니다! 💪
            </h2>
          </div>

          {/* Warm Comforting Message */}
          <div className="p-5 sm:p-6 bg-[#FFFDF7] rounded-2xl border-2 border-[#EEE3C3] text-left space-y-3">
            <p className="text-base text-slate-800 font-bold leading-relaxed">
              아쉽게도 이번 2~3주차 주간 미션 리워드 추첨에는 선정되지 못하셨습니다.
            </p>
            <div className="h-px bg-[#EEE3C3]" />
            <p className="text-sm text-slate-700 leading-relaxed">
              하지만 바쁜 일상 속에서도 <strong>10일 동안 3회 이상 땀 흘리며 달성하신 소중한 운동 기록과 건강한 근력 습관</strong>은 그 어떤 리워드보다 훨씬 값진 최고의 성과입니다.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              지금처럼 꾸준히 운동을 이어가신다면, 챌린지가 끝날 무렵 훨씬 더 단단해진 건강과 활력을 느끼실 수 있을 것입니다. 남은 챌린지 일정 동안에도 부상 없이 멋진 변화를 만들어가시길 진심으로 응원합니다! 🔥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
