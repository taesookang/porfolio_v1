import React from 'react'
import { FadeInDiv } from '../components'

interface Props {
    title: string,
    children: React.ReactNode
}

export const SectionLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <FadeInDiv>
        <div className="w-1/3 flex">
            <h2>{title}</h2>
          </div>
          <div className="w-2/3 flex">
            {children}
          </div>
        </FadeInDiv>
          
    );
}

export default SectionLayout;