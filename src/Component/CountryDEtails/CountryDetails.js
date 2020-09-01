import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './CountryDetauils.css'

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({});
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
        
    }, []);
     const ditailsStyle = {
         margin: '20px auto', 
         padding: '20px', 
         border: '10px outset gray',
         width: '350px'
        }
    const { name, alpha2Code, callingCodes, capital, altSpellings,numericCode,nativeName,borders,timezones,area,flag } = country;
    return (
       
        <div style={ditailsStyle}>
            
            <h2> {countryName} country Details</h2>
            <p className="flage">
                <img src={flag} alt=""/></p>
            <h4>Name: {name}</h4>
            <p>alpha2Code: {alpha2Code}</p>
            <p>callingCodes{callingCodes}</p>
            <p>capital: {capital}</p>
            <p>altSpellings: {altSpellings}</p>
            <p>numericCode: {numericCode}</p>
            <p>nativeName: {nativeName}</p>
            <p>borders: {borders}</p>
            <p>timezones: {timezones}</p>
            <p>area: {area}</p>
            
        </div>
    );
};

export default CountryDetails;