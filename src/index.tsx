import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import App from "./app/App.tsx";
import { store } from "./app/store/store.ts";
import { Provider } from "react-redux";
import ErrorBoundary from "./app/providers/ErrorBoundary/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </StrictMode>
);
