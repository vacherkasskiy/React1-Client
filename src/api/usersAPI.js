import axios from "axios";

export const getUsers = (currentPage, pageCapacity) => {
    return (
        axios
            .get(
                "https://localhost:7072/users/get_users?skip=" +
                ((currentPage - 1) * pageCapacity) +
                "&amount=" +
                pageCapacity
            )
            .then(response => {
                return response.data;
            })
    );
};

export const followUser = (userId) => {
    return (
        axios
            .patch(`https://localhost:7072/users/follow_user/` + userId)
            .then(response => {
                return response.status;
            })
    );
};

export const unfollowUser = (userId) => {
    return (
        axios
            .patch(`https://localhost:7072/users/unfollow_user/` + userId)
            .then(response => {
                return response.status;
            })
    );
}