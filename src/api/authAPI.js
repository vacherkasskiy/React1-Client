import axios from "axios";

export const loginUser = (login, password) => {
    axios
        .post(`http://localhost:5072/auth/login?Login=${login}&Password=${password}`,
            { withCredentials: true })
        .then(response => {
            if (response.status === 200) {
                //window.location.href = '/profile';
                console.log(response);
            }
        })
        .catch(error => {
            console.log(error);
        });
}