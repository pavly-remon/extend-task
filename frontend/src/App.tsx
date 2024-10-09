import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FC} from "react";
import Input from "./components/Input.tsx";

const App: FC = () => {

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React (TS)</h1>
            <h2>Template</h2>
            <Input defaultValue={"Init"}/>

        </>
    )
}

export default App;
