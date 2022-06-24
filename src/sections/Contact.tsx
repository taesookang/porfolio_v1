import React, { useState, useEffect } from "react";
import {
  Section,
  SectionLayout,
  Snackbar,
  ContactForm,
  ContactGuide,
} from "../components";

import { AnimatePresence } from "framer-motion";

export const Contact: React.FC = () => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    if (snackBarOpen) {
      setTimeout(() => {
        setSnackBarOpen(false);
      }, 4000);
    }
  }, [snackBarOpen]);

  return (
    <>
      <Section id={"contact"}>
        <SectionLayout title="Contact">
          <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center md:my-24">
            <ContactGuide />
            <ContactForm setSnackBarOpen={setSnackBarOpen} />
          </div>
        </SectionLayout>
      </Section>
      <AnimatePresence>
        {snackBarOpen && <Snackbar setSnackBarOpen={setSnackBarOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Contact;
