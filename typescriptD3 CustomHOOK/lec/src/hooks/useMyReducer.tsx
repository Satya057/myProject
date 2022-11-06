import {useState  } from "react";

export const useMyReducer=<T,U>(
    reducerFn:(state:T,action:U)=>T,
    initialState:T
    ):[T,(action:U)=>void]=>{
const [state,setState]=useState<T>(initialState);

const dispatch=(action:U):void=>{
    let updatedState=reducerFn(state,action);
    setState(updatedState);
};
return [state,dispatch];
}