'use client';
import { useEffect, useState, Suspense } from 'react';
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
      
        const params = new URLSearchParams({
          Make: brandSelection || '',
          Model: modelSelection || '',
          YearFrom: yearOf ? parseInt(yearOf.split('-')[0], 10).toString() : '',
          YearTo: yearOf ? parseInt(yearOf.split('-')[1], 10).toString() : '',
          OdometerMin: odo ? parseInt(odo.split('-')[0].replace('K', '000'), 10).toString() : '',
          OdometerMax: odo ? parseInt(odo.split('-')[1].replace('K', '000'), 10).toString() : '',
        });
      
        fetch(`/api/lots?${params}`)
          .then(response => response.json())
          .then(data => {
            setResults(data.data);
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

const SearchPageWrapper = () => (
    <Suspense fallback={<div className='text-white'>Loading search data...</div>}>
        <SearchPage />
    </Suspense>
);

export default SearchPageWrapper;
