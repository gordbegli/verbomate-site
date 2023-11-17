import Link from 'next/link'

export default function Home() {
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
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">1.<span className="bg-orange-600 bg-opacity- text-white p-1 rounded">pip install verbomate</span></code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">2.<span className="bg-orange-600 bg-opacity- text-white p-1 rounded" >verbomate -key <Link href="https://platform.openai.com/api-keys" target="_blank">OPEN_AI_KEY</Link></span></code>
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">3.<span className="bg-orange-600 bg-opacity- text-white p-1 rounded" >verbomate "create hello_world.txt"</span></code>

        <div className="mt-6 px-4 w-full">
          <Link className="block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full text-center" href="https://github.com/gordbegli/verbomate" target="_blank" passHref>
            Verify I'm not a lunatic by looking at the code.
          </Link>
        </div>
      </main>
    </div>
  )
}
