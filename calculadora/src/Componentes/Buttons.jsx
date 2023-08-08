import React from "react";


function Buttons(props) {
  return (
    <div>
      <div className="row">
        <button className="ac" onClick={props.handleClear}>
          AC
        </button>
        <button onClick={props.handleSign}>+/-</button>
        <button onClick={props.handlePorcent}>%</button>
        <button className="operator" onClick={props.handleOldCalc} value="/">
          /
        </button>
      </div>
      <div className="row">
        <button className="gray" onClick={props.handleNumber} value={7}>
          7
        </button>
        <button className="gray" onClick={props.handleNumber} value={8}>
          8
        </button>
        <button className="gray" onClick={props.handleNumber} value={9}>
          9
        </button>
        <button className="operator" onClick={props.handleOldCalc} value={"x"}>
          X
        </button>
      </div>
      <div className="row">
        <button className="gray" onClick={props.handleNumber} value={4}>
          4
        </button>
        <button className="gray" onClick={props.handleNumber} value={5}>
          5
        </button>
        <button className="gray" onClick={props.handleNumber} value={6}>
          6
        </button>
        <button className="operator" onClick={props.handleOldCalc} value={"-"}>
          -
        </button>
      </div>
      <div className="row">
        <button className="gray" onClick={props.handleNumber} value={1}>
          1
        </button>
        <button className="gray" onClick={props.handleNumber} value={2}>
          2
        </button>
        <button className="gray" onClick={props.handleNumber} value={3}>
          3
        </button>
        <button className="operator" onClick={props.handleOldCalc} value={"+"}>
          +
        </button>
      </div>
      <div className="row">
        <button className="gray zero" onClick={props.handleNumber} value={0}>
          0
        </button>
        <button className="gray" onClick={props.handleNumber} value={"."}>
          .
        </button>
        <button className="equal" onClick={props.handleCont}>
          =
        </button>
      </div>
    </div>
  );
}

export default Buttons;