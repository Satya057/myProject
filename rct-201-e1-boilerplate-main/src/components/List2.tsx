import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  initialArray: number[] ;
};
const List2 = (props: List2Props) => {
  const {list, appendEnd , popStart,clear,reset}= useNumberList(props.initialArray)
  const [num,setNum]= useState(0);
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">List2</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">
        <ul>{list.map((e)=> <li>{e}</li>)}</ul>
      </div>

      <input data-testid="list2-input"
      value={num}
      onChange={(e:any)=>setNum(e.target.value)}
       />
      <button data-testid="list2-btn-append-end"
      onClick={()=>appendEnd(num)}
      >
        Append End
      </button>
      <button data-testid="list2-btn-pop-start"
      onClick={()=>popStart()}
      >
        Pop Start
      </button>
      <button data-testid="list2-btn-clear"
      onClick={()=>clear(props.initialArray)}
      >
        Clear
      </button>
      <button data-testid="list2-btn-reset"
      onClick={()=>reset(props.initialArray)}
      >
        Reset
      </button>
    </div>
  );
};

export default List2;