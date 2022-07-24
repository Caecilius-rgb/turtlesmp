import background from './static/img/background.jpeg'
import sword from './static/img/sword.png'
import book from './static/img/book.png'
import turtle from './static/img/turtle.png'

import './static/App.css';
import React from 'react';

class Factions extends React.Component {
  render() {
    return(
      <div id='Factions' className='linksquare'>
          <img id='swordlogo' src={sword} className='turtlelogo' ></img>
          
          <div className='linksquareheader'>
            Factions
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
          Rules
        </div>
      </div>
    );
  }
}

class Bulletin extends React.Component {
  render() {
    return(
      <div id='Bulletin' className='linksquare'>
          <img id='turtlelogo' src={turtle} className='turtlelogo' ></img>

          <div className='linksquareheader'>
            Bulletin
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
          <Bulletin />
        </>
    );
  }
}

function App() {
  return (
    <>
      <div className='page'>
        <Main />
      </div>
    </>
  );
}

export default App;
