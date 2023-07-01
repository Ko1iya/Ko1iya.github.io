import React, { useState } from "react"

import Title from "./components/Title/Title"
import QuestionWindow from "./components/QuestionWindow/QuestionWindow"
import questions from "./data/question"
import QuestionWindowStart from "./components/QuestionWindowStart/QuestionWindowStart"
import QuestionWindowEnd from "./components/QuestionWindowEnd/QuestionWindowEnd"
function App() {
  const [count, setCount] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  function upCorAnswHandler() {
    setCorrectAnswers((pre) => pre + 1)
  }

  function continueHandler() {
    setCount((pre) => pre + 1)
  }

  function repitHandler() {
    setCount(0)
    setCorrectAnswers(0)
  }

  return (
    <div className='App'>
      <Title />

      {count === 0 ? (
        <QuestionWindowStart continueFn={continueHandler} />
      ) : count === questions.length + 1 ? (
        <QuestionWindowEnd
          repit={repitHandler}
          correctAnswers={correctAnswers}
        />
      ) : (
        <QuestionWindow
          title={questions[count - 1].title}
          continueFn={continueHandler}
          numQuestion={count}
          upCorAnsw={upCorAnswHandler}
        />
      )}
    </div>
  )
}

export default App
