import './../css/logements-card.css'; // Import the CSS file for styling

const LogementsCard = ({ id, title, cover }) => {
    return (
      <div className="logements-card" data-id={id}>
        <div className="card-cover">
          <img src={cover} alt={title} />
          <div className="card-content">
            {title}
          </div>
        </div>
      </div>
    );
  }

export default LogementsCard;