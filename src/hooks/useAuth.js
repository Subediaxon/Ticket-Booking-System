import { useMutation } from "react-query";
import { publicFetch } from "../network/publicFetch";

export const useAuth = (key) => {
  return useMutation(
    async ({ path, credentials }) => {
      const { data } = await publicFetch.post(path, credentials);
      return data;
    },

    { mutationKey: key }
  );
};
