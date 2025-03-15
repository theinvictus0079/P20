import React from 'react';
import { motion } from 'framer-motion';

const PortfolioItem = ({ image, title, category, index }: { image: string, title: string, category: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-xl"
  >
    <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-emerald-400">{category}</p>
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Platform",
      category: "Web Development"
    },
    {
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Social Media Dashboard",
      category: "UI/UX Design"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Travel App",
      category: "Mobile Development"
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Blog Platform",
      category: "Full Stack"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Analytics Dashboard",
      category: "Web Development"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Fitness Tracker",
      category: "Mobile Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise 
            in different areas of web development and design.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;