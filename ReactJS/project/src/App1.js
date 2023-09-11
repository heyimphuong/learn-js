import { useState } from "react";

function App() {
  const [links, setLinks] = useState([''])

  const handleLinkChange = () => {
    setLinks([...links, 'aa'])
  }

  const handleReset = () => {
    setLinks([])
  }

  const handleCompare = () => {
    console.log({ links })   
  }


  return (
    <div className="App">
      <div className="links">
        {links.map((link, idx) => (
          <input key={idx} placeholder="Nhập đường link shopee..." />
        ))}
      </div>
      <div>
        <button type="button" onClick={handleLinkChange}>Thêm sản phẩm</button>
        <button type="button" onClick={handleCompare}>Bắt đầu so sánh</button>
        <button type="button" onClick={handleReset}>Đặt lại</button>
      </div>
    </div>

  )
}
export default App;
