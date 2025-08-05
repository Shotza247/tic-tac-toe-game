import './App.css';
import { useState } from 'react';

function Sqaure()
{
  const [value, setSquares] = useState(null);

  function Clickedbutton(){
    setSquares('X');
  
}
  return(
    <>
    <button className='square' onClick={Clickedbutton} >{value}</button>
    <button className='square' onClick={Clickedbutton} >{value}</button>
    <button className='square' onClick={Clickedbutton} >{value}</button>
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
    <Sqaure />
  </div>
  <div className='board-row3'>
    <Sqaure />
  </div>
  </>);
}
