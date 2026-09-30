import React from 'react';
import { Calendar, Award, CheckCircle2 } from 'lucide-react';
import { CHALLENGE_INFO } from '../data/challengeData';

export const MissionBanner: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl border-2 border-[#E8DDB5] p-6 sm:p-8 card-shadow relative overflow-hidden">
      {/* Decorative accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#95B8D1] via-[#E8DDB5] to-[#95B8D1]" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black tracking-wider text-[#31516A] uppercase bg-[#E9F2F8] px-3 py-1 rounded-full border border-[#D5E5F1]">
              주간 미션 결과 발표
            </span>
            <span className="text-xs font-bold text-[#8F7B4A] bg-[#F6F1DE] px-2.5 py-1 rounded-full border border-[#EEE3C3]">
              2 ~ 3주차
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3436] tracking-tight">
            &ldquo;10일 동안, 3회 이상 운동 후 인증하기!&rdquo;
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            근력 강화와 지속 가능한 운동 습관 형성을 위한 &apos;BODY-FIT 근력 챌린지 2~3주차 주간 미션&apos;이 종료 되었습니다.
            참가자 여러분의 열정적인 참여에 감사드리며, 당첨 결과를 확인해 보세요!
          </p>
        </div>

        {/* Reward Quick Preview Pill */}
        <div className="shrink-0 bg-[#F7F4EA] border-2 border-[#E8DDB5] rounded-2xl p-4 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left min-w-[240px]">
          <span className="text-[11px] font-bold text-[#8F7B4A] uppercase tracking-wide">
            미션 달성 리워드
          </span>
          <div className="text-base font-extrabold text-[#2D3436] mt-0.5">
            아디다스 에센셜 헬스 장갑
          </div>
          <div className="text-xs font-semibold text-[#31516A] mt-1 bg-white px-2.5 py-0.5 rounded-lg border border-[#D5E5F1] shadow-2xs">
            달성자 中 20명 선정 🎁
          </div>
        </div>
      </div>

      {/* 3 Detail Metric Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8FBFD] border border-[#D5E5F1]">
          <div className="w-10 h-10 rounded-xl bg-[#E9F2F8] flex items-center justify-center shrink-0 text-[#31516A]">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500">미션 인정 기간</div>
            <div className="text-xs font-black text-[#2D3436]">9/18(금) 저녁 ~ 9/27(일)</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8FBFD] border border-[#D5E5F1]">
          <div className="w-10 h-10 rounded-xl bg-[#E9F2F8] flex items-center justify-center shrink-0 text-[#31516A]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500">미션 달성 기준</div>
            <div className="text-xs font-black text-[#2D3436]">기간 내 총 3회 이상 인증 (1일 1회)</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8FBFD] border border-[#D5E5F1]">
          <div className="w-10 h-10 rounded-xl bg-[#E9F2F8] flex items-center justify-center shrink-0 text-[#31516A]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-500">리워드</div>
            <div className="text-xs font-black text-[#2D3436]">미션 달성자 중 20명 선정</div>
          </div>
        </div>
      </div>
    </section>
  );
};
