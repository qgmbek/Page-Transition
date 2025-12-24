"use client";

// import { AnimatePresence } from "framer-motion";
import Land from "./land";
import "./App.scss";

export default function Home() {
  const imageDetails = {
    width: 524,
    height: 550,
  };

  return (
    <>
      <Land imageDetails={imageDetails} />
    </>
  );
}
