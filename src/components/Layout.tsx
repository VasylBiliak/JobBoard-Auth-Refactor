import React from 'react';
import {Header} from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="container mx-auto px-6 py-8 max-w-6xl">
            {children}
        </main>
        </>


    );
}
