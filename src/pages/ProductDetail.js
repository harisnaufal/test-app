import React from "react";
import { Store } from "../store/Store";
import Actions from "../actions/Actions";

const ProductDetail = props => {
  const { state, dispatch } = React.useContext(Store);
  const [isFavourite, setIsFavourite] = React.useState(false);
  const { location } = props;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateBack = () => {
    props.history.goBack();
  };

  const addToPurchaseHistory = item => {
    const currentPurchaseHistory = [...state.purchaseHistory];
    currentPurchaseHistory.push(item);
    dispatch({
      type: Actions.ADD_TO_PURCHASE_HISTORY,
      payload: currentPurchaseHistory
    });
    props.history.push("/profile");
  };

  const handlesetIsFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <React.Fragment>
      <div className="back-button">
        <i
          class="fa fa-angle-left fa-2x"
          aria-hidden="true"
          onClick={navigateBack}
        ></i>
        <h4>Product Detail</h4>
      </div>
      <div className="product-detail">
        <img
          src={location.state.item.imageUrl}
          alt={location.state.item.title}
          width="100%"
        />
        <div className="product-detail--title">
          <h2>Product Detail {location.state.item.title}</h2>
          <div className="product-detail--title-favourite">
            <i
              className={`fa fa-heart${isFavourite ? "" : "-o"} fa-2x favourite-icon`}
              onClick={handlesetIsFavourite}
            ></i>
          </div>
        </div>
        <p>{location.state.item.description}</p>
        <div className="product-detail--action">
          <h5>{location.state.item.price}</h5>
          <button
            onClick={() => {
              addToPurchaseHistory(location.state.item);
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
