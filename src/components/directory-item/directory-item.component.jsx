import { Link } from "react-router-dom";
import "./directory-item.style.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
