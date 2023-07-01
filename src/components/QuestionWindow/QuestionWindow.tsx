import { v4 as uuid } from "uuid"

import Button from "../Button/Button"
import ProgressBar from "../ProgressBar/ProgressBar"
import Variant from "../Variant/Variant"
import styles from "./questionWindow.module.css"
import questions from "../../data/question"
import { useState } from "react"

interface QuestionWindowProps {
  title: string
  continueFn: () => void
  upCorAnsw: () => void
  numQuestion: number
}

function QuestionWindow({
  continueFn,
  numQuestion,
  upCorAnsw,
}: QuestionWindowProps) {
  const [stateButton, setStateButton] = useState(true)

  let correct = questions[numQuestion - 1].correct
  let variants = questions[numQuestion - 1].variants
  let text = questions[numQuestion - 1].title
  let progress = { width: `${numQuestion * (100 / (questions.length + 1))}%` }
  // если index === correct значит эта кнопка (variant) может увеличить (upCorAnsw) correctAnswers
  // Также в любом случае кнопка должна задизеблить осальные кнопки

  function answer() {
    setStateButton(false)
  }

  function continueFnFromQW() {
    continueFn()
    setStateButton(true)
  }

  return (
    <div className={styles.questionWindow}>
      <ProgressBar progress={progress} />
      <p className={styles.mainText}>{text}</p>

      {variants.map((variant, index) => (
        <Variant
          stateButton={stateButton}
          text={variant}
          key={uuid()}
          answer={answer}
          correct={index === correct}
          upCorAnsw={upCorAnsw}
        />
      ))}
      <Button text='continue' continueFn={continueFnFromQW} />
    </div>
  )
}

export default QuestionWindow
