import React from "react";
import { Store } from "../store/Store";

// Components
import Header from "../components/header/Header";

const SearchProduct = props => {
  const { state } = React.useContext(Store);
  const [searchProduct, setSearchProduct] = React.useState([]);

  const navigateBack = () => {
    props.history.goBack();
  };

  const navigateToProductDetail = item => {
    props.history.push("/product/detail", {
      item
    });
  };

  const onSearch = value => {
    const filteredProduct = state.products.filter(item =>
      item.title.toLowerCase().match(value.toLowerCase())
    );
    setSearchProduct(filteredProduct);
  };

  return (
    <React.Fragment>
      <Header navigateBack={navigateBack} isBack onSearch={onSearch} />
      <div className="search-product">
        <div className="search-product-list">
          {searchProduct.map((product, index) => (
            <div
              className="search-product-list-card"
              key={index}
              onClick={() => {
                navigateToProductDetail(product);
              }}
            >
              <div className="search-product-list-card-image">
                <img
                  src={product.imageUrl}
                  alt={product.titme}
                  width={60}
                  height={60}
                />
              </div>
              <div className="">
                <h5>{product.title}</h5>
                <h6>{product.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchProduct;
