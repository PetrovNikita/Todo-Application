import React, { useEffect, useRef, useState } from "react";

import './footer.css';

export const Footer:React.FC = () => {
    const footerElem = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<object>({});

    useEffect(() => {
        const prevBottom: number = footerElem.current!.previousElementSibling!.getBoundingClientRect().bottom;
        const footerHeight: number = parseInt(getComputedStyle(footerElem.current!).height);
        
        setStyle({
            top: (document.documentElement.clientHeight - prevBottom - footerHeight) + 'px'
        });
    }, []);

return <div className="footer" style={style} ref={footerElem}>All right reserved.</div>;
}