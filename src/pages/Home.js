import background from '.././static/img/background.jpeg'
import sword from '.././static/img/sword.png'
import book from '.././static/img/book.png'
import emerald from '.././static/img/emerald.png'

import '.././static/Home.css';
import React from 'react';

class Factions extends React.Component {
  render() {
    return(
      <div id='Factions' className='linksquare'>
          <img id='swordlogo' src={sword} className='turtlelogo' ></img>
          
          <div className='linksquareheader'>
            <a className='linksquareheader' href='/Factions'>
              Factions
            </a>
          </div>

          <div className='linksquaredesc'>
              See the various factions that make up the Turtle SMP,
              register a new faction or edit pre-existing factions.
          </div>
      </div>
    );
  }
}

class Rules extends React.Component {
  render() {
    return(
      <div id='Rules' className='linksquare'>
        <img id='booklogo' src={book} className='turtlelogo' ></img>

        <div className='linksquareheader'>
          <a className='linksquareheader' href='/Rules'>
            Rules
          </a>
        </div>

        <div className='linksquaredesc'>
            Make sure to Check out the rules before playing in order to
            maintain order on the server
        </div>
      </div>
    );
  }
}

class Forum extends React.Component {
  render() {
    return(
      <div id='Forum' className='linksquare'>
          <img id='turtlelogo' src={emerald} className='turtlelogo' ></img>

          <div className='linksquareheader'>
            <a className='linksquareheader' href='/Forum'>
              Forum
            </a>
          </div>

          <div className='linksquaredesc'>
              Check out what other players are saying about the server or
              send a message to the populous of the server.
          </div>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
        <>
          <img className='backgroundimg' src={background}></img>
          <div className='whole-title'>
            Turtle SMP
          </div>
          <Factions />
          <Rules />
          <Forum />
        </>
    );
  }
}

function Home() {
  return (
    <>
      <div className='page'>
        <Main />
      </div>
    </>
  );
}

export default Home;
