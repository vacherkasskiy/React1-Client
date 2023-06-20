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