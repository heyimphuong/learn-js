import React, { useState } from 'react';
import './compare'

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

        // In ra các bảng tương ứng với dữ liệu
        setSubmittedData(formData);
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name:</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập tên..."
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <span className="required">*</span>
                    </label>
                    <label>
                        <p>Factor type:</p>
                        <input
                            type="text"
                            name="factorType"
                            placeholder="Nhập loại..."
                            value={formData.factorType}
                            onChange={handleChange}
                            required
                        />
                        <span className="required">*</span>
                    </label>
                    <label>
                        <p>Factor value type:</p>
                        <input
                            type="text"
                            name="factorValueType"
                            placeholder="Nhập loại giá trị..."
                            value={formData.factorValueType}
                            onChange={handleChange}
                            required
                        />
                        <span className="required">*</span>
                    </label>
                    <label>
                        <p>Weight:</p>
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
                        <span className="required">*</span>
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
                                <td>{submittedData.name}</td>
                            </tr>
                            <tr>
                                <th>Factor type</th>
                                <td>{submittedData.factorType}</td>
                            </tr>
                            <tr>
                                <th>Factor value type</th>
                                <td>{submittedData.factorValueType}</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>{submittedData.weight}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
