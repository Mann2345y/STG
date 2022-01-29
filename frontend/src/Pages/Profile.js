import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Container from "../Reusables/Container";
import NavBar from "../Reusables/NavBar/NavBar";
import Footer from "../Reusables/Footer/Footer";
import LeftBlock from "../Components/Profile/LeftBlock/LeftBlock";
import RightBlock from "../Components/Profile/RightBlock/RightBlock";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderHistory } from "../Redux/actions/orderActions";

const Wrapper = styled.div`
  height: 650px;
  width: 100%;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 80px;
  display: flex;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  useEffect(() => {
    dispatch(getOrderHistory(user.id));
  }, []);

  const [profileEditActive, setProfileEditActive] = useState(true);
  const [addressEditActive, setAddressEditActive] = useState(false);
  const [orderHistoryActive, setOrderHistoryActive] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [groupCartActive, setGroupCartActive] = useState(false);

  const profileHandler = () => {
    setProfileEditActive(true);
    setAddressEditActive(false);
    setOrderHistoryActive(false);
    setWishlistActive(false);
    setGroupCartActive(false);
    console.log("click");
  };

  const addressHandler = () => {
    setProfileEditActive(false);
    setAddressEditActive(true);
    setOrderHistoryActive(false);
    setWishlistActive(false);
    setGroupCartActive(false);
  };

  const orderhistoryHandler = () => {
    setProfileEditActive(false);
    setAddressEditActive(false);
    setOrderHistoryActive(true);
    setWishlistActive(false);
    setGroupCartActive(false);
  };

  const wishlistHandler = () => {
    setProfileEditActive(false);
    setAddressEditActive(false);
    setOrderHistoryActive(false);
    setWishlistActive(true);
    setGroupCartActive(false);
  };

  const groupcartHandler = () => {
    setProfileEditActive(false);
    setAddressEditActive(false);
    setOrderHistoryActive(false);
    setWishlistActive(false);
    setGroupCartActive(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <Container>
        <Wrapper>
          <LeftBlock
            profileHandler={profileHandler}
            addressHandler={addressHandler}
            orderhistoryHandler={orderhistoryHandler}
            wishlistHandler={wishlistHandler}
            groupcartHandler={groupcartHandler}
          />
          <RightBlock
            profileEditActive={profileEditActive}
            addressEditActive={addressEditActive}
            orderHistoryActive={orderHistoryActive}
            wishlistActive={wishlistActive}
            groupCartActive={groupCartActive}
          />
        </Wrapper>
      </Container>
      <Footer />
    </motion.div>
  );
};

export default Profile;
