"use client";

export interface Post {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "The evolution of design thinking: insights and perspectives",
    category: "Thoughts",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mastering the art of design tools: a guide for product designers",
    category: "Tools",
    readTime: "3 min",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Side projects: from passion to portfolio-worthy designs",
    category: "Side projects",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Streamlining design workflows with design systems",
    category: "Design systems",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 5,
    title:
      "Building an effective design system: best practices and key considerations",
    category: "Design systems",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "How side projects fuel personal growth for designers",
    category: "Side projects",
    readTime: "3 min",
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "The future of interfaces: stepping into spatial computing",
    category: "Thoughts",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Cultivating a creative mindset in a corporate environment",
    category: "Thoughts",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2629&auto=format&fit=crop",
  },
];
