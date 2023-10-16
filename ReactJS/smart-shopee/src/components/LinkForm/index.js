import React from 'react';
import { useRef } from "react";

export const LinkForm = ({ onCheck }) => {
  const ref = useRef()

  const handleAdd = () => {
    if (!!ref.current.value) {
      onCheck(ref.current.value);
      ref.current.value = '';
    }
  }

  return (
    <form action="# " className="App">
      <div>
        <input
          className='mt-8 pl-3 pr-10 py-2 border-gray- shadow-sm border-gray-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md'
          autoFocus placeholder="Nhập đường link shopee..."
          ref={ref}
          required="required"
        />
      </div>
      <div>
        <button 
        className='mt-8 w-full rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        type="submit" onClick={handleAdd}>Thêm
        </button>
      </div>
    </form>
  )
}
