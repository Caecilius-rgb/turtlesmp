import React from "react";
import '.././static/Forum.css';
import background from '.././static/img/background.jpeg'

class Chatbox extends React.Component{
  render() {
    return(
      <div>
        <div className="enclosure">
        </div>
        <div className='Backmenu'>
            <a className='Back' href='/'>Back</a>
        </div>
      </div>
    );
  }
}

function Factions() {
  return(
    <>
      <img className='backgroundimg' src={background}></img>
      <Chatbox />
    </>
  );
}

export default Factions;