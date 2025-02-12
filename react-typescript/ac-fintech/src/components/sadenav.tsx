import { UseData } from "../context/dataContext";

const Sadenav = () => {
      const { data } = UseData();
    
      console.log(data);

    return (<></>)
};

export default Sadenav;
