export default {
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    localStorage.clear();
    return Promise.resolve();
  },
};
