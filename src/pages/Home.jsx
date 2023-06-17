import React from 'react';
//import axios from 'axios';

import { useEffect, useState } from "react";

import Button from '../component/homePage/HomePage';
import API from '../services/API';

import '../App.css';

const Home = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const results = await API.get(``);
        setData(results.data);
    };

    useEffect(() =>{
        getData();
    }, []);

    // const editJson = () => {
    //     axios.get(`http://localhost:3000/data/lorem.json`)
    //          .then((response)=> {
    //             let someData = JSON.stringify(response);
    //             console.log(JSON.parse(someData));
    //             /* fs.writeFile("../../public/data/lorem2.json", someData, (err) => {
    //                 if (err) console.log('Error writing file:', err);
    //             }); */
    //          });
    // }

    return (
        <div className="Home-container">
            {/* Title 1 */}
            <hr />
            <h2 className="Home-Title2">Tutoriel Logiciel:</h2>
            <hr/>

            {/* BUTTONS 1 */}
            <div className="Home-ListButtons">
                {
                    // call data
                    data
                    // map all
                    .map((info) =>{
                        return(
                            (
                            info.type === "logiciel" 
                            &&
                                <Button key={info.id} info={info} />
                            )
                        );
                    })
                }
            </div>
            
            {/* SEPARATOR */}
            <div className="separator2"></div>
            
            {/* Title 2 */}
            <hr/>
            <h2 className="Home-Title2">Tutoriel Machine:</h2>
            <hr/>

            {/* BUTTONS 2 */}
            <div className="Home-ListButtons">
                {
                    // call data
                    data
                    // map all
                    .map((info) =>{
                        return(
                            (
                            info.type === "machine" 
                            &&
                                <Button key={info.id} info={info} />
                            )
                        );
                    })
                }
            </div>

            {/* BUTTON TEST */}
            {/* <div>
                <button onClick={editJson}>edit json test</button>
            </div> */}
        </div>
    );
}

export default Home;