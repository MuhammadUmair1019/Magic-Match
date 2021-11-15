import "./Card.css"

export default function Card({ item, handleClick, flipped}) {
    return (
        <div className={flipped ? "flipped" : ""}>
            <div className="card-image" >
                <img src={item.src} alt="not found" className="front"/>
                <img src="./images/cover.png" alt="not found" className="back"  onClick={handleClick(item)} />
            </div>
        </div>
    )
}
