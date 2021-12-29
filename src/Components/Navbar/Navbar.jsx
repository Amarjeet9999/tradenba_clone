import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <Main>
      <div className="upper">
        <div className="left">
          <div className="logo">
            <img
              src="https://fanspo.com/public/assets/images/logo/fanspo-icon-square.svg"
              alt=""
            />
          </div>
          <div className="name">
            <img
              src="https://fanspo.com/public/assets/images/logo/fanspo-white-text.svg"
              alt=""
            />
          </div>
          <div className="NBA">NBA</div>
          <div className="NFL">NFL</div>
        </div>
        <div className="right">
          <div className="input">
            <span className="material-icons">search</span>
            <input type="text" placeholder="Search" />
          </div>
          <Button variant="outlined">Login</Button>
          <span class="material-icons dot">more_vert</span>
        </div>
      </div>
      <div className="lower">
        <span class="material-icons">sports_soccer</span>
        <div className="line"></div>
        <div className="div">
          SPACES <span class="material-icons">expand_more</span>
        </div>
        <div className="div">
          TOOLS <span class="material-icons">expand_more</span>
        </div>
        <div className="div">
          POSTS <span class="material-icons">expand_more</span>
        </div>
        <div className="div">
          RESOURCES <span class="material-icons">expand_more</span>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 85px;
  padding: 0 20px;
  background-color: rgb(26, 26, 26);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  & .upper {
    height: 48px;
    display: flex;
    justify-content: space-between;

    & .left {
      display: flex;
      align-items: center;
      gap: 12px;

      & .logo img {
        height: 30px;
        width: 30px;
      }
      & .name img {
        height: 35px;
        width: 101px;
      }

      & .NBA {
        height: 25px;
        width: max-content;
        background-color: rgb(243, 107, 52);
        padding: 0 10px;
        line-height: 25px;
        font-weight: 700;
        color: black;
        border-radius: 30px;
        margin-left: 18px;
      }

      & .NFL {
        height: 25px;
        width: max-content;
        line-height: 25px;
        font-weight: 700;
        color: white;
        padding: 0 10px;
      }
    }

    & .right {
      display: flex;
      align-items: center;

      & Button {
        border-color: white;
        color: white;
        height: 35px;
        font-weight: 600;
        margin-left: 15px;
      }

      & .input {
        background-color: rgb(60, 60, 60);
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 15px;
        border-radius: 5px;
      }

      & input {
        background-color: transparent;
        border: none;
        outline: none;
        height: 35px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        width: 150px;
      }

      & .dot {
        color: white;
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }

  & .lower {
    min-height: 36px;
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 12px;

    & span {
      color: rgb(226, 224, 224);
    }

    & .line {
      border-left: 2px solid grey;
      height: 18px;
      width: 0;
    }

    & .div {
      display: flex;
      align-items: center;
      color: rgb(226, 224, 224);
      font-weight: 600;
      & span {
      }
    }
  }
`;
