export default {
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  },
};
