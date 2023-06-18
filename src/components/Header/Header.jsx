import style from './Header.module.css'
function Header () {
    return (
      <header className={style.header}>
        <h1 className={style.heading}>Tip Calculator</h1>
        <p className={style.para}>project of React</p>
      </header>
    );

}
export default Header;