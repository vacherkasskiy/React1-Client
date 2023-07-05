import axios from "axios";

export const getUserRequest = (userId) => {
    return (
        axios
            .get(`https://localhost:7072/users/get_user/${userId}`)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
    );
};

export const setStatusRequest = (userId, status) => {
    return (
        axios
            .post(`https://localhost:7072/users/set_status?UserId=${userId}&Status=${status}`)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(() => {
                console.log("something went wrong");
            })
    );
}