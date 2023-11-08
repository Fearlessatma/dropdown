import {  useState } from "react";
import Style from './dropdown.module.css';

function Dropdown() {
 // Declared a array to display as option
  const list = ["Yes", "No", "May Be", "Later"];

  // hook for showing the selected Itme
  const [selectedOption, setSelectedOption] = useState("");
  //hook for storing a optionArray
  const [optionArray, setOptionArray] = useState([]);
  
  // This function will fired , when we we will enter on the Select button
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }
  // This funciton to hide list
  const handleClick = ()=>{
    setOptionArray([]);
  }
  // This funciton select items
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }


  return (
    <>
      <div onClick={handleClick}>
        <h1>Should We Use Dropdown?</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.begOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.single}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;