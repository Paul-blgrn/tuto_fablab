import API from '../services/API';
import { useEffect, useState } from 'react';
import { useParams  } from "react-router-dom";
import '../App.css';

//import axios from 'axios';
import AidePage from '../component/aide/AidePage';

const Aide = () => {
    // get id in adress bar
    const { id } = useParams();

    const [data, setData] = useState();

    const getData = async () => {
		  const results = await API.get(``);
      setData(results.data);
    };

    useEffect(() => {
		  getData().catch((err) => console.log(err));
		  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

    //console.log(data);

    return (data && <AidePage infoDetail={data[id -1]} />);
}

export default Aide;