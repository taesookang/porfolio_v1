import React from "react";
import { MdMail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

interface Props {}

export const ContactGuide: React.FC<Props> = () => {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-2xl font-bold">Drop me a line</h1>
      <span className="text-lg font-medium text-brand-black/20">
        I'd love to hear from you.
      </span>
      <p className="paragraph my-6">
        Would you like to discuss a potential project? Maybe you just want to
        stop in and say hi? You can send me a message using this contact form,
        or reaching me using the information below.
      </p>
      <div className="w-full h-[2px] bg-brand-black/10 mb-6" />
      <div className="flex items-center mb-2">
        <MdMail size={20} className="text-brand-secondary mr-2" />
        <a
          href="mailto: tarrak123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-brand-black/60 hover:text-brand-secondary"
        >
          tarrak123@gmail.com
        </a>
      </div>
      <div className="flex items-center mb-2">
        <MdPhone size={20} className="text-brand-secondary mr-2" />
        <span
          onClick={() => {
            window.open("tel: +13475411564");
          }}
          className="text-[12px] text-brand-black/60 hover:text-brand-secondary cursor-pointer"
        >
          1-347-541-1564
        </span>
      </div>
      <div className="flex items-center">
        <FaLinkedin size={20} className="text-brand-secondary mr-2" />
        <a
          href="https://www.linkedin.com/in/taesoo-kang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-brand-black/60 hover:text-brand-secondary cursor-pointer"
        >
          https://www.linkedin.com/in/taesoo-kang
        </a>
      </div>
    </div>
  );
};

export default ContactGuide;
