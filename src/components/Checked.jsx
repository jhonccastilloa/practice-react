import React, { useState } from "react";

function Checked() {
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setValue([...value,e.target.value]);
    }else{
        console.log(e.target.value);
        setValue(value.filter((el)=>el!==e.target.value))
    }

  };
  return (
    <div>
      <input type="text" name="text" defaultValue={value} />

      <br />
      <input
        type="checkbox"
        name="vehicle1"
        value="Bike"
        onChange={handleChange}
      />
      <label htmlFor="vehicle1"> I have a bike</label>
      <br />
      <input
        type="checkbox"
        name="vehicle2"
        value="Car"
        onChange={handleChange}
      />
      <label htmlFor="vehicle2"> I have a car</label>
    </div>
  );
}

export default Checked;
