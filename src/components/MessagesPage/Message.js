import "../../styles/Messages/Message.css";

function Message(props) {
    return(
      <div className={"message_wrapper"  + (props.owner ? " owner" : "")}>
          <div className="message__avatar"></div>
          <div className={"message"}>
              <p className="message__text">
                  {props.text}
              </p>
          </div>
      </div>
    );
}

export default Message;