import styles from './Footer.module.css';
  function Footer(props) {
  return (
<footer className={styles.footer}>
   <span>Footer</span>
 
  <p>{props.anoProducao}</p>
</footer>

)

}

export default Footer;