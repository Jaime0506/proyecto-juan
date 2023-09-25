import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import "./style.css"

function App() {
    return (
        <HashRouter>
            <AppRouter />
        </HashRouter>
    );
}

export default App;
