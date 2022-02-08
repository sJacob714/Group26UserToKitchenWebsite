import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import { Component } from 'react';

///////////////////////////Button stuff///////////////////////////////////////////////////////
const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

//Response from pressing buttons
function AddedToBasket() {
  
  alert("Added To Basket");
}

function ItemsOrdered() {
  alert("Items Ordered");
}

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;



const types = ["Cash", "Credit Card"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

//////////////////////Input box stuff////////////////////////////////////////////////////////////

const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  
  function onChange(e) {
    //const re = /^[0-9/b]+$/;



    //if (e.target.value === '' || re.test(e.target.value)) {
    //  this.setState({value: e.target.value})
    //}
    setValue(e.target.value);

  }
  return {
    value,
    onChange,
  };
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function App(){
  const inputProps = useInput();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [data1, setData1] = useState({ menu1Num: 0 });
  const [data2, setData2] = useState({ menu2Num: 0 });
  const [data3, setData3] = useState({ menu3Num: 0 });

  return (

    <>
      <div id="app-modal"/>

      <div>
        <span>Restaurant Menu</span>
      </div>

      <div>
        <StyledInput
          {...inputProps}
          placeholder="Table Number Here"
        />
        <span>Table Number is : {inputProps.value} </span>
      </div>

{/*}
      <div>
        <Button onClick={AddedToBasket}>
          Menu Item 1
        </Button>
      </div>

      <div>
        <Button onClick={AddedToBasket}>
          Menu Item 2
        </Button>
      </div>
      <div>
        <Button onClick={AddedToBasket}>
          Menu Item 3
        </Button>
      </div>
      
      <a href="https://www.google.com" target="_blank">
        <Button>Link To Google</Button>
      </a>
  */}

<div>
      <div>Number of Menu Item 1 in Basket: {data1.menu1Num}</div>
      <Button
        
        onClick={() => {
          setOpen1(true);
        }}
      >
        Menu Item 1
      </Button>
      {open1 && (
        <MenuItem1
          //{...props}
          setOpen1={setOpen1}
          data1={data1}
          setData1={setData1}
        />
      )}
      </div>

      <div>
      <div>Number of Menu Item 2 in Basket: {data2.menu2Num}</div>
      <Button
        
        onClick={() => {
          setOpen2(true);
        }}
      >
        Menu Item 2
      </Button>
      {open2 && (
        <MenuItem2
          //{...props}
          setOpen2={setOpen2}
          data2={data2}
          setData2={setData2}
        />
      )}
      </div>

      <div>
      <div>Number of Menu Item 3 in Basket: {data3.menu3Num}</div>
      <Button
        
        onClick={() => {
          setOpen3(true);
        }}
      >
        Menu Item 3
      </Button>
      {open3 && (
        <MenuItem3
          //{...props}
          setOpen3={setOpen3}
          data3={data3}
          setData3={setData3}
        />
      )}
      </div>
      
      <ToggleGroup />

      <div>
        <Button theme="pink" onClick={ItemsOrdered}>
          Order Items
        </Button>
      </div>

    </>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////Modal Test/////////////////////////////////////////////////////////////////////////////////
const Modal = styled.div`
  max-width: 500px;
  border-radius: 5px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;
export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  border-radius: 5px;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
const ModalBanner = styled.div`
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #3f51b5;
  color: white;
  padding: 10px;
`;
const Input = styled.input`
  text-align: right;
  width: 200px;
  margin-left: 15px;
`;
export const MainButton = styled.button`
`;

function MenuItem1({ setOpen1, data1, setData1 }) {
  const [localData1, setLocalData1] = useState(data1);
  const { menu1Num } = localData1;
  function close() {
    setOpen1(false);
  }
  function submit1() {
    setData1({
      menu1Num,
    });
    close();
  }
  const content = new Array(1).fill(
    <p>
      Enter how many you would like to order
    </p>,
  );
  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Number of Items</ModalBanner>
        <ModalContent>
          {content}
          <label>
            Number of Items
            <Input
              value={menu1Num}
              type="number"
              onChange={e => setLocalData1({ menu1Num: e.target.value })}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <Button onClick={submit1}> Submit </Button>
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById('app-modal'),
  );
}

function MenuItem2({ setOpen2, data2, setData2 }) {
  const [localData2, setLocalData2] = useState(data2);
  const { menu2Num } = localData2;
  function close() {
    setOpen2(false);
  }
  function submit2() {
    setData2({
      menu2Num,
    });
    close();
  }
  const content = new Array(1).fill(
    <p>
      Enter how many you would like to order
    </p>,
  );
  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Number of Items</ModalBanner>
        <ModalContent>
          {content}
          <label>
            Number of Items
            <Input
              value={menu2Num}
              type="number"
              onChange={e => setLocalData2({ menu2Num: e.target.value })}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <Button onClick={submit2}> Submit </Button>
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById('app-modal'),
  );
}

function MenuItem3({ setOpen3, data3, setData3 }) {
  const [localData3, setLocalData3] = useState(data3);
  const { menu3Num } = localData3;
  function close() {
    setOpen3(false);
  }
  function submit3() {
    setData3({
      menu3Num,
    });
    close();
  }
  const content = new Array(1).fill(
    <p>
      Enter how many you would like to order
    </p>,
  );
  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Number of Items</ModalBanner>
        <ModalContent>
          {content}
          <label>
            Number of Items
            <Input
              value={menu3Num}
              type="number"
              onChange={e => setLocalData3({ menu3Num: e.target.value })}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <Button onClick={submit3}> Submit </Button>
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById('app-modal'),
  );
}