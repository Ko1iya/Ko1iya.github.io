import React, { useState } from "react"

import Title from "./components/Title/Title"
import QuestionWindow from "./components/QuestionWindow/QuestionWindow"
import questions from "./data/question"
import QuestionWindowStart from "./components/QuestionWindowStart/QuestionWindowStart"
import QuestionWindowEnd from "./components/QuestionWindowEnd/QuestionWindowEnd"
import Results from "./components/Results/Results"
function App() {
  const [count, setCount] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [arrAnswer, setArrAnswer] = useState(() => {
    return [...questions].map((el) => false)
  })

  function upCorAnswHandler() {
    setCorrectAnswers((pre) => pre + 1)
    setArrAnswer((pre) =>
      [...pre].map((el, index) => (index === count - 1 && !el ? true : el))
    )
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
        <>
          <QuestionWindowEnd
            repit={repitHandler}
            correctAnswers={correctAnswers}
          />
          <Results arrAnswer={arrAnswer} />
        </>
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
