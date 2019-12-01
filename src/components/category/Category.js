import React from "react";
import { Store } from "../../store/Store";

const CategoryCard = props => {
  return (
    <div className="category-card">
      <div className="category-card--image">
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

const Category = () => {
  const [initCategory] = React.useState([0, 1, 2, 3, 4]);
  const { state } = React.useContext(Store);
  return (
    <div className="category-card--container">
      {state.category.length > 0 ? (
        <div className="category-card--wrapper">
          {state.category.map((item, index) => (
            <CategoryCard {...item} key={index} />
          ))}
        </div>
      ) : (
        <div className="category-card--wrapper">
          {initCategory.map((item, index) => (
            <div className="category-card">
              <div className="category-card--image-skeleton"></div>
              <p>Loading...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
