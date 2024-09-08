"use client";
import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { DonationCounterData } from "../../lib/types";

const counterData: DonationCounterData = {
  totalDonations: 500000,
  donorsCount: 1000,
  lastUpdated: new Date(),
};

const DonationCounter: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="p-6 rounded-lg bg-card shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              Total Donations
            </h3>
            <p className="text-4xl font-bold text-foreground">
              $
              <CountUp
                end={counterData.totalDonations}
                duration={2.5}
                separator=","
              />
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg bg-card shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              Number of Donors
            </h3>
            <p className="text-4xl font-bold text-foreground">
              <CountUp
                end={counterData.donorsCount}
                duration={2.5}
                separator=","
              />
            </p>
          </motion.div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {counterData.lastUpdated.toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default DonationCounter;
