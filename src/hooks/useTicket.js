import { useMutation } from "react-query";
import { usePrivateFetch } from "../network/usePrivateFetch";

const path = "/api/ticket";

export const useBookTicket = () => {
  const privateFetch = usePrivateFetch();
  return useMutation(async (credentials) => {
    const { data } = await privateFetch.post(path, credentials);
    return data;
  });
};
