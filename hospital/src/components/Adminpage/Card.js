import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserMd, faUserInjured, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function Card({ title, count, icon }) {
  let iconComponent;
  switch (icon) {
    case "🏢":
      iconComponent = <FontAwesomeIcon icon={faBuilding} />;
      break;
    case "👨‍⚕️":
      iconComponent = <FontAwesomeIcon icon={faUserMd} />;
      break;
    case "🧑‍🦽":
      iconComponent = <FontAwesomeIcon icon={faUserInjured} />;
      break;
    case "📅":
      iconComponent = <FontAwesomeIcon icon={faCalendarAlt} />;
      break;
    default:
      iconComponent = <FontAwesomeIcon icon={faBuilding} />;
  }

  return (
    <div className="card">
      <div className="card-icon">{iconComponent}</div>
      <div className="card-title">{title}</div>
      <div className="card-count">{count}</div>
    </div>
  );
}

export default Card;