import "../../styles/Messages/Message.css";

function Message(props) {
    return(
      <div className={"message_wrapper"  + (props.obj.isOwner ? " owner" : "")}>
          <div className="message__avatar"></div>
          <div className={"message"}>
              <p className="message__text">
                  {props.obj.text}
              </p>
              <p className="message__time">19:27</p>
          </div>
      </div>
    );
}

export default Message;