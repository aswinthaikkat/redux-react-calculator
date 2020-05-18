import React from 'react';
import { useState } from 'react';
import './button.css';
import { useDispatch, useSelector } from 'react-redux';
import { expressAction } from '../actions/expressionAction';
import { evaluateAction } from '../actions/evaluateAction';

const Button = (props) => {
  const expression = useSelector((state) => state.express.expression);
  const result = useSelector((state) => state.evaluate.result);
  const dispatch = useDispatch();
  const { number } = props;
  const [Enter, setEnter] = useState(true);
  const mouseEnter = () => {
    setEnter(false);
  };
  const mouseLeave = () => {
    setEnter(true);
  };
  const onClicked = () => {
    if (number.toString() === '=') {
      dispatch(evaluateAction(expression));
      console.log(result.toString());
    } else {
      console.log(number.toString());
      dispatch(expressAction(expression + number.toString()));
    }
  };
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={onClicked}
      className={Enter ? `button-wrapper` : `button-wrapper-border`}
    >
      {props.number}
    </div>
  );
};

export default Button;
