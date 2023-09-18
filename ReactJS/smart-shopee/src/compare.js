import React, { useState } from 'react';
import './compare.css'

//Để thêm validFactorTypes 
const validFactorTypes = [
    {
        value: "impact",
        label: 'Ảnh hưởng'
    },
    {
        value: "effort",
        label: 'Nỗ lực'
    },
    {
        value: "custom",
        label: 'Cá nhân hóa'
    },
    {
        value: "tuy_chon",
        label: 'Tùy chọn'
    },
];

const validFactorValueTypes = [
    {
        value: "review",
        label: 'Review'
    },
    {
        value: "totalReview",
        label: 'Total Review'
    }
];

export const Compare = () => {
    const [formData, setFormData] = useState({
        name: '',
        factorType: '',
        factorValueType: '',
        weight: ''
    });

    const [submittedData, setSubmittedData] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, factorType,factorValueType, weight } = formData;

        if (name.trim() === '' || name.length > 30) {
            alert('Tên không hợp lệ!')
            return;

        }
        if (!validFactorTypes.map(type => type.value).includes(factorType)) {
            alert('Loại không hợp lệ.')
            return;
        }

        if (!validFactorValueTypes.map(type => type.value).includes(factorValueType)) {
            alert('Factor value type không hợp lệ!')
            return;

        }
        if (isNaN(weight) || weight < 1 || weight >= 100) {
            alert('Trọng số không hợp lệ!');
            return;

        }
        setSubmittedData(formData)
    };

    // console.log({ formData })
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name:<span className="required">*</span></p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập tên..."
                            value={formData.name}
                            onChange={handleChange}
                            required
                            maxLength={30}
                        />

                    </label>
                    <label>
                        <p>Factor type:<span className="required">*</span></p>
                        <select
                            type="text"
                            name="factorType"
                            value={formData.factorType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Chọn loại --</option>
                            {validFactorTypes.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        <p>Factor value type:<span className="required">*</span></p>
                        <select
                            type="text"
                            name="factorValueType"
                            value={formData.factorValueType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Chọn loại --</option>
                            {validFactorValueTypes.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        <p>Weight:<span className="required">*</span></p>
                        <input
                            type="number"
                            name="weight"
                            placeholder="Nhập trọng số..."
                            value={formData.weight}
                            onChange={handleChange}
                            required
                            min="1"
                            max="100"
                        />

                    </label>

                </fieldset>
                <button type="submit">Submit</button>
            </form>

            {/* Hiển thị kết quả */}
            {submittedData && (
                <div className="result">
                    <h2>Submitted Data</h2>
                    <table>
                        <tbody>

                            <tr>
                                <th>Name</th>
                                <th>Factor type</th>
                                <th>Factor value type</th>
                                <th>Weight</th>
                            </tr>
                            <tr>
                                <td className="center-text">{submittedData.name}</td>
                                <td className="center-text">{submittedData.factorType}</td>
                                <td className="center-text">{submittedData.factorValueType}</td>
                                <td className="center-text">{submittedData.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
