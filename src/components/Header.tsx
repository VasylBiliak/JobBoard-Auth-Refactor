import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAuth } from '../contexts/useAuth';
import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';
import { PostJobModal } from './modals/PostJobModal';
import { useJobs } from '../hooks/useJobs';

export function Header() {
  const { user, loading } = useAuth();
  const { addJob } = useJobs();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const handlePostJob = () => {
    setIsPostModalOpen(true);
  };

  return (
      <>
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Job Board
            </Link>
            <div className="flex items-center space-x-4">
              {loading ? (
                  <span className="text-gray-600 dark:text-gray-300">Loading...</span>
              ) : user ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 dark:text-white">{user.email}</span>
                    <Link
                        to="/login"
                        className="text-gray-600 dark:text-red-400 hover:text-gray-900 dark:hover:text-white transition-colors text-xs"
                    >
                      Sign Out
                    </Link>
                  </div>
              ) : (
                  <div className="flex items-center space-x-2">
                    <Link
                        to="/login"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs"
                    >
                      Sign In
                    </Link>
                  </div>
              )}
              <button
                  onClick={handlePostJob}
                  className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Plus className="w-3 h-3" />
                <span>Post Job</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <PostJobModal
            isOpen={isPostModalOpen}
            onClose={() => setIsPostModalOpen(false)}
            onJobPosted={addJob}
        />
      </>
  );
}
