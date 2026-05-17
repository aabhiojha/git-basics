import {useEffect, useState} from "react";

const Card = ({title, rating, isCool, actors}) => {
    const [hasLiked, setHasLiked] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);

    useEffect(() => {
        console.log(`card rendered`);
    }, []);

    return <>
        <div className="m-20 border-2 p-3 rounded-2xl bg-blue-500 text-white text-2xl"
             onClick={() => setCount(count + 1)}>
            <div>
                 <h2>{title} - {count ? count : null}</h2>

                <button onClick={() => {
                    setHasLiked(!hasLiked);
                    console.log(hasLiked)
                }}>{hasLiked ? "❤" : "💔 "}</button>

            </div>
            <p>{actors.map((actor, index) => <span key={index}> {actor.name}</span>)}</p>
        </div>
    </>
}

export default Card;
