import React,{FC, useState} from 'react';


export const Test: FC<{}> = () => {
    const [showContent, setShowContent] = useState(false); 

    const content = showContent && <p>i am showing here</p>;
    return(
        <div>
            {content}
            <button onClick={() => {setShowContent(val => !val)}}></button>
        </div>
    )
}