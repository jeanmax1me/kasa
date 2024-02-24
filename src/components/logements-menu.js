import React from 'react'


import './../css/logements-menu.css'; // Import the CSS file for styling
import LogementsCard from './logements-card'; // Import the LogementsCard component

const LogementsMenu = () => {
  return (
    <div className="logements-menu">
      <h2>Featured Listings</h2>
      <div className="grid-container">
        {/* Render multiple LogementsCard components */}
        <LogementsCard />
        <LogementsCard />
        <LogementsCard />
        <LogementsCard />
        <LogementsCard />
        <LogementsCard />
      </div>
    </div>
  );
}

export default LogementsMenu;