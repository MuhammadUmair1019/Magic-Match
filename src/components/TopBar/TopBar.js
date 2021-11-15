import "./TopBar.css"

export default function TopBar({ suffleCard }) {
    return (
        <div className="topbar">
            <h1> Magic Match</h1>
            <button onClick={suffleCard}> New Game</button>
        </div>
    )
}
