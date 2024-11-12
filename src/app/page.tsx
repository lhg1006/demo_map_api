'use client';

import { useState } from 'react';
import KakaoMap from "@/components/KakaoMap";
import SDK_KakaoMap from '@/components/SDK_KakaoMap';

export default function Home() {
  const [inputValue, setInputValue] = useState("서울특별시 강남");
  const [location, setLocation] = useState(inputValue);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  return (
    <main className="w-full min-h-screen p-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="위치를 입력하세요" 
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 border">검색</button>
      </form>
      <KakaoMap location={location} />
      <SDK_KakaoMap />
    </main>
  );
}
