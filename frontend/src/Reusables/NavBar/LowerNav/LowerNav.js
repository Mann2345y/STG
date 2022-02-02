import React, { useState } from "react";
import Container from "../../Container";
import styles from "./LowerNav.module.css";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const SearchWrapper = styled.div`
  height: 50px;
  width: 350px;
  margin-right: 200px;
  border: 2px solid #ff4433;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in;
  transform: ${({ open }) => (open ? "scaleY(1)" : "scaleY(0)")};
`;

const LowerNav = ({ openSearch, closeSearch }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className={styles.outerWrapper}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <Link to="/">
              <h4 className={styles.link}>Home</h4>
            </Link>
            <Link to="/products/page/1">
              <h4 className={styles.link}>Products</h4>
            </Link>
            <h4 className={styles.link}>About Us</h4>
            <h4 className={styles.link}>Contacts</h4>
          </div>
          <SearchWrapper open={openSearch}>
            <input
              type="text"
              placeholder="Search for Products"
              className={styles.input}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div className={styles.buttons} onClick={submitHandler}>
              <AiOutlineSearch size={21} />
            </div>
            <div
              className={styles.buttons}
              onClick={closeSearch}
              style={{ marginRight: "10px" }}
            >
              <AiOutlineClose size={21} />
            </div>
          </SearchWrapper>
        </div>
      </Container>
    </div>
  );
};

export default LowerNav;
