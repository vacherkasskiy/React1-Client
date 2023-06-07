import "../styles/Preloader.css";
import gif from "../pictures/preloader.gif";

function Preloader() {
    return(
        <div className="preloader__wrapper">
            <img src={gif} className={"preloader"} alt=""/>
        </div>
    );
}

export default Preloader;