import { useMutation } from "react-query";
const axios = require("axios");

export const useKhalti = (key) => {
  const path = "https://khalti.com/api/v2/payment/verify/";
  const config = {
    headers: {
      Authorization: "test_secret_key_ba19749810184ae9ac97ca2b2b4abcd7",
    },
  };
  return useMutation(
    async ({ khaltidata }) => {
      const { data } = await axios.post(path, khaltidata, config);
      return data;
    },

    { mutationKey: key }
  );
};
