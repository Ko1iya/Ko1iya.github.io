import styles from "./button.module.css"
interface textProps {
  text: string
  continueFn: () => void
}
function Button(prop: textProps) {
  return (
    <button className={styles.but} onClick={prop.continueFn}>
      {prop.text}
    </button>
  )
}

export default Button
