import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (name: string) => void;
  currentSearch: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, currentSearch }) => {
  const [query, setQuery] = useState(currentSearch);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(currentSearch);
  }, [currentSearch]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search Input Box */}
      <form onSubmit={handleFormSubmit} className="relative">
        <div className="relative flex items-center bg-white rounded-2xl sm:rounded-3xl border-2 border-[#95B8D1] shadow-md focus-within:ring-4 focus-within:ring-[#95B8D1]/30 transition-all p-1.5 sm:p-2">
          <div className="pl-3.5 pr-2 text-[#31516A]">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="참가자 성함을 입력해 주세요"
            className="w-full py-2.5 sm:py-3.5 px-2 text-base sm:text-lg font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent"
          />

          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              title="검색어 지우기"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <button
            type="submit"
            className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#31516A] hover:bg-[#253E52] text-white text-sm sm:text-base font-black transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <span>결과 조회</span>
          </button>
        </div>
      </form>
    </div>
  );
};
