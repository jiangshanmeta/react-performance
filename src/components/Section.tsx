import { useState } from "react";

interface SectionProps {
    children: React.ReactNode;
    title: string;
}

export const Section = ({ children, title, }: SectionProps) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <section className="code-section">
            <h2>{title}  <button onClick={() => setIsShow((is) => !is)} >trigger</button>   </h2>

            {
                isShow && (
                    <>
                        <hr />
                        <div>{children}</div>

                    </>
                )
            }

        </section>
    )
}