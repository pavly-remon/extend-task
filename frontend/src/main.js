import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import store from "./store/store.ts";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }));
