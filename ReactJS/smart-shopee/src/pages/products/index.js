import { useState } from "react";
import { LinkForm } from "../../components/LinkForm"

export const ProductsPage = () => {
  const [links, setLinks] = useState([])

  const handleCheck = (value) => setLinks([...links, value]);

  return (
    <>
      <p><a href="/">Sang trang nhân tố</a></p>
      <LinkForm links={links} onCheck={handleCheck} />
    </>
  )
}
