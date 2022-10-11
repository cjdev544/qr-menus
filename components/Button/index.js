import styles from './Button.module.css'

export default function Button({ children, name, href }) {
  return (
    <a
      className={styles.button}
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={name}
    >
      {children}
      <p>{name}</p>
    </a>
  )
}
