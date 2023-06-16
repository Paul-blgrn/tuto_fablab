import API from '../services/API';
import { useEffect, useState } from 'react';
import { useParams  } from "react-router-dom";
import '../App.css';

//import axios from 'axios';
import TutoPage from '../component/tuto/TutoPage';

const Tuto = () => {
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

    console.log(data);

    return <div>{data && <TutoPage infoDetail={data[id -1]} />}</div>;
}

export default Tuto;