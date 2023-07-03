import styles from "./results.module.css"
import questions from "../../data/question"
interface ResultsProps {
  arrAnswer: boolean[]
}

function Results(prop: ResultsProps) {
  return <div className={styles.results}></div>
}

export default Results
