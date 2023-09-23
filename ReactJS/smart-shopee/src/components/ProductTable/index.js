import React from 'react';

export const ProductTable = ({ alinks }) => {
  return (
    <>
      <table >
        <tbody>
          {alinks.map(link => (
            <tr>
              <td>{link}</td>
              <td>TC</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  )
}
