import React, { useState, useEffect } from 'react'
import { getTrendsByLang } from '../../api/trends'
import Map from '../../Map';

export default function ByLang({center}) {
    const [trends, setTrends] = useState([]);
    useEffect(() => {
        getTrendsByLang()
            .then(trends => setTrends(trends));
    }, []);

    return (
        <div>
            <Map center={center} />
            <ul>
                {/* {trends.map(trend =>
                    <li>{trend.name}</li>
                )} */}
            </ul>
        </div>
    )
}
