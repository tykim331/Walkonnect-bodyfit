import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MissionBanner } from './components/MissionBanner';
import { SearchSection } from './components/SearchSection';
import { WinnerResultCard } from './components/WinnerResultCard';
import { NonWinnerResultCard } from './components/NonWinnerResultCard';
import { NotFoundCard } from './components/NotFoundCard';
import { FullRosterModal } from './components/FullRosterModal';
import { Footer } from './components/Footer';
import { WINNERS, NON_WINNERS } from './data/challengeData';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [searchedName, setSearchedName] = useState<string>('');
  const [isRosterOpen, setIsRosterOpen] = useState<boolean>(false);

  // Read URL search params on initial load (e.g. ?name=김경모)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialName = params.get('name');
    if (initialName) {
      setSearchedName(initialName.trim());
    }
  }, []);

  const handleSearch = (name: string) => {
    const trimmed = name.trim();
    setSearchedName(trimmed);
    // Update URL query parameter without full reload for easy sharing
    const url = new URL(window.location.href);
    if (trimmed) {
      url.searchParams.set('name', trimmed);
    } else {
      url.searchParams.delete('name');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const handleReset = () => {
    handleSearch('');
  };

  // Determine participant status
  const normalizedQuery = searchedName.trim();
  const isSearched = normalizedQuery.length > 0;
  const isWinner = isSearched && WINNERS.includes(normalizedQuery);
  const isNonWinner = isSearched && NON_WINNERS.includes(normalizedQuery);
  const isNotFound = isSearched && !isWinner && !isNonWinner;

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EA] selection:bg-[#95B8D1] selection:text-white">
      {/* Sticky Brand Header */}
      <Header onOpenRoster={() => setIsRosterOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16 space-y-8 sm:space-y-10">
        {/* Mission Summary Banner */}
        <MissionBanner />

        {/* Search Bar Section */}
        <section className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-[#2D3436]">
              미션 리워드 당첨 결과 확인
            </h3>
          </div>

          <SearchSection onSearch={handleSearch} currentSearch={searchedName} />
        </section>

        {/* Dynamic Result Area (Only shown after search) */}
        <section className="pt-2">
          {/* 1. Winner Result (Contains Reward Photos, Specs & Size Guide) */}
          {isWinner && (
            <div className="space-y-4">
              <div className="flex justify-end">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>다른 이름 검색하기</span>
                </button>
              </div>
              <WinnerResultCard name={normalizedQuery} />
            </div>
          )}

          {/* 2. Non-Winner Result (Only Comforting & Encouraging Message) */}
          {isNonWinner && (
            <div className="space-y-4">
              <div className="flex justify-end">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>다른 이름 검색하기</span>
                </button>
              </div>
              <NonWinnerResultCard name={normalizedQuery} />
            </div>
          )}

          {/* 3. Not Found Result */}
          {isNotFound && (
            <div className="space-y-4">
              <div className="flex justify-end">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>다시 검색하기</span>
                </button>
              </div>
              <NotFoundCard
                searchedName={normalizedQuery}
                onOpenRoster={() => setIsRosterOpen(true)}
              />
            </div>
          )}
        </section>
      </main>

      {/* Full Roster Modal */}
      <FullRosterModal
        isOpen={isRosterOpen}
        onClose={() => setIsRosterOpen(false)}
        onSelectName={handleSearch}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
