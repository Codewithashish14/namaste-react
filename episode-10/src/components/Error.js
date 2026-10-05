import {useRouteError} from "react-router";


const Error = () => {
    const err = useRouteError();
    console.error(err);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong.</h2>
            {err.status && <h3>{err.status} : {err.statusText}</h3>}
            {err.message && <p>{err.message}</p>}
        </div>
    );
}

export default Error;