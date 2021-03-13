import { useMutation } from "react-query";
import { publicFetch } from "../network/publicFetch";

export const useAuth = (key) => {
  return useMutation(
    ({ path, credentials }) =>
      publicFetch
        .post(path, credentials)
        .then(({ data }) => data)
        .catch((e) => e),
    { mutationKey: key }
  );
};
