import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CountryDetails = () => {
    const { countryName } = useParams();
    // const [country, setCountry] = useState({});
    // const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setCountry(data))
        
    // },[]);
    return (
        <div>
            <h2>This is country Details {countryName}</h2>
            
            {/* <p>Name: {country.name}</p> */}
        </div>
    );
};

export default CountryDetails;