import Link from 'next/link';
import Command from './Command';
import Terminal from './Terminal';
import GitHub from './GitHub';

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center md:items-stretch w-full max-w-[50rem]"> {/* This container will encompass everything */}
        
        {/* Main Content and Terminal Container */}
        <div className="flex flex-col md:flex-row justify-between"> 
          <main className='w-full md:w-1/2 flex flex-col min-w-fit'>
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
          </main>
          <Terminal className='w-full md:w-1/2 mt-4 mb-4 md:mt-0 md:mb-0' /> {/* Ensuring Terminal takes half width on medium screens */}
        </div>
        <GitHub />
      </div>
    </div>
  )
}
