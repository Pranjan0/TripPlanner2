import React from 'react'

const Browseplaces = () => {
    const Track = () => {

        const url="http://localhost:5000";
      
        const [issues, setIssues] = useState([]);
        const [loading, setLoading] = useState(false);
      
        const getDataFromBackend = async () => {
          setLoading(true);
          const res = await fetch(url+'/issue/getall');
          const data = await res.json();
          setIssues(data);
          setLoading(false);
          console.log(data);
        }
      
        useEffect(() => {
          getDataFromBackend();
        }, [])
    }
  return (
    <div>Browseplaces</div>
  )
}

export default Browseplaces