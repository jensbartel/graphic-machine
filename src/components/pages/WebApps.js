import { webApps } from "../../data/WebAppObjects";

const WebApps = () => {
    return (
        <div className='page'>
            <div className='grid-three'>
                {webApps.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    );
};

export default WebApps;
