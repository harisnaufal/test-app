import React from "react";
import { Store } from "../store/Store";
import Actions from "../actions/Actions";
import { fetchProducts } from "../middleware/Api";

// Components
import BottomNavigation from "../components/navigation/BottomNavigation";
import Category from "../components/category/Category";
import ProductCard from "../components/product-card/ProductCard";
import Header from "../components/header/Header";

const Dashboard = props => {
  const { dispatch } = React.useContext(Store);

  React.useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      const payload = {
        category: [...products[0].data.category],
        products: [...products[0].data.productPromo]
      };
      return dispatch({
        type: Actions.FETCH_PRODUCTS,
        payload
      });
    };
    getProducts();
  }, [dispatch]);

  const navigateToProductDetail = item => {
    props.history.push("/product/detail", {
      item
    });
  };

  const navigateToSearch = item => {
    props.history.push("/product/search");
  };

  return (
    <div className="dashboard">
      <Header navigateToSearch={navigateToSearch}/>
      <Category />
      <ProductCard onClick={navigateToProductDetail} />
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
