"use client";

import Welcome from '@/components/Welcome';
import DataDisplay from '@/components/DataDisplay';
import '../styles/globals.css';

export default function Home() {
  return (
    <main className="main-content">
      <div className="welcome w-full">
        <Welcome />
      </div>
      <div className='data-display w-full'>
        <DataDisplay />
      </div>
    </main>
  );
}
