import React from 'react';
import { useRef } from "react";

export const LinkForm = ({ links, onCheck }) => {
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
        <ul>
          {links.map((link => <li key={link}>{link}</li>))}
        </ul>
      </div>
      <div>
        <input
          autoFocus placeholder="Nhập đường link shopee..."
          ref={ref}
          required="required"
        />
      </div>
      <div>
        <button type="submit" onClick={handleAdd}>Thêm</button>
      </div>
    </form>
  )
}