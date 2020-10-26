import axios from "axios";

export const getUser = (user) => {
  return axios.get(`https://api.github.com/users/${user}`);
};

export const getFollwing = (user, idx) => {
  return axios.get(
    `https://api.github.com/users/${user}/following?page=${idx}&per_page=10`
  );
};
