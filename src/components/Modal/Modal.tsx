import styles from "./modal.module.css"

interface ModalProps {
  escape: () => void
  open: boolean
}

export function Modal({ escape, open }: ModalProps) {
  let str = open ? `${styles.modal}` : `${styles.modal} ${styles.disabled}`

  return <div className={str} onClick={escape}></div>
}
