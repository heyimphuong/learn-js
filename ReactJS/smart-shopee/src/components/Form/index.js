import { useEffect, useState } from "react";
import React from 'react';

// Để thêm validFactorTypes 
export const validFactorTypes = [
  {
    // TODO: This line will bring bugs in the future
    value: "impact",
    label: 'Tôi cần'
  },
  {
    value: "effort",
    label: 'Nỗ lực'
  },
  {
    value: "effort1",
    label: 'Nỗ lực 1'
  },
  {
    value: "effort2",
    label: 'Nỗ lực 2'
  },
];

export const validFactorValueTypes = [
  {
    value: "reviewStar",
    label: 'Đánh giá'
  },
  {
    value: "totalReviews",
    label: 'Tổng đánh giá'
  },
  {
    value: "reviewStar2",
    label: 'Đánh giá 2'
  },
  {
    value: "totalReviews2",
    label: 'Tổng đánh giá 2'
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
      {/* <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="w-full">
        <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
        <div className="mt-2 w-full">
          <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div> */}
      <fieldset>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name: <span className="required ">*</span>
          </label>
          <div>
            <input
              type="text"
              name="name"
              //nối chuỗi và dùng toán tử 3 ngôi
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md ${(!!formErrors.name) ? 'border-red-300 text-red-900' : 'border-gray-300'}`}
              placeholder="Nhập tên..."
              value={formData.name}
              onChange={handleChange}
              required={false} // TODO: Change this line to true after production
              maxLength={20}
            />
          </div>
          {!!formErrors.name && <span className="error mt-2 text-sm text-red-600">{formErrors.name}</span>}
        </div>
        <label className="block text-sm font-medium text-gray-700 mt-8">
          <p>Factor type:<span className="required">*</span></p>
          <select
            type="text"
            name="factorType"
            className=" mt-8 block w-full pl-3 pr-10 py-2 text-base border-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={formData.factorType}
            onChange={handleChange}
            required
          >
            <option className="" value="">-- Chọn loại --</option>
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
        <label className="block text-sm font-medium text-gray-700 mt-8">
          <p>Factor value type:<span className="required">*</span></p>
          <select
            type="text"
            name="factorValueType"
            className=" mt-8 block w-full pl-3 pr-10 py-2 text-base border-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
        <label className="block text-sm font-medium text-gray-700 mt-8">
          <p>Weight:<span className="required">*</span></p>
          <input
            type="number"
            name="weight"
            className="w-full mt-8"
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
      <button type="submit" className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {submitText}
      </button>
    </form>
  )
}


