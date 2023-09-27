import React, { useState } from "react";
import { LinkForm } from "../../components/LinkForm"

export const ProductsPage = () => {
  const [links, setLinks] = useState([])

  const handleCheck = (value) => setLinks([...links, value]);

  return (
    <>
      <p><a href="/">Sang trang nhân tố</a></p>

      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <LinkForm links={links} onCheck={handleCheck} />
    </>
  )
}