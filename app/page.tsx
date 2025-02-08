"use client";

import Welcome from '@/components/Welcome';
import '../styles/globals.css';

export default function Home() {
  return (
    <main className="main-content">
      <div className="welcome w-full">
        <Welcome />
      </div>
    </main>
  );
}
