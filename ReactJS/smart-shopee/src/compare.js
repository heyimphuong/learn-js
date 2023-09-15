import { useRef } from "react"

export const Compare = ({ handleCheck }) => {
    const ref = useRef()

    const refName = useRef()
    const refValuetype = useRef()
    const refWeight = useRef()
    const handleSubmit = () => {
        if (!!ref.current.value) {
            handleCheck(ref.current.value);
            ref.current.value = '';
        }
    }
    return (
        <div className="wrapper">
            <from onClick={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Tên </p>
                        <input placeholder="Nhập tên..." ref={ref} required="required" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </from>
        </div>
    )
}