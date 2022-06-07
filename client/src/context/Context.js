import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer, customerReducer } from "./Reducers";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 0,
      image: "https://cf.shopee.vn/file/45b1c6767659067907084c374e7c5453_tn",
      name: "wide leg pants",
      inStock: 0,
      price: "30.00",
      ratings: 4,
      fastDelivery: true,
    },
    {
      id: 1,
      image:
        "https://static.wixstatic.com/media/95c211_02d99a7851ac4a7fa85f6939ad52e31f~mv2.jpg/v1/fill/w_528,h_528,al_c,q_80,usm_0.66_1.00_0.01/95c211_02d99a7851ac4a7fa85f6939ad52e31f~mv2.webp",
      name: "HEAVY-WEIGHT MULBERRY SILK BLAZER",
      inStock: 2,
      price: "3500.00",
      ratings: 4,
      fastDelivery: true,
    },
    {
      id: 2,
      image: "https://cf.shopee.vn/file/f2ee85b5ffd909b20055805629fd4b38_tn",
      inStock: 1,
      name: "polo LEVENTS Mini popular",
      price: "22.00",
      ratings: 3,
      fastDelivery: true,
    },
    {
      id: 3,
      image:
        "https://static.wixstatic.com/media/95c211_1e09be80e3d74c319429dc08fd428405~mv2.jpg/v1/fill/w_528,h_528,al_c,q_80,usm_0.66_1.00_0.01/95c211_1e09be80e3d74c319429dc08fd428405~mv2.webp",
      inStock: 2,
      name: "FRILL COLLAR TOP IN SILK SATIN",
      price: "2000.00",
      ratings: 2,
      fastDelivery: true,
    },
    {
      id: 4,
      image: "https://cf.shopee.vn/file/f0bb4d0d88ffcc03abf284dd652c9326_tn",
      inStock: 4,
      name: "Short-sleeved shirts",
      price: "40.00",
      ratings: 4,
      fastDelivery: false,
    },
    {
      id: 5,
      image: "https://cf.shopee.vn/file/5b9f48bb77bf2b5660825268d289db4b",
      inStock: 3,
      name: "Short",
      price: "50.00",
      ratings: 4,
      fastDelivery: false,
    },
    {
      id: 6,
      image: "https://cf.shopee.vn/file/0f5e103df29c1c9d6c21229154e04ed2_tn",
      inStock: 2,
      name: "hoodie jacket",
      price: "200.00",
      ratings: 4,
      fastDelivery: false,
    },
  ];
  const [productss, setProductss] = useState([]);
  useEffect(() => {
    const f = async () => {
      const a = await axios.get("http://localhost:3001/product").then((res) => {
        setProductss([...productss, res.data]);
      });
    };
    f();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  //useReduce
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  const [userState, userDispatch] = useReducer(customerReducer, {
    loginState: false,
  });

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        userState,
        userDispatch,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
