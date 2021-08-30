import { useEffect } from "react";
import MainRouter from "./MainRouter";
import "./App.css"
const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader");
const addClass = () => loader.classList.add("loader-hide");
export default function App() {
  useEffect(() => {
    showLoader() 
    addClass();
  }, []);
  return (
    <div className="App">
      <MainRouter />
    </div>
  )
}