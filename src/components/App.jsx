import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString(); //setting now to the current time

  //below we set a destructured aray as a constant and assign the destructured array to useState
  //we now need to declare two things:
  //FIRST we pass in the name/state of this piece of state
  //SECOND we pass in the function that will update this piece of data (time)
  const [time, setTime] = useState(now);
  //starting value of state is defined in useState()'s parentheses
  //in this case it's the current time which we stored at the top of our App in the const 'now'

  //this is the function that will update the inital value of the initial state
  function updateTime() {
    const newTime = new Date().toLocaleTimeString(); //this will allow us to call a new updated time
    setTime(newTime); //this is the function we delcared would update our state in the destructured array
  }

  return (
    <div className="container">
      <h1>{time}</h1>{" "}
      {/*we use {time} insert the dynamic value of 'time' into this h1*/}
      <button onClick={updateTime}>Get Time</button>
      {/*when the user clicks this button, updateTime is called*/}
      {/*when the user clicks on the button, trigger the updateTime function*/}
    </div>
  );
}

export default App;
