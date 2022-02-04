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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ clicks: 0 });
  //const menu1Num = 0;
  const menu2Num = 0;
  const menu3Num = 0;

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
      
      <ToggleGroup />

      <div>
        <Button theme="pink" onClick={ItemsOrdered}>
          Order Items
        </Button>
      </div>

      <div>
      <div>Entered Number: {data.clicks}</div>
      <Button
        
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </Button>
      {open && (
        <ModalContainer
          //{...props}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      )}
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
  height: 60px;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: blue;
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
  background-color: blue;
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

function ModalContainer({ setOpen, data, setData }) {
  const [localData, setLocalData] = useState(data);
  const { clicks } = localData;
  function close() {
    setOpen(false);
  }
  function submit() {
    setData({
      clicks,
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
              value={clicks}
              type="number"
              onChange={e => setLocalData({ clicks: e.target.value })}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <ConfirmButton onClick={submit}> Submit </ConfirmButton>
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById('app-modal'),
  );
}