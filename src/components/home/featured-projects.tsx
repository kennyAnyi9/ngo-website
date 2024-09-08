"use client";
import { motion } from "framer-motion";
import React from "react";

import { Project } from "@/lib/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const projectsData: Project[] = [
  {
    id: "1",
    title: "Clean Water Initiative",
    description: "Providing clean water to rural communities.",
    imageUrl: "/images/project1.jpg",
    category: "Water",
    startDate: new Date("2024-01-01"),
    isFeatured: true,
  },
  {
    id: "2",
    title: "Education for All",
    description: "Building schools and providing education resources.",
    imageUrl: "/images/project2.jpg",
    category: "Education",
    startDate: new Date("2024-02-15"),
    isFeatured: true,
  },
  // Add more projects as needed
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
