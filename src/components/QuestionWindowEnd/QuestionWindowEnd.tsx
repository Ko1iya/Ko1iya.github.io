import Button from "../Button/Button"
import ProgressBar from "../ProgressBar/ProgressBar"
import { FaStar } from "react-icons/fa"

import styles from "./questionWindowEnd.module.css"
import questions from "../../data/question"

interface QuestionWindowEndProps {
  repit: () => void
  correctAnswers: number
}

function QuestionWindowEnd({ repit, correctAnswers }: QuestionWindowEndProps) {
  return (
    <div className={styles.questionWindow}>
      <ProgressBar progress={{ width: "100%" }} />
      <p className={styles.mainText}>
        <FaStar style={{ color: "yellow" }} />
        Поздравляем!!!
        <FaStar style={{ color: "yellow" }} />
      </p>
      <p className={styles.mainText}>
        Вы ответили правильно на{" "}
        <p className={styles.correctAnswers}>{correctAnswers}</p> из{" "}
        {questions.length} вопросов
      </p>

      <Button text={"Repit"} continueFn={repit} />
    </div>
  )
}

export default QuestionWindowEnd
