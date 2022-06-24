import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    title: string,
    level: number
}

export const Skill: React.FC<Props> = ({ title, level }) => {
    return (
        <div className="flex flex-col w-full mb-6">
                <h3 className='capitalize mb-2'>{title}</h3>
                <div className="relative w-full h-1 bg-slate-200 rounded-full">
                  <motion.div
                    className="absolute rounded-l top-0 left-0 bg-brand-secondary h-1"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${level}%`,
                    }}
                    viewport={{once: true}}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
    );
}

export default Skill;