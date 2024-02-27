import React from 'react';
import "./../css/logements-details.css"
import Collapse from './collapse';

const LogementsDetails = ({ logement }) => {
    // Destructure properties from logement object
    const { title, description, host, rating, location, equipments, tags } = logement;

    return (
        <div className="logement-details">
            <div className="logement-infos">
                <h2>{title}</h2>
                <p>{location}</p>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="logement-host-and-rating">
                <div className="logement-host">
                    <p>Host: {host.name}</p>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="#C4C4C4" />
                    </svg>
                </div>
                <p>Rating: {rating}</p>
            </div>

            <p>----------------------------------------</p>
            <div className="logement-collapses">
                <Collapse title="Description" content={description} />
                <Collapse title="Equipments" content={equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))} />
            </div>
        </div>
    );
};

export default LogementsDetails;
