import React from 'react';
import { SearchFilters } from '../components/SearchFilters';
import { JobGrid } from '../components/JobGrid';
import { useJobs } from '../hooks/useJobs';

export function Home() {
    const { filteredJobs, filters, handleFilterChange } = useJobs();

    return (
        <>
            <SearchFilters
                filters={filters}
                onFilterChange={handleFilterChange}
            />
            <JobGrid filteredJobs={filteredJobs} />
        </>
    );
}
