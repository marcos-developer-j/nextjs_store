import { env } from "app/config/envs";
export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json?` ,
  },
};
