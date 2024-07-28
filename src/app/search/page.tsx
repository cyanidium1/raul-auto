'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchResults from '@/components/Search/SearchResults';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const brandSelection = searchParams.get('brandSelection');
        const modelSelection = searchParams.get('modelSelection');
        const yearOf = searchParams.get('yearOf');
        const odo = searchParams.get('odo');

        const queryParams = {
            Make: brandSelection || '',
            Model: modelSelection || '',
            YearFrom: yearOf ? parseInt(yearOf.split('-')[0], 10).toString() : '',
            YearTo: yearOf ? parseInt(yearOf.split('-')[1], 10).toString() : '',
            OdometerMin: odo ? parseInt(odo.split('-')[0].replace('K', '000'), 10).toString() : '',
            OdometerMax: odo ? parseInt(odo.split('-')[1].replace('K', '000'), 10).toString() : '',
        };

        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(queryParams)) {
            if (value) params.append(key, value);
        }

        fetch(`http://91.228.56.250:7246/api/auction/lots?${params}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Bot-Token': 'Qi7nffIhoI6sHHzvyXqwRFWExPxKMxL'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                if (Array.isArray(data.data)) {
                    setResults(data.data);
                } else {
                    setError('Unexpected data format.');
                    setResults([]);
                }
            })
            .catch(error => {
                setError(`Error fetching data: ${error.message}`);
                setResults([]);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [searchParams]);

    if (loading) {
        return <div className='text-white'>Loading...</div>;
    }

    if (error) {
        return <div className='text-white'>Error: {error}</div>;
    }

    return (
        <div className='text-white'>
            <SearchResults orders={results} />
        </div>
    );
};

export default SearchPage;
