import React, { useState } from "react";
import { LinkForm } from "../../components/LinkForm";
import { ProductTable } from "../../components/ProductTable";

export const ProductsPage = () => {
  const [links, setLinks] = useState([])

  const handleCheck = (value) => setLinks([...links, value]);
  const handleDelete = (index) => {
    if (window.confirm('Bạn có muốn xóa ?') == true) {
      setLinks(links.filter((_, idx) => idx !== index))
    }
  }


  return (
    <>
        <a  className= "text-orange-400" href="/">Sang trang nhân tố</a>
      <ProductTable alinks={links} onDelete={handleDelete} />
      <LinkForm links={links} onCheck={handleCheck} />
    </>
  )
}