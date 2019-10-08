import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [input, setInput] = useState({ date: '', name: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerList, setCustomerList] = useState([]);

  const addCustomer = data => {
    data.id = uuid.v4();
    setCustomerList([...customerList, data]);
    setIsModalOpen(false);
    setInput({ date: '', name: '' });
    console.log('After adding CustomerList', [...customerList, data]);
  };

  const removeCustomer = id => {
    console.log(id);
    const newList = customerList.filter(d => d.id !== id);
    setCustomerList(newList);
    console.log('After removing CustomerList', newList);
  };

  const value = {
    input,
    setInput,
    isEdit,
    setIsEdit,
    isModalOpen,
    setIsModalOpen,
    customerList,
    setCustomerList,
    addCustomer,
    removeCustomer,
  };

  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
