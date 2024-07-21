import axios from "axios";

const shopifyClient = axios.create({
  baseURL: `https://${process.env.SHOPIFY_SHOP}/admin/api/2024-07`,
  headers: {
    "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

export default shopifyClient;
