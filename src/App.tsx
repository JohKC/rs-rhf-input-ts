import { useState } from "react";
import { Container } from "react-bootstrap";
import { CatForm } from './CatForm';
import { Cat } from "./interfaces";
import { Header } from "./common";

export const App = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    return (
        <>
            <Header />
            <Container className="mt-4">
                <CatForm onCatSubmit={newCat => setCats(oldCats => [...oldCats, newCat])} />
                <pre className="mt-2">{JSON.stringify(cats, null, 2)}</pre>
            </Container>
        </>
    )
}
