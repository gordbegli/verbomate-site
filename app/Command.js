'use client'
import { useState, useEffect } from 'react';

export default function Command({ index, text }) {
    const [copied, setCopied] = useState(false);
    const [copiedText, setCopiedText] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }, []);

    const handleCopy = (textToCopy) => {
        if (isMobile) return
        navigator.clipboard.writeText(textToCopy);
        setCopiedText(textToCopy);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000); // Resets the copied state after 2 seconds
    };

    return (
        <code className="mt-6 px-4 text-left text-sm font-mono text-gray-400">
            {index}.
            <span
                className="bg-orange-600 hover:bg-orange-700 text-white p-1 rounded cursor-pointer text-xs md:text-sm"
                onClick={() => handleCopy(text)} // Corrected this line
            >
                {text}
            </span>
            {copied && <span className="text-gray-400 ml-2">Copied!</span>}
        </code>
    );
}
