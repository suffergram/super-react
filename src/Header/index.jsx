import "./style.css";

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <p className="logo"><strong>netflix</strong>roulette</p>
                <button className="add-movie">+ ADD MOVIE</button>
                <div>
                    <h1>FIND YOUR MOVIE</h1>
                    <div className="search-line">
                        <input placeholder="What do you want to watch?"></input>
                        <button className="confirm">SEARCH</button>
                    </div>
                </div>
            </div>
            <div className="header-background"><div></div></div>
        </div>
    );
}