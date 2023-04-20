import { Link } from "react-router-dom";


const Page404 = () => {

    
    return (
        <div className="conatiner">
            <div className="page404">
                <h1 className="page404__title title">Page doesn`t exist...</h1>
                <Link to="/" className="page404__link">Click to get starting page</Link>
            </div>
        </div>
    )
}

export default Page404;