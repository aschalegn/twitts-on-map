import React, { useState, useEffect } from 'react'
import { getTrends, getTweetsByTrend } from '../api/trends';
import Map from '../Map';

export default function Trends({ center }) {
    const [trends, setTrends] = useState([]);
    const [byTrend, setByTrend] = useState([]);
    useEffect(() => {
        getTrends()
            .then(trends => {
               setTrends(trends)
            });
        getTweetsByTrend("israel").then(res => {
            const { statuses } = res;
            setByTrend(statuses);
        });
    }, []);

    return (
        <div>
            <Map center={center} tweets={byTrend} />
            <ul>
                {trends.map(trend =>
                    <li key={trend.name}>#{trend.name}</li>
                )}
            </ul>
        </div>
    )
}
