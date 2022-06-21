import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'


interface Props {

}

export const Greeting: React.FC<Props> = () => {
        const greeting = "Hello, I'm Taesoo";
        const letters = greeting.split("");
      
        const router = useRouter();
        useEffect(() => {
          const scrollToSection = (id: string) => {
            const violation = document.getElementById(id);
            window.scrollTo({
              top: violation?.offsetTop,
              behavior: "smooth",
            });
          };
          if (router.query.id && typeof router.query.id === "string") {
            scrollToSection(router.query.id);
          }
        }, [router.query]);
      
        return (
          <>
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-4xl mr-1 font-bold"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: idx * 0.1, repeat: Infinity, repeatDelay: 3 }}
              >
                {letter}
              </motion.span>
            ))}
            {/* <motion.span
              className="text-4xl ml-2"
              animate={{ scale: [1, 2, 1], rotate: [0, -30, 30, -30, 30, 0] }}
              transition={{ delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span> */}
          </>
        );
      };


export default Greeting;