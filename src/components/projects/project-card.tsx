"use client";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

import { Project } from "@/lib/types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Started: {project.startDate.toLocaleDateString()}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <Button variant="outline" className="w-full rounded-full">
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
