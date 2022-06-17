import React from 'react'

interface Props {
    id: string,
    children: React.ReactNode
}

export const Section: React.FC<Props> = ({ id, children }) => {
    return (
        <section id={id} className="w-full min-h-screen flex">
            {children}
        </section>
    );
}

export default Section;