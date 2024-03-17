import { useState } from "react";
import Counter from "../../components/Counter/Counter";
import { Homework29Wrapper } from "./styles";

function Homework29() {

 const [count, setCount] = useState<number>(0);
const onPlus = () => {
   setCount((prevValue) => {
     return prevValue + 1;
   });
 };
 const onMinus = () => {
   setCount((prevValue) => prevValue - 1);
 };
 return (
  
       <Homework29Wrapper>
        {/* <header>Homework29 </header> */}
     <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
     </Homework29Wrapper>
 );
}

  //   return (
  //     <Homework29Wrapper>
  //       <Counter count={0} onMinus={function (): void {
  //               throw new Error("Function not implemented.");
  //           } } onPlus={function (): void {
  //               throw new Error("Function not implemented.");
  //           } } />
  //     </Homework29Wrapper>
  //   );
  // }
  
  export default Homework29;