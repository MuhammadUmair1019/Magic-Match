import Card from "./Card";


export default function CardListing({ card, handleClick, cardOne, cardTwo }) {
    return (
        <div className="card-grid"> 
            {card && card.map(item => (
                <div className="card-item">
                    <Card {...{item, handleClick}} flipped ={item === cardOne || item === cardTwo || item.matched} />
                </div>
            ))}
        </div>
    )
}