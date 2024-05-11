import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  interface IName {
    id:number
    name:string,
  }
  const [value,setValue] = useState("")
  const [mass, setMass] = useState<IName[]>([])
  const [loading, setLoading]=useState(true)

  const getData = async () => {
    try {
      const { data } = await axios.get<IName[]>(
        `https://api-v2.elchocrud.pro/api/v1/78db68368031929d7a7d7dc826cc56e5/product-v2`
      );
      console.log(data);
      setMass(data)
    } catch (e) {
      console.error(e);
    }finally{
      setLoading(false)
    }
  };
  const postData = async ()=>{
    try {
      const { data } = await axios.post<IName[]>(
        `https://api-v2.elchocrud.pro/api/v1/78db68368031929d7a7d7dc826cc56e5/product-v2`,{name:value}

      );
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
useEffect(()=>{
  getData()

},[])
  return <div className="container">
    <div className="lesson" >
      <input className="inp" type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button className="btn" onClick={()=>postData()}>Data</button>
    {
      loading ? <h1>loading</h1> : <div>
        {
          mass.map((el)=>(
            <div>
              <h1>{el.name}</h1>
              </div>
          ))
        }
      </div>
    }
    </div>
  </div>;
};

export default App;
