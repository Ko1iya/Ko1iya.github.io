import Button from "../Button/Button"
import ProgressBar from "../ProgressBar/ProgressBar"

import styles from "./questionWindowStart.module.css"

interface QuestionWindowStartProps {
  continueFn: () => void
}

function QuestionWindowStart({ continueFn }: QuestionWindowStartProps) {
  return (
    <div className={styles.questionWindow}>
      <ProgressBar progress={{ width: "0%" }} />
      <p className={styles.mainText}>Are you ready?</p>

      <Button text={"Start"} continueFn={continueFn} />
    </div>
  )
}

export default QuestionWindowStart
