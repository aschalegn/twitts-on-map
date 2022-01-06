import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map({ center, tweets }) {
    const adressToLonLang = async adress => {
        const lanlog = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=${process.env.REACT_APP_GOOGLEMAP_API}`)
        const obj = await lanlog.json();
        console.log(obj);
    }

    return (
        <div className="map">
            <MapContainer
                id="map"
                center={center}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[32.0468717, 34.7632573]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {tweets.map(tweet => {
                    // console.log(tweet.user.location);
                    { adressToLonLang(tweet.user.location ? tweet.user.location : '') }
                    // return (<Marker positiotweet.user.locationn={tweet.user.location ? tweet.user.location : ''}> </Marker>)
                })}
            </MapContainer>
        </div>
    )
}