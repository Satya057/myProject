import { useEffect, useState } from "react";

const useClock = () => {
  const [time,setTime] = useState(0) ;
  const [clock,setClock]= useState({
    hours:"00",
    minutes:"00",
    seconds:"00"
  });
  const convetor=(seconds:any)=>{
    const hours= seconds/3600 ;
    const hour= Math.floor(hours);

    const minutes= (seconds-hour*3600)/60;
    const minute= Math.floor(minutes);

    const second= Math.round(60*(minutes%1));

    return{
      hours: hour<10?`0${hour}`:`${hour}`,
      minutes: minute<10?`0${minute}`:`${minute}`,
      seconds: second<10?`0${second}`:`${second}`
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setTime((prev:number) => {
        setClock(convetor(prev + 1));
        return prev + 1;
      });
    }, 1000);
  }, [time]);
return clock ;
};

export default useClock;