import ReactDOM from "react-dom/client";
import './index.css'
import App from './app';
import Navbar from "./components/Navbar";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <Navbar/>
     <App/>
    </>
);