import { Link } from 'react-router-dom';
import styles from './header.module.css';

export function Header () {
  return (
  <header className={styles.header}>
    <ul className={styles.menu}>
    <li><Link to= "/">Home</Link></li>
    <li><Link to="./Missao">Missao</Link></li>
    <li><Link to="./Produto">Produto</Link></li>
    <li><Link to="./Historia">Nossa Historia</Link></li>
    <li><Link to="./Contact">Contato</Link></li>
    </ul>
  
   {/* <strong className={styles.header}>Pagina Header</strong> */}
  </header>
    )
  
  }

 
    
  