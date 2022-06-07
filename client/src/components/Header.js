import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  const { userState } = CartState();
  const [login, setLogin] = useState(userState);
  useEffect(() => {
    setLogin(userState);
  }, [userState]);
  return (
    <Navbar variant="dark" style={{ height: 80, backgroundColor: "#FAE8E0" }}>
      <Container>
        {login ? (
          <>
            <Navbar.Text>
              <Link to="/">
                <div className="xinyuna">Login</div>
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/register">
                <div className="xinyuna">Sign up</div>
              </Link>
            </Navbar.Text>
          </>
        ) : (
          <p>no</p>
        )}
        {/* <Navbar.Text>
          <Link to="/">
            <div className="xinyuna">Login</div>
          </Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to="/register">
            <div className="xinyuna">Sign up</div>
          </Link>
        </Navbar.Text> */}
        <Navbar.Brand>
          <Link to="/home">
            <div className="xinyuna">xinyuna</div>
          </Link>
        </Navbar.Brand>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle className="dropdown">
              <FaShoppingCart color="black" fontSize="25px" />
              <Badge color="black">
                <p style={{ color: "black" }}>{cart.length}</p>
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
