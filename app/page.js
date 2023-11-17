'use client'
import Link from 'next/link';
import { useState } from 'react';
import Command from './Command';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Resets the copied state after 2 seconds
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <main className='max-w-md flex flex-col min-w-fit'>
        <h1 className="-ml-2 mb-0 pb-0 px-4 text-left font-black" style={{ fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)" }}>
          <span className="mb-0 pb-0 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            Verbomate
          </span>
        </h1>
        <h2 className="-mt-5 pt-0 px-4 text-left text-lg font-normal text-gray-400">
          Run LLM generated scripts in CLI
        </h2>
        <Command index={1} text={'pip install verbomate'} />
        <Command index={2} text={'verbomate -key YOUR_OPEN_AI_KEY'} />
        <Command index={3} text={'verbomate "create hello_world.txt"'} />
        <div className="mt-6 px-4 w-full">
          <Link className="block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full text-center" href="https://github.com/gordbegli/verbomate" target="_blank" passHref>
            Verify I'm not a lunatic by looking at the code.
          </Link>
        </div>
      </main>
    </div>
  )
}
