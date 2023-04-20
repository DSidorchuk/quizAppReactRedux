import { Link } from "react-router-dom";


const NoPlayer = () => {
    return (
        <div className="no-player">
            <h2 className="no-player__title">Seems there isn`t any players</h2>
            <Link to="/">
                <button className="button">Go to start</button>
            </Link>
        </div>
    )
}

export default NoPlayer;