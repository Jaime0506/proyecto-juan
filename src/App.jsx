import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

function App() {
    return (
        <HashRouter>
            <AppRouter />
        </HashRouter>
    );
}

export default App;
