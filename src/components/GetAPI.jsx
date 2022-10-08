import React, { useState, useEffect } from "react";




function DatosApi({el}) {
    return(
        <div >
            <p>{el.name}</p>


        </div>
        
    )
}

function getApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        data.map((el) => console.log(el.name));
        setData(data);
      });
  }, []);

  return (
    <div>
      {!data.length
        ? "no hay datos"
        : data.map((el) =><DatosApi key={el.id} el={el}/> )}
    </div>
  );
}

export default getApi;
