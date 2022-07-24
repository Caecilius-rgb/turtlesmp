import background from '.././static/img/background.jpeg'
import React from 'react';
import '.././static/Rules.css'

class Main extends React.Component {
  render() {
    return (
        <>
          <img className='backgroundimg' src={background}></img>
          <div className='whole-title'>
            Turtle SMP Rules
          </div>

          <div className='rules'>
              <p>1. No greifing</p>
              <p>2. No imprisoning, killing or otherwise harming pets unless
                they are attacking you</p>
              <p>3. No killing an AFK person</p>
              <p>4. No entering an offline or afk players base</p>
              <p>5. No duping</p>
              <p>6. you may attack an pet if the owner is riding it</p>
              <p>7. No glitched skin</p>
              <p>8. Before you betray someone, you have to declare your 
                alliance over</p>
          </div>

          <div className='Back'>
            <a className='Back' href='/'>Back</a>
          </div>
        </>
    );
  }
}

function Home() {
  return (
      <div className='page'>
        <Main />
      </div>
  );
}

export default Home;
