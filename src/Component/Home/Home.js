import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
        .then(data => setCountrys(data))
    },[])
    return (
        <div>
            <h1>How many Country: {countrys.length}</h1>
            {
                countrys.map(country =><Country country={country} key={country.numericCode}></Country>)
            }
        </div>
    );
};

export default Home;