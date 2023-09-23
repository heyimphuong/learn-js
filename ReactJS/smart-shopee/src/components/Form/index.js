import { useEffect, useState } from "react";

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

export const Form = ({ onSubmit, submitText, initialData = {
  // Gán giá trị mặc định ban đầu
  name: '',
  factorType: '',
  factorValueType: '',
  weight: ''
} }) => {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({
    name: '',
    factorType: '',
    factorValueType: '',
    weight: '',
  });

  useEffect(() => {
    setFormData(initialData);
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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

    onSubmit(formData);

    setFormData({
      name: '',
      factorType: '',
      factorValueType: '',
      weight: ''
    });
  }

  return (
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
      <button type="submit">{submitText}</button>
    </form>
  )
}


