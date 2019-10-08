import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [input, setInput] = useState({ date: '', name: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Opprett ny kunde');
  const [customerList, setCustomerList] = useState([]);

  const addCustomer = data => {
    data.id = uuid.v4();
    setCustomerList([...customerList, data]);
    setIsModalOpen(false);
    setInput({ date: '', name: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle('Opprett ny kunde');
    setInput({ date: '', name: '' });
  };

  const removeCustomer = id => {
    const newList = customerList.filter(d => d.id !== id);
    setCustomerList(newList);
  };

  const editCustomer = id => {
    const customer = customerList.find(d => d.id === id);
    setModalTitle(`Edit ${customer.name}`);
    setIsModalOpen(true);
    setInput({ date: customer.date, name: customer.name });
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
    closeModal,
  };

  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
