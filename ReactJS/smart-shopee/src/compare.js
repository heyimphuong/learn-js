import React, { useState } from 'react';
import './compare.css';

// Để thêm validFactorTypes 
const validFactorTypes = [
  {
    // TODO: This line will bring bugs in the future
    value: "Ảnh hưởng",
    label: 'Ảnh hưởng'
  },
  {
    value: "Nỗ lực",
    label: 'Nỗ lực'
  },
  {
    value: "Cá nhân hóa",
    label: 'Cá nhân hóa'
  },
  {
    value: "Tùy chọn",
    label: 'Tùy chọn'
  },
];

const validFactorValueTypes = [
  {
    value: "Đánh giá",
    label: 'Đánh giá'
  },
  {
    value: "Tổng đánh giá",
    label: 'Tổng đánh giá'
  }
];

export const Compare = () => {

  const [submittedDataArray, setSubmittedDataArray] = useState([]);
    // TODO: Fake data here, remove on production


  const [formData, setFormData] = useState({
    name: '',
    factorType: '',
    factorValueType: '',
    weight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };
  const [formErrors, setFormErrors] = useState({
    name: '',
    factorType: '',
    factorValueType: '',
    weight: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, factorType, factorValueType, weight } = formData;

    const newFormErrors = {
      name: '',
      factorType: '',
      factorValueType: '',
      weight: '',
    };

    if (name.trim() === '' || name.length > 20) {
      newFormErrors.name = 'Tên là bắt buộc và có độ dài không quá 20 ký tự.';

    }
    if (!validFactorTypes.map(type => type.value).includes(factorType)) {
      newFormErrors.factorType = 'Vui lòng chọn Factor type trong bảng.'

    }

    if (!validFactorValueTypes.map(type => type.value).includes(factorValueType)) {
      newFormErrors.factorValueType = 'Vui lòng chọn Factor value type trong bảng.'


    }
    if (isNaN(weight) || weight < 1 || weight >= 100) {
      newFormErrors.weight = 'Vui lòng nhập trọng số từ 1 đến 100.'


    }
    setFormErrors(newFormErrors);
    if (Object.values(newFormErrors).some(error => error !== '')) {
      return;
    }

    setSubmittedDataArray([...submittedDataArray, formData]);

    setFormData({
      name: '',
      factorType: '',
      factorValueType: '',
      weight: ''
    });
  };

  const handleDelete = (index) => {
    setSubmittedDataArray(submittedDataArray.filter((_, idx) => idx !== index))
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset >
          <label>
            <p>Name:<span className="required">*</span></p>
            <input
              type="text"
              name="name"
              placeholder="Nhập tên..."
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={20}
            />
            <span className="error"> {formErrors.name}</span>
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
                <option
                  key={type.value}
                  value={type.value}
                >
                  {type.label}
                </option>
              ))}
            </select>
            <span className="error"> {formErrors.factorType}</span>
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
                <option
                  key={type.value}
                  value={type.value}
                >
                  {type.label}
                </option>
              ))}
            </select>
            <span className="error"> {formErrors.factorValueType}</span>
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
            <span className="error"> {formErrors.weight}</span>
          </label>

        </fieldset>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

      {/* Display results */}
      {submittedDataArray.length > 0 && (
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
                    <button>edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
