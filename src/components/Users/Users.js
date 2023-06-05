import User from "./User";
import React from "react";
import "../../styles/Users/Users.css";

function Users(props) {
    return (
        <div className="users">
            <div className="pages__buttons">
                {props.pages.map((x) => (
                    <div
                        key={x}
                        onClick={() => props.pageOnClick(x)}
                        className={x === props.currentPage ? "active" : ""}
                    >{x}</div>
                ))}
            </div>
            {props.users.map((x) => (
                <User
                    key={x.id}
                    data={x}
                    onFollow={props.onFollow}
                    onUnFollow={props.onUnFollow}
                />
            ))}
        </div>
    );
}

export default Users;