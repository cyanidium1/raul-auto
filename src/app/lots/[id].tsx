import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const LotDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [lot, setLot] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`http://91.228.56.250:7246/api/auction/lots/${id}`, {
                headers: {
                    'accept': 'application/json',
                    'Bot-Token': 'Qi7nffIhoI6sHHzvyXqwRFWExPxKMxL',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setLot(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching lot data:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!lot) {
        return <div>Lot not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{lot.year} {lot.make} {lot.model}</h1>
            <div className="flex gap-4">
                <div className="w-1/2">
                    <Image
                        src={lot.images[0] || '/default-car-image.png'}
                        alt={lot.model}
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="w-1/2">
                    <p className="text-xl"><strong>Engine:</strong> {lot.engine}</p>
                    <p className="text-xl"><strong>Fuel:</strong> {lot.fuel}</p>
                    <p className="text-xl"><strong>Odometer:</strong> {lot.odometer} mi</p>
                    <p className="text-xl"><strong>Damage:</strong> {lot.damage}</p>
                    <p className="text-xl"><strong>City:</strong> {lot.city}</p>
                </div>
            </div>
        </div>
    );
};

export default LotDetails;
