import React from 'react'
import './AnimateText.css'

interface AnimateTextProps {
    letterClass: string;
    strArray: string[];
    idx: number;
}

const AnimateText: React.FC<AnimateTextProps> = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimateText