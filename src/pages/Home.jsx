import data from "../data/buttons.json";
import Button from '../component/homePage/HomePage';
import { useState } from "react";
import '../App.css'

const Home = () => {
    return (
        <div className="Home-container">
            <h1 className="Home-Title">Tutoriels</h1>
            <hr />
            <div className="Home-ListButtons">
                {data
                    .sort((a,b) => a.type > b.type ? "machine" : "logiciel")
                    .map((info) => (
                        <Button info={info} />
                    ))
                }
                
            </div>
        </div>
    );
}

export default Home;