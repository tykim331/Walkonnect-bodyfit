import React, { useState } from 'react';
import { X, Search, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { WINNERS, NON_WINNERS } from '../data/challengeData';

interface FullRosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectName: (name: string) => void;
}

export const FullRosterModal: React.FC<FullRosterModalProps> = ({
  isOpen,
  onClose,
  onSelectName,
}) => {
  const [tab, setTab] = useState<'all' | 'winner' | 'nonwinner'>('all');
  const [filterQuery, setFilterQuery] = useState('');

  if (!isOpen) return null;

  const winnersList = WINNERS.map((name) => ({ name, isWinner: true }));
  const nonWinnersList = NON_WINNERS.map((name) => ({ name, isWinner: false }));
  const combinedList = [...winnersList, ...nonWinnersList];

  const currentList =
    tab === 'winner'
      ? winnersList
      : tab === 'nonwinner'
      ? nonWinnersList
      : combinedList;

  const filtered = currentList.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.trim().toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl border-2 border-[#D5E5F1] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-[#F8FBFD]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#E9F2F8] border border-[#D5E5F1] flex items-center justify-center text-[#31516A]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#2D3436]">
                2~3주차 미션 완수 임직원 명단
              </h3>
              <p className="text-xs text-slate-500">
                10일간 3회 이상 인증 완료자 총 40명 (당첨자 20명 / 미선정 20명)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Tabs */}
        <div className="p-4 sm:p-5 border-b border-slate-100 space-y-3 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="명단에서 성함 빠르게 검색"
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#31516A] focus:bg-white transition-all font-semibold"
            />
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setTab('all')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                tab === 'all'
                  ? 'bg-white text-[#31516A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체 ({combinedList.length}명)
            </button>
            <button
              onClick={() => setTab('winner')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                tab === 'winner'
                  ? 'bg-white text-[#31516A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              리워드 당첨 ({winnersList.length}명)
            </button>
            <button
              onClick={() => setTab('nonwinner')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                tab === 'nonwinner'
                  ? 'bg-white text-[#31516A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              미션 달성 ({nonWinnersList.length}명)
            </button>
          </div>
        </div>

        {/* Participants Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              일치하는 성함이 없습니다.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {filtered.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onSelectName(item.name);
                    onClose();
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all hover:scale-102 active:scale-98 ${
                    item.isWinner
                      ? 'bg-emerald-50/60 border-emerald-200 hover:bg-emerald-100/70 hover:border-emerald-300'
                      : 'bg-slate-50/80 border-slate-200 hover:bg-[#E9F2F8] hover:border-[#95B8D1]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-[#2D3436] text-base">
                      {item.name}
                    </span>
                    {item.isWinner ? (
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </div>
                  <div className="text-[11px] font-bold">
                    {item.isWinner ? (
                      <span className="text-emerald-700">🎁 리워드 당첨</span>
                    ) : (
                      <span className="text-slate-500">미션 달성</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>이름을 클릭하면 바로 결과를 조회할 수 있습니다.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
