import styles from "./title.module.css"

interface TitleProps {}

function Title(prop: TitleProps) {
  return <div className={styles.title}>Quiz</div>
}

export default Title
