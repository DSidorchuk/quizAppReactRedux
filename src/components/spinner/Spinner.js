import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        marginTop: "200px",
    }

    return (
        <PacmanLoader cssOverride={override} color="rgb(229,164,255)" size={30}/>
    )

}

export default Spinner;

