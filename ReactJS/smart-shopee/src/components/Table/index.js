export const Table = ({ submittedDataArray = [], handleDelete, handleEdit }) => {
  return submittedDataArray.length > 0 && (
    <div className="result">
      <h2>Submitted Data</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Factor type</th>
            <th>Factor value type</th>
            <th>Weight</th>
            <th>Actions</th>
          </tr>

          {submittedDataArray.map((data, index) => (
            <tr key={index}>

              <td className="center-text">{data.name}</td>
              <td className="center-text">{data.factorType}</td>
              <td className="center-text">{data.factorValueType}</td>
              <td className="center-text">{data.weight}%</td>
              <td className="center-text">
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index, data)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
