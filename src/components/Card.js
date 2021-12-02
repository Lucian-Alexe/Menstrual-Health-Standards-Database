import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendar,
  faTag,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ country, standardName, year, category, scope }) => {
  return (
    <>
      <h1>{country}</h1>
      <h2>{standardName}</h2>
      <h3>Scope: {scope}</h3>

      <span className="pill">
        <FontAwesomeIcon icon={faCalendar} /> Year: {year}
      </span>
      <span className="pill">
        <FontAwesomeIcon icon={faTag} /> Category: {category}
      </span>
    </>
  );
};

export default Card;
