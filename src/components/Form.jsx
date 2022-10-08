import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [flavor, setFlavor] = useState("");
  const [language, setLanguage] = useState("")
  const [terms, setTerms] = useState(false)
  const [form,setForm]=useState({})

  const onChangeForm=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  console.log(terms);
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("el formulario fue enviado")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onChangeForm}
        />
        <p>Elije tu sabor JS favorito</p>
        <input
          type="radio"
          id="react"
          name="flavor"
          value="react"
          onChange={onChangeForm}
        />
        <label htmlFor="react">react</label>
        <input
          type="radio"
          id="angular"
          name="flavor"
          value="angular"
          onChange={onChangeForm}
        />
        <label htmlFor="angular">angular</label>
        <input
          type="radio"
          id="viu"
          name="flavor"
          value="vanilla"
          defaultChecked
          onChange={onChangeForm}
        />
        <label htmlFor="viu">viu</label>
        <input
          type="radio"
          id="svelte"
          name="flavor"
          value="svelte"
          onChange={onChangeForm}
        />
        <label htmlFor="svelte">svelte</label>
        <p>Elije tu lenguaje favorito</p>
        <select name="language" onChange={onChangeForm}>
          <option value="">-----</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <label htmlFor="terms">Terminos</label>
        <input type="checkbox"  id="terms" onChange={(e)=>setTerms(e.target.checked)}/>
        <input type="submit" />

      </form>
    </div>
  );
}

export default Form;
