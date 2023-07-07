import styles from "./result.module.css"
import questions from "../../data/question"

interface ResultProps {
  correct: boolean
  index: number
}

function Result({ index, correct }: ResultProps) {
  return (
    <div className={styles.result}>
      <h2 className='title'>{questions[index].title}</h2>
      <div className='question'>
        {questions[index].variants.map((variant) => (
          <p>{variant}</p>
        ))}
      </div>
    </div>
  )
}

export default Result
