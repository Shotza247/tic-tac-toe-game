import './App.css';
import { useState } from 'react';

function Sqaure({value})
{
  const [squares, setSquares] = useState(1);

  function Clickedbutton(){
  
    alert("clicked this line "+ squares + "times");
    setSquares(squares + 1);
  
}
  return(
    <>
    <button className='square' onClick={Clickedbutton} value="1">{value}</button>
    <button className='square' onClick={Clickedbutton} value="2">{value}</button>
    <button className='square' onClick={Clickedbutton} value="3">{value}</button>
    </>
  );
}
export default function Board() {

  return (
  <>
  <div className='board-row1'>
    <Sqaure />
  </div>
  <div className='board-row2'>
    <Sqaure/>
  </div>
  <div className='board-row3'>
    <Sqaure/>
  </div>
  </>);
}
