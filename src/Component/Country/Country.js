import React from 'react';
import { useHistory } from 'react-router-dom';
const countryStyle = { 
    padding: "20px",
    margin: "20px auto",
    border: "1px solid gray",
    borderRadius: "20px",
    width: "300px",
    

}
const Country = (props) => {
    const { name, population, region } = props.country;
    const history = useHistory();
    const handelClick = (countryName) => {
        const url = `/country/${countryName}`
        history.push(url)
    }
    return (
        <div style={countryStyle}>
            <h2>Country <br /> Name:{name} </h2>
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
            <button onClick={() =>handelClick(name)}>Details-Here</button>
        </div>
    );
};

export default Country;