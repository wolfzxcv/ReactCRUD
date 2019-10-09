import React, { useState, createContext } from 'react';
import uuid from 'uuid';
import data from '../assets/mockData.json';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [input, setInput] = useState({ date: '', name: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Opprett ny kunde');
  const [customerList, setCustomerList] = useState(data);
  const [updateById, setUpdateById] = useState('');
  const [isProducing, setIsProducing] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setInput({ date: '', name: '' });
    setModalTitle('Opprett ny kunde');
    setUpdateById('');
  };

  const addCustomer = data => {
    data.id = uuid.v4();
    setCustomerList([...customerList, data]);
    closeModal();
    console.log([...customerList, data]);
  };

  const updateCustomer = data => {
    const newCustomerList = customerList.map(list => {
      if (list.id === updateById)
        return { ...list, date: data.date, name: data.name };
      return list;
    });
    setCustomerList(newCustomerList);
    closeModal();
  };

  const validateCustomerInfo = data => {
    const validatorCondition =
      /^([0]?[1-9]|[1|2][0-9]|[3][0|1])\.([0]?[1-9]|[1][0-2])\.(([0-9]{2}))$/.test(
        data.date
      ) && data.name.length > 0;
    if (validatorCondition && updateById.length === 0) {
      addCustomer(data);
    } else if (validatorCondition && updateById.length > 5) {
      updateCustomer(data);
    } else
      alert(
        `Date must follow the format DD.MM.YY\nDate must be valid\ncustomer name can't be empty`
      );
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

  const startProducing = () => {
    setIsProducing(true);
    setIsWaiting(true);
    setTimeout(() => {
      setShowPopOver(true);
      setIsWaiting(false);
    }, 3000);
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
    validateCustomerInfo,
    addCustomer,
    removeCustomer,
    editCustomer,
    updateCustomer,
    closeModal,
    isProducing,
    setIsProducing,
    startProducing,
    showPopOver,
    setShowPopOver,
    isWaiting,
  };

  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
