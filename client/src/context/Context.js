import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [
    {
      id: 0,
      image: "http://placeimg.com/640/480/fashion",
      inStock: 1,
      name: "Incredible Metal Computer",
      price: "552.00",
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
  ];
  // useEffect(() => {
  //   const f = async () => {
  //     const a = await axios.get("http://localhost:3001/product").then((res) => {
  //       setProductss([...products, res.data]);
  //     });
  //   };
  //   f();
  // }, []);
  // console.log(products);
  // const [products, setProductss] = useState([
  //   {
  //     id: 1,
  //     image: "http://placeimg.com/640/480/fashion",
  //     inStock: 1,
  //     name: "Incredible Metal Computer",
  //     price: "552.00",
  //     ratings: 4,
  //     fastDelivery: true,
  //   },
  // ]);

  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  // }));
  console.log(products);

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
  // console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
