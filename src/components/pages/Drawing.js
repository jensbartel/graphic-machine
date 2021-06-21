import { drawings } from "../../data/DrawingObjects";

const Drawing = () => {
    return (
        <div className='page'>
            <div className='grid-three'>
                {drawings.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Drawing
