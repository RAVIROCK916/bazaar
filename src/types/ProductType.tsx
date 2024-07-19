type ProductType = {
  id: string;
  title: string;
  description: string;
  image: { src: string };
  variants: { price: string }[];
  tags: string;
};

export default ProductType;
