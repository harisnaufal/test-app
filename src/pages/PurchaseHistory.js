import React from "react";
import { Store } from "../store/Store";

const PurchaseHistory = props => {
  const { state } = React.useContext(Store);

  const navigateBack = () => {
    props.history.goBack();
  };

  const navigateToProductDetail = item => {
    props.history.push("/product/detail", {
      item
    });
  };

  return (
    <React.Fragment>
      <div className="back-button">
        <i
          class="fa fa-angle-left fa-2x"
          aria-hidden="true"
          onClick={navigateBack}
        ></i>
        <h4>Purchase History</h4>
      </div>
      <div className="purchase-history">
        <div className="purchase-history-list">
          {state.purchaseHistory.map((product, index) => (
            <div
              className="purchase-history-list-card"
              key={index}
              onClick={() => {
                navigateToProductDetail(product);
              }}
            >
              <div className="purchase-history-list-card-image">
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

export default PurchaseHistory;
