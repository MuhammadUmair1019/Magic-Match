import { useState, useEffect } from "react"
import CardListing from "../Card/CardListing";
import TopBar from "../components/TopBar/TopBar"
import "./Home.css"

export default function Home() {
    const [card, setCard] = useState([]);
    const [turn, setTurn] = useState(0)
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);


    const cardImages = [
        { "src": "./images/helmet-1.png", matched: false },
        { "src": "./images/portion-1.png", matched: false },
        { "src": "./images/ring-1.png", matched: false },
        { "src": "./images/scroll-1.png", matched: false },
        { "src": "./images/shield-1.png", matched: false },
        { "src": "./images/sword-1.png", matched: false },
    ]


    const suffleCard = () => {
        const card = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setCard(card)
    }

    const handleClick = (card) => (e) => {
        cardOne ? setCardTwo(card) : setCardOne(card)
    }

    useEffect(() => {
        if (cardOne && cardTwo) {
            if (cardOne.src === cardTwo.src) {
                setCard(prevCard =>
                    prevCard.map(card => card.src === cardOne.src ? { ...card, matched: true } : card))
            } else {
                setTimeout(() => resetCard(), 1000)

            }
        }
    }, [cardOne, cardTwo])

    const resetCard = () => {
        setCardOne(null)
        setCardTwo(null)
        setTurn(prev => prev + 1);
    }

    console.log(card)

    return (
        <div className="home">
            <TopBar suffleCard={suffleCard} />
            <CardListing  {...{ card, handleClick, cardOne, cardTwo }} />
        </div>
    )
}
