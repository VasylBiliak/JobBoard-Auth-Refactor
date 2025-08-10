import React from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const { user, loading, signInWithGoogle, signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate('/');
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="text-gray-600 dark:text-gray-300">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-full max-w-md shadow-lg relative">
                <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    ← Back
                </button>
                {user ? (
                    <div className="text-center">
                        <p className="text-gray-900 dark:text-white mb-4">
                            Do you want to sign out?
                        </p>
                        <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Sign in with your Google account
                        </p>
                        <button
                            onClick={handleSignIn}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Sign in with Google
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
