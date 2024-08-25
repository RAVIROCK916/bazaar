import { ALGOLIA_API_KEY, ALGOLIA_APP_ID } from "@/constants/algolia";
import { algoliasearch } from "algoliasearch";

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
