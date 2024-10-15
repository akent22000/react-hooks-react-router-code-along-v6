import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";
//Note that we're importing the useRouteError hook in addition to our NavBar component. 

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Whoops! Something went wrong!</h1>
            </main>
        </>
    );
}

export default ErrorPage;