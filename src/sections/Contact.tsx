import React, { useState, useRef, FormEvent } from "react";
import { Section, SectionLayout, CTA } from "../components";
import { MdMail, MdPhone,  } from "react-icons/md";
import { FaLinkedin  } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Section id={"contact"}>
      <SectionLayout title="Contact">
        <div className="w-full flex gap-16 items-center justify-center my-24">
          <div className="flex flex-1 flex-col">
            <h1 className="text-2xl font-bold">Drop me a line</h1>
            <span className="text-lg font-medium text-brand-black/20">
              I'd love to hear from you.
            </span>
            <p className="paragraph my-6">
              Would you like to discuss a potential project? Maybe you just want
              to stop in and say hi? You can send me a message using this
              contact form, or reaching me using the information below
            </p>
            <div className="w-full h-[2px] bg-brand-black/10 mb-6" />
            <div className="flex items-center mb-2">
              <MdMail size={20} className="text-brand-primar mr-2" />
              <a
                href="mailto: tarrak123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-brand-black/60 hover:text-brand-black"
              >
                tarrak123@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <MdPhone size={20} className="text-brand-primar mr-2" />
              <span
                onClick={() => {
                  window.open("tel: +13475411564");
                }}
                className="text-[12px] text-brand-black/60 hover:text-brand-black cursor-pointer"
              >
                1-347-541-1564
              </span>
            </div>
            <div className="flex items-center">
              <FaLinkedin size={20} className="text-brand-primar mr-2" />
              <a
                href="https://www.linkedin.com/in/taesoo-kang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-brand-black/60 hover:text-brand-black cursor-pointer"
              >
                https://www.linkedin.com/in/taesoo-kang
              </a>
            </div>
          </div>
          <div className="flex flex-1">
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
                <CTA title="Send" scrollToId="" />
              </div>
            </form>
          </div>
        </div>
      </SectionLayout>
    </Section>
  );
};

export default Contact;
