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
          Generate and run python scripts from your command line.
        </h2>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">pip install verbomate</code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">verbomate -key <Link href="https://platform.openai.com/api-keys" target="_blank">OPENAI_API_KEY</Link></code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">verbomate "kill port 3000"</code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">verbomate "create hello.txt"</code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">verbomate "append 01_, 02_, 03_ etc to all files in this directory"</code>
      </main>
    </div>
  )
}
