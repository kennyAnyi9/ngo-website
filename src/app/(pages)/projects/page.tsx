"use client";
import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Clean Water Initiative",
    description:
      "Providing clean water access to rural communities through sustainable solutions.",
    imageUrl: "/images/water.jpeg",
    category: "Water",
    startDate: new Date("2024-01-15"),
    isFeatured: true,
  },
  {
    id: "2",
    title: "Sustainable Agriculture Program",
    description:
      "Empowering local farmers with modern, eco-friendly farming techniques.",
    imageUrl: "/images/agriculture.jpeg",
    category: "Agriculture",
    startDate: new Date("2024-02-01"),
    isFeatured: false,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-foreground">
            Our Projects
          </h1>
          <p className="text-xl mb-8 text-center text-muted-foreground">
            Explore our ongoing initiatives and see how we're making a
            difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Want to Support Our Projects?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Your contribution can make a real difference in the lives of those
            we serve.
          </p>
          <Button size="lg" className="rounded-full">
            Donate Now
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
