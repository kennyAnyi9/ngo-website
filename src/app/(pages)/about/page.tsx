"use client";
import TeamMember from "@/components/about/team-member";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember as TeamMemberType } from "../../../lib/types";

const teamMembers: TeamMemberType[] = [
  {
    id: "1",
    name: "John Doe",
    title: "Executive Director",
    imageUrl: "/images/ed.jpeg",
    bio: "John has been leading our organization for over a decade, bringing 20 years of experience in non-profit management.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/Johndoe",
      twitter: "https://twitter.com/Johndoe",
    },
  },
  // Add more team members here...
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-foreground">About Us</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            We are dedicated to making a positive impact in our community and
            beyond. Our mission is to empower individuals and create sustainable
            change.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 text-foreground">
                Our NGO is committed to addressing critical social and
                environmental issues through innovative solutions and community
                engagement.
              </p>
              <p className="text-lg mb-4 text-foreground">
                We believe in the power of collaboration and strive to create
                partnerships that amplify our impact and reach.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/images/ngo.jpeg"
                alt="Our mission in action"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Join Our Cause
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Together, we can make a difference. Join us in our mission to create
            a better world for all.
          </p>
          <Button size="lg" className="rounded-full">
            Get Involved
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;
