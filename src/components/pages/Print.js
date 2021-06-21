import { print } from "../../data/PrintObjects";

const Print = () => {
    return (
        <div className='page'>
            <div className='grid-two'>
                {print.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Print
