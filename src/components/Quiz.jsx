import React from 'react'

const Quiz = () => {
  return (
    <div>
      <p>Quiz</p>
      <button onClick={HandleClick}>Start Quiz</button>
    </div>
  )
}

function HandleClick() {
  console.log("The button was clicked");
  alert("You clicked the button");
}

export default Quiz