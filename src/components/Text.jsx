import { useState } from "react";

export default function Text() {
  const [test, setTest] = useState([..."Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta consequuntur id nihil mollitia accusantium laboriosam dolorem ullam quos quod eos libero minima dicta blanditiis dolore non nostrum vitae quaerat culpa"]);
  const [count, setCount] = useState(0);
  const showTest = (element)=> element.map((el,index)=>(el === ' ' ? <span key={index} id={index}>&nbsp;</span> :<span key={index} id={index}>{el}</span>))
  const [value, setvalue] = useState("");
  const hanchleChange = (e) => {
    if (e.target.value[count] === ' ') {
      setCount(count + 1);
    }else {
      if (value.length > e.target.value.length) {
        setCount(count - 1);
        let span = document.getElementById(value.length - 1);
        console.log(span);
        span.style.color = 'white';
      }else {
        let span = document.getElementById(count);
        if (span.innerHTML === e.target.value[count]) {
          span.style.color = 'green';
        }else{
          span.style.color = 'red';
        }
        setCount(count + 1);
      }
    }
    setvalue(e.target.value);
    console.log(count);

    // setCount(value.lenght-1);

  }
  return(
    <>
    <div className="input-container">
    {showTest(test)}
    </div>
    <input type="text" style={{width:'100%'}} name="" id="" placeholder="start" value={value} onChange={hanchleChange} />
    {value}
    </>
  )
};
