/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U7ZepJmC8Hv
 */
export default function Component() {
    return (
        <div className="w-80 md:w-96 h-64 bg-black rounded-lg overflow-hidden shadow-lg mt-7 md:mt-0">
            <header className="flex items-center justify-between bg-gray-800 text-white px-3 py-2 rounded-t-lg">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
            </header>
            <div className="ml-3 mt-3">
                <div className="text-white font-mono text-xs md:text-sm p-0">$ verbomate "create hello_world.txt"</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">------------------------</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">START OF SCRIPT</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">with open('hello_world.txt', 'w') as file:</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">&nbsp;&nbsp;file.write('Hello, World!')</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">END OF SCRIPT</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">------------------------</div>
                <div className="text-white font-mono text-xs md:text-sm p-0">$</div>
            </div>
        </div>
    )
}

