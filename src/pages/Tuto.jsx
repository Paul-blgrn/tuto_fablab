import API from '../services/API';
import { useEffect, useState } from 'react';
import { useParams  } from "react-router-dom";

import TutoPage from '../component/tuto/TutoPage';

import '../App.css';

const Tuto = () => {
    // get id in adress bar
    const { id1, id2 } = useParams();
    //console.log("id1 = " + id1 + " id2 = " + id2)

    const [data, setData] = useState();

    const getData = async () => {
		const results = await API.get(``);
        setData(results.data);
    };

    useEffect(() => {
		  getData().catch((err) => console.log(err));
		  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

      //console.log(data)

    return(
        data && 
            <TutoPage 
                tutoDetail={data[id1 -1].subButtons[id2 -1]} 
            />
    );
}

export default Tuto;