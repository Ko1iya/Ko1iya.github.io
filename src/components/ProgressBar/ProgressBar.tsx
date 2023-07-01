import styles from "./progressBar.module.css"

interface ProgressBarProps {
  progress: { width: string }
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className={styles.containerProgressBar}>
      <div className={styles.progressBar} style={progress}></div>
    </div>
  )
}

export default ProgressBar
