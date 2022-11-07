import {useState} from "react";

const useNumberList = (initialArray: number[]) => {
const [list,setList]=useState(initialArray);
const appendStart=(content:number)=>{
  list.unshift(content);
  setList(list)

}
  
const appendEnd=(content:number)=>{
  list.push(content);
  setList(list);
}
// TODO
const popStart=()=>{
  list.shift();
  setList(list)
};
const popEnd=()=>{
  list.pop();
  setList(list)
};
const clear=(initialArray:number[])=>{
  initialArray=[];
  setList(initialArray)
};
const reset=(initialArray:number[])=>{
  setList(initialArray)
}
return {list,appendStart,appendEnd,popStart,popEnd,clear,reset}
  // refer readme.md for what to return
};

export default useNumberList;
