import { useState, useEffect } from 'react';
import { Job } from '../types/Job';
import { FilterState } from '../types/FilterState';
import { mockJobs } from '../data/mockJobs';
import { filterJobs } from '../utils/filterJobs';

export const useJobs = () => {
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
    const [filters, setFilters] = useState<FilterState>({
        search: '',
        location: '',
        jobType: '',
        experience: ''
    });

    useEffect(() => {
        setFilteredJobs(filterJobs(mockJobs, filters));
    }, [filters]);

    const handleFilterChange = (newFilters: FilterState) => {
        setFilters(newFilters);
    };

    return {
        filteredJobs,
        filters,
        handleFilterChange,
    };
};
