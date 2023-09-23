import { useState } from 'react';
import './compare.css';
import { Form } from '../../components/Form';
import { Table } from '../../components/Table';

export const HomePage = () => {

  const [submittedDataArray, setSubmittedDataArray] = useState([
    // TODO: Fake data here, remove on production
    {
      name: 'Condition 1',
      factorType: 'Tùy chọn',
      factorValueType: 'Đánh giá',
      weight: '30'
    }
  ]);
  const [updateData, setUpdateData] = useState(null);

  const handleEdit = (index, data) => setUpdateData({
    ...data,
    index
  });

  const handleAdd = (formData) => setSubmittedDataArray([...submittedDataArray, formData]);

  const handleDelete = (index) => {
    if (window.confirm('Bạn có muốn xóa ?') == true) {
      setSubmittedDataArray(submittedDataArray.filter((_, idx) => idx !== index))
    }
  }

  const handleUpdate = (data) => {
    // Cách 1 có thể gây ra lỗi khi không tồn tại data.index
    submittedDataArray[data.index] = data;
    setSubmittedDataArray(submittedDataArray);

    // Có thể tìm hiểu cách 2 an toàn hơn. 
    // const updatedDataArray = submittedDataArray.map((submittedData, arrIndex) => {
    //   const { index, ...rest } = data;
    //   if (arrIndex === index) {
    //     return {
    //       ...submittedData,
    //       ...rest
    //     }
    //   }
    //   return submittedData;
    // })

    // setSubmittedDataArray(updatedDataArray);
    setUpdateData(null);
  }

  return (
    <>
      <Form submitText="Tạo" onSubmit={handleAdd} initialData={{
        name: '',
        factorType: '',
        factorValueType: '',
        weight: ''
      }} />
      <Table submittedDataArray={submittedDataArray} handleEdit={handleEdit} handleDelete={handleDelete} />
      {!!updateData && (
        <Form initialData={updateData} submitText="Cập nhật" onSubmit={handleUpdate} />
      )}
    </>
  )
}
