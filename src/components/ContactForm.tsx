import React, { useState, useRef, FormEvent } from "react";
import { CTA } from "../components";

import emailjs from "@emailjs/browser";

interface Props {
  setSnackBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactForm: React.FC<Props> = ({ setSnackBarOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_ACCESS_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setSnackBarOpen(true);
          }
        },
        (error) => {
          console.log(error.text);
          window.alert(error.text);
        }
      );
  };

  return (
    <div className="flex w-full flex-1">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full flex-col items-center "
      >
        <div className="w-full">
          <label htmlFor="#name">Name</label>
          <input
            id="name"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="#email">Email</label>
          <input
            id="email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="#message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <CTA title="Send" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
