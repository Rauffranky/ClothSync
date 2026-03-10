import React from "react";

export function Icon({ name, className }) {
    const icons = {
        search: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
            </svg>
        ),
        send: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
        ),
        plus: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={className}
            >
                <path strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
        ),
        close: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={className}
            >
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
        ),
        dotmenu: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
            </svg>
        ),
        menu: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={className}
            >
                <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        ),
        pdf: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1v5h5" />
                <text
                    x="7"
                    y="19"
                    fontSize="8"
                    fill="currentColor"
                    fontFamily="ui-sans-serif, system-ui"
                >
                    PDF
                </text>
            </svg>
        ),
        emoji: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={className}
            >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                    d="M8 14s1.5 2 4 2 4-2 4-2"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle cx="9" cy="9" r="1" fill="currentColor" />
                <circle cx="15" cy="9" r="1" fill="currentColor" />
            </svg>
        ),
        microphone: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={className}
            >
                <path
                    d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
        video: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
        ),
        word: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
                <text x="7" y="19" fontSize="6" fill="white" fontWeight="bold">DOCX</text>
            </svg>
        ),
        zip: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 6h-2v2h2v-2zm0-2h-2v2h2v-2zm0-2h-2v2h2V8z" />
            </svg>
        ),
        trash: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
        ),
        file: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2v7h7" />
            </svg>
        ),
        calendar: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        clock: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        check: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
                <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };
    return icons[name] || null;
}
