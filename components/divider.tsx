"use client";
import React from "react";
import { motion } from "framer-motion";

const Divider = ({
    margin,
    display,
}: {
    margin?: string;
    display?: string;
}) => {
    return (
        <motion.div
            className={`bg-gray-200 ${margin} h-16 w-1 rounded-full ${display} sm:block `}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.125,
            }}
        ></motion.div>
    );
};

export default Divider;
