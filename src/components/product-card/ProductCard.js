import React from "react";
import { Store } from "../../store/Store";

const ProductCardList = props => {
  const [isFavourite, setIsFavourite] = React.useState(false);

  const handlesetIsFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="product-card--detail">
      <div className="product-card--detail-img">
        <img
          src={props.imageUrl}
          alt={props.title}
          width={"100%"}
          onClick={() => {
            props.onClick(props.product);
          }}
        />
        <i
          className={`fa fa-heart${isFavourite ? "" : "-o"} favourite-icon`}
          onClick={handlesetIsFavourite}
        ></i>
      </div>
      <h4>{props.title}</h4>
    </div>
  );
};

const ProductCard = ({ onClick }) => {
  const { state } = React.useContext(Store);
  const [initProducts] = React.useState([0, 1, 2]);
  return (
    <div className="product-card--wrapper">
      <div className="product-card--list">
        {state.products.length > 0
          ? state.products.map((product, index) => (
              <ProductCardList {...product} product={product} onClick={onClick}/>
            ))
          : initProducts.map((product, index) => (
              <div className="product-card--detail">
                <div className="product-card--detail-img-skeleton"></div>
                <h4>Loading...</h4>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductCard;
