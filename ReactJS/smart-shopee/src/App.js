import { useState } from "react"
import { Table } from "./Table"
import { Form } from "./Form"

function App() {
  const [links, setLinks] = useState([])

  const handleCheck = (value) => {
    setLinks([...links, value])
  }

  return (
    <>
      <Form handleCheck={handleCheck} links={links} />
      <Table alinks={links} />
    </>
  );
}
export default App;