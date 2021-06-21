import { webPages } from "../../data/WebPageObjects";

const WebPages = () => {
    return (
        <div className='page'>
            <div className='grid-three'>
                {webPages.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    );
};

export default WebPages;
