import React from 'react';
import { HelpCircle, Users } from 'lucide-react';

interface NotFoundCardProps {
  searchedName: string;
  onOpenRoster: () => void;
}

export const NotFoundCard: React.FC<NotFoundCardProps> = ({
  searchedName,
  onOpenRoster,
}) => {
  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 card-shadow text-center max-w-xl mx-auto space-y-5 animate-in fade-in zoom-in-95 duration-300">
      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-500">
        <HelpCircle className="w-6 h-6" />
      </div>

      <div className="space-y-1.5">
        <h3 className="text-xl font-black text-[#2D3436]">
          &lsquo;{searchedName}&rsquo; 님의 결과를 찾을 수 없습니다
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          2~3주차 주간 미션(10일간 3회 이상 운동 인증) 달성자 명단에 등록된 성함과 일치하지 않습니다.
        </p>
      </div>

      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-left text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-700">확인해 보세요:</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>성함에 오타나 앞뒤 공백(띄어쓰기)이 없는지 확인해 주세요.</li>
          <li>사내 등록된 실명(한글 이름 3자 등)으로 입력해 주세요.</li>
          <li>2~3주차 기간 내 3회 이상 인증을 완료하셨는지 확인해 주세요.</li>
        </ul>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onOpenRoster}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#31516A] hover:bg-[#253E52] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <Users className="w-4 h-4" />
          <span>전체 참가자 40명 명단 확인하기</span>
        </button>
      </div>
    </div>
  );
};
