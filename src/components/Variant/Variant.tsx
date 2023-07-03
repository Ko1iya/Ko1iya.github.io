import styles from "./variant.module.css"

interface VariantProps {
  text: string
  answer: () => void
  upCorAnsw: () => void
  correct: boolean
  stateButton: boolean
}

function Variant({
  text,
  correct,
  answer,
  stateButton,
  upCorAnsw,
}: VariantProps) {
  function thisAnswer() {
    if (correct) {
      upCorAnsw()
    }
    answer()
  }

  return (
    <button
      disabled={!stateButton}
      className={`${styles.variant} ${
        !stateButton ? (correct ? styles.buttonGreen : styles.buttonRed) : ""
      }`}
      onClick={thisAnswer}
    >
      {text}
    </button>
  )
}

export default Variant
