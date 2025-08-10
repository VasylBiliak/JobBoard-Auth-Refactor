import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
                        <AppRoutes />
                    </div>
            </AuthProvider>
        </ThemeProvider>
    );
}
