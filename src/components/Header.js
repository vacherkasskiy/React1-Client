import "../styles/Header.css";
import logo from "../pictures/apple.png";
import store from "../redux/redux-store";

function Header() {
    return (
        <header>
            <img className={"header__logo"} src={logo} alt=""/>
            <img className={"header__avatar"} src={store.getState().user.currentUser.image} alt=""/>
        </header>
    );
}

export default Header;