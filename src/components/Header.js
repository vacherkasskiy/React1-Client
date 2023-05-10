import "../styles/Header.css";
import logo from "../pictures/apple.png"
import avatar from "../pictures/man.png"

function Header() {
    return(
        <header>
            <img className={"header__logo"} src={logo} alt=""/>
            <img className={"header__avatar"} src={avatar} alt=""/>
        </header>
    );
}

export default Header;