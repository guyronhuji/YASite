import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd4eb5eee9f56a92b0e027074ab84ab3e447cab0e', queries,  });
export default client;
  