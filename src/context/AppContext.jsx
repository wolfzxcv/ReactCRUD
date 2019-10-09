import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [input, setInput] = useState({ date: '', name: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Opprett ny kunde');
  const [customerList, setCustomerList] = useState([]);
  const [updateById, setUpdateById] = useState('');

  const addCustomer = data => {
    data.id = uuid.v4();
    setCustomerList([...customerList, data]);
    setIsModalOpen(false);
    setInput({ date: '', name: '' });
    setModalTitle('Opprett ny kunde');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInput({ date: '', name: '' });
    setModalTitle('Opprett ny kunde');
  };

  const removeCustomer = id => {
    const newList = customerList.filter(d => d.id !== id);
    setCustomerList(newList);
  };

  const editCustomer = id => {
    const customer = customerList.find(d => d.id === id);
    setModalTitle(`Edit  ${customer.name}`);
    setIsModalOpen(true);
    setInput({ date: customer.date, name: customer.name });
    setUpdateById(id);
  };

  const updateCustomer = data => {
    const newCustomerList = customerList.map(list => {
      if (list.id === updateById)
        return { ...list, date: data.date, name: data.name };
      return list;
    });
    setCustomerList(newCustomerList);
    setIsModalOpen(false);
    setInput({ date: '', name: '' });
    setModalTitle('Opprett ny kunde');
  };

  const value = {
    input,
    setInput,
    isEdit,
    setIsEdit,
    isModalOpen,
    setIsModalOpen,
    modalTitle,
    setModalTitle,
    customerList,
    setCustomerList,
    addCustomer,
    removeCustomer,
    editCustomer,
    updateCustomer,
    closeModal,
  };

  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
