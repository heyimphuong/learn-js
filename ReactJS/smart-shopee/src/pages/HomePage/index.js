import { useState } from 'react';
import { Form } from '../../components/Form';
import { ConditionTable } from '../../components/ConditionTable';
import React from 'react';

export const HomePage = () => {

  const [factors, setFactors] = useState([
    // TODO: Fake data here, remove on production
    {
      name: 'Condition 1',
      factorType: 'impact',
      factorValueType: 'reviewStar',
      weight: '30'
    }
  ]);
  const [updateData, setUpdateData] = useState(null);

  const handleEdit = (index, data) => setUpdateData({
    ...data,
    index
  });

  const handleAdd = (condition) => setFactors([...factors, condition]);

  const handleDelete = (index) => {
    if (window.confirm('Bạn có muốn xóa ?') == true) {
      setFactors(factors.filter((_, idx) => idx !== index))
    }
  }

  const handleUpdate = (data) => {
    // Cách 1 có thể gây ra lỗi khi không tồn tại data.index
    // factors[data.index] = data;
    // setFactors(factors);

    // Có thể tìm hiểu cách 2 an toàn hơn.
    if (window.confirm('Bạn có muốn thay đổi ?') == true) {
    const updatedDataArray = factors.map((submittedData, arrIndex) => {
        const { index, ...rest } = data;
        // {
        //   index: 1,
        //   name: 'Condition 1',
        //   factorType: 'Tùy chọn',
        //   factorValueType: 'Đánh giá',
        //   weight: '30'
        // },
        if (arrIndex === index) {
          return {
            ...submittedData,
            ...rest
          }
        }

        return submittedData;
    })
    setFactors(updatedDataArray);
    setUpdateData(null);
  }
  }

  return (
    <>
      <p> <a href="/products">Sang trang products</a></p>
      <Form submitText="Tạo" onSubmit={handleAdd} initialData={{
        name: 'Nhân tố bất kì',
        factorType: 'impact',
        factorValueType: 'totalReviews',
        weight: '10'
      }} />
      <ConditionTable factors={factors} onEdit={handleEdit} onDelete={handleDelete} />
      {!!updateData && (
        <Form initialData={updateData} submitText="Cập nhật" onSubmit={handleUpdate} />
      )}
    </>
  )
}