import styles from "../styles/home.module.css"
import hero from "../img/hero.png"

export default function Home() {
  return (
    <div className={styles.fundo}>

      <header className={styles.header}>
        <div className={styles.limete}>
          <h1 className={styles.title}>To Do List</h1>
          <a className={styles.link} href="">Minha conta</a>
        </div>
      </header>
      
      <div className={styles.principal}>
        <img src={hero} className={styles.img}></img>
        <div className={styles.caixaTxt}>
          <p className={styles.txt}> Sistema feito para você organizar seus estudos e tarefas</p>
        </div>
        <div className={styles.caixaSpan}>
          <span className={styles.span}>+7 mil posts</span>
          <span className={styles.span}>+1 mil comentarios</span>
        </div>
      </div>
    
    </div>
  )
}
