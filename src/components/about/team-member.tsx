"use client";
import { motion } from "framer-motion";
import { Linkedin, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { TeamMember as TeamMemberType } from "../../lib/types";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={member.imageUrl}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-1 text-foreground">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{member.title}</p>
          <p className="text-sm text-foreground mb-4">{member.bio}</p>
          <div className="flex space-x-2">
            {member.socialMedia?.linkedin && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={member.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </Button>
            )}
            {member.socialMedia?.twitter && (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={member.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMember;
