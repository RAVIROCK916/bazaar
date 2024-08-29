import logout from "@/utils/logout";
import { LogOut, User } from "lucide-react";

export const profile_popup_items = [
  {
    id: 1,
    label: "Profile",
    url: "/profile",
    icon: User,
    onClick: (Router: any) => Router.push("/profile"),
  },
  {
    id: 2,
    label: "Logout",
    url: "/signup",
    icon: LogOut,
    onClick: (Router: any) => logout(Router),
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, ABC Company",
    description:
      "Our experience with the e-commerce platform has been nothing short of amazing. The user-friendly interface and seamless checkout process have significantly improved our online sales.",
    image: "https://picsum.photos/id/338/300",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Manager, XYZ Company",
    description:
      "The platform has been a game-changer for our marketing efforts. We can now easily track and analyze our online performance, making data-driven decisions that drive growth.",
    image: "https://picsum.photos/id/237/300",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Sales Manager, DEF Company",
    description:
      "The platform has been a game-changer for our sales efforts. We can now easily track and analyze our online performance, making data-driven decisions that drive growth.",
    image: "https://picsum.photos/id/334/300",
    rating: 5,
  },
];

export const faqs = [
  {
    id: 1,
    title: "What is e-commerce?",
    content:
      "E-commerce is the process of buying or selling goods or services over the internet. It involves the use of a website or mobile app to facilitate transactions and deliver goods or services to customers.",
  },
  {
    id: 2,
    title: "What are the benefits of e-commerce?",
    content:
      "E-commerce offers numerous benefits, including reduced costs, increased efficiency, improved customer service, and a global reach. It also allows businesses to offer products and services that were previously unavailable.",
  },
  {
    id: 3,
    title: "What are the challenges of e-commerce?",
    content:
      "E-commerce has its challenges, including the need for strong customer service, the need for secure payment systems, and the need for efficient logistics. It also requires businesses to be able to adapt to new technologies and trends.",
  },
  {
    id: 4,
    title: "What are the types of e-commerce?",
    content:
      "There are several types of e-commerce, including online retail, online shopping, online banking, online education, and online gaming.",
  },
  {
    id: 5,
    title: "What are the benefits of e-commerce?",
    content:
      "E-commerce offers numerous benefits, including reduced costs, increased efficiency, improved customer service, and a global reach. It also allows businesses to offer products and services that were previously unavailable.",
  },
];

export const pricingOptions = [
  {
    id: 1,
    title: "Monthly",
    plans: [
      {
        id: 1,
        title: "Basic Plan",
        description: "Perfect for small businesses and startups",
        price: "$9.99",
        period: "Mo",
        features: [
          "Customizable design options",
          "Secure payment processing",
          "24/7 customer support",
        ],
      },
      {
        id: 2,
        title: "Business Plan",
        description: "Ideal for growing businesses",
        price: "$19.99",
        period: "Mo",
        features: [
          "Advanced analytics tracking",
          "Inventory management tools",
          "Email marketing integration",
          "Social media promotion",
          "SEO optimization features",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Yearly",
    plans: [
      {
        id: 1,
        title: "Basic Plan",
        description: "Perfect for small businesses and startups",
        price: "$49.99",
        period: "Yr",
        features: [
          "Customizable design options",
          "Secure payment processing",
          "24/7 customer support",
        ],
      },
      {
        id: 2,
        title: "Business Plan",
        description: "Ideal for growing businesses",
        price: "$69.99",
        period: "Yr",
        features: [
          "Real-time sales analytics",
          "Multi-channel inventory management",
          "Automated email marketing campaigns",
          "Integrated social media management",
        ],
      },
      {
        id: 3,
        title: "Enterprise Plan",
        description: "For large businesses and organizations",
        price: "$99.99",
        period: "Yr",
        features: [
          "Real-time sales analytics",
          "Multi-channel inventory management",
          "Automated email marketing campaigns",
          "Integrated social media management",
          "Advanced SEO tools and reporting",
        ],
      },
    ],
  },
];

export const ProductInfo = [
  {
    title: "Details",
    description:
      "Discover the intricate features and specifications of our product. From materials used to dimensions and care instructions, this section provides a comprehensive overview to help you make an informed decision.",
  },
  {
    title: "Shipping",
    description:
      "Learn about our shipping policies, estimated delivery times, and available shipping methods. We offer various options to ensure your purchase reaches you safely and in a timely manner, no matter where you are located.",
  },
  {
    title: "Returns",
    description:
      "We stand behind the quality of our products. Our hassle-free return policy allows you to shop with confidence. Find out about our return window, process, and any specific conditions to ensure a smooth experience if you need to return or exchange an item.",
  },
];
