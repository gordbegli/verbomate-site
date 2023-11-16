import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <main className='w-full max-w-md flex flex-col'>
        <h1 className="px-4 text-left font-black" style={{ fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)" }}>
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            Verbomate
          </span>
        </h1>
        <h2 className="mt-6 px-4 text-left text-lg font-normal text-gray-400">
          Generate and run python from terminal.
        </h2>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">pip install verbomate</code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">verbomate -key <Link href="https://platform.openai.com/api-keys" target="_blank">OPEN_AI_git KEY</Link></code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">verbomate "create hello_world.txt"</code>
        
        <div className="mt-6 px-4">
          <Link className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" href="https://github.com/gordbegli/verbomate" target="_blank" passHref>
            View on GitHub
          </Link>
        </div>
      </main>
    </div>
  )
}
