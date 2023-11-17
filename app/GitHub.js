import Link from 'next/link'

export default function GitHub() {
    return (
        <Link className="text-xs md:text-sm mt-4 md:mt-6 block bg-gray-300 hover:bg-gray-400 text-white font-bold py-1 px-2 rounded max-w-xs md:max-w-none w-full text-center h-min iw" href="https://github.com/gordbegli/verbomate" target="_blank" passHref>
            Verify I'm not a lunatic by looking at the code.
        </Link>
    )
}