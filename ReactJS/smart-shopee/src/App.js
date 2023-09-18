import React from 'react';
import { useState } from "react"
import { Table } from "./Table"
import { Form }  from "./Form";
import { Compare } from "./compare"

export function App() {


  const [links, setLinks] = useState([])

  const handleCheck = (value) => {
    setLinks([...links, value])
  }

 

  return (
    <>
      <Form handleCheck={handleCheck} links={links} />
      <Table alinks={links} />
      <Compare compare={handleCheck} />
    </>
  );
}

 export default App;