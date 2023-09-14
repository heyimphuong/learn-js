import { useRef } from "react"

export const Form = ({ links, handleCheck }) => {
    const ref = useRef()

    const handleAdd = () => {
        if (!!ref.current.value) {
            handleCheck(ref.current.value);
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
                <input autoFocus placeholder="Nhập đường link shopee..." ref={ref} required="required" />
            </div>
            <div>
                <button type="submit" onClick={handleAdd}>Thêm </button>
            </div>
        </form>
    )
}