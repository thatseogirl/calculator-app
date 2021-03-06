/* eslint-disable no-eval */
import React from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { FormControl } from "react-bootstrap";
import {
  calculateValue,
  inputValue,
  numberValue,
  deleteValue,
  resetValue,
} from "../../redux/action";
import "./Button.css";

export default function Button() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  const handleChange = () => {
    dispatch(inputValue());
  };

  const handleClick = (event) => {
    dispatch(numberValue(event.target.value));
  };

  const handleDelete = () => {
    dispatch(deleteValue(result.slice(0, -1)));
  }
  const handleReset = () => {
    dispatch(resetValue(""));
  };
  const handleResult = () => {
    dispatch(calculateValue(eval(result)));
  };
  return (
    <div>
      <div>
        <FormControl
          className="input"
          type="text"
          value={result}
          onChange={handleChange}
        />
      </div>
      <div className="main-container">
        <div className="button-group">
          <button value="7" onClick={handleClick} className="num">
            7
          </button>
          <button value="8" onClick={handleClick} className="num">
            8
          </button>
          <button value="9" onClick={handleClick} className="num">
            9
          </button>
          <button value="delete" onClick={handleDelete} className="del">
            del
          </button>
          <button value="4" onClick={handleClick} className="num">
            4
          </button>
          <button value="5" onClick={handleClick} className="num">
            5
          </button>
          <button value="6" onClick={handleClick} className="num">
            6
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="1" onClick={handleClick} className="num">
            1
          </button>
          <button value="2" onClick={handleClick} className="num">
            2
          </button>
          <button value="3" onClick={handleClick} className="num">
            3
          </button>
          <button value="-" onClick={handleClick} className="num">
            &ndash;
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="0" onClick={handleClick} className="num">
            0
          </button>
          <button value="/" onClick={handleClick}>
            &divide;
          </button>
          <button value="*" onClick={handleClick}>
            &times;
          </button>
        </div>
        <div className="button-group2">
          <button onClick={handleReset} className="reset">
            reset
          </button>
          <button value="=" onClick={handleResult} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
