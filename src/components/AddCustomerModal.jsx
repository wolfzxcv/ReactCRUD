import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { AppContext } from '../context/AppContext';

const AddCustomerModal = () => {
  const {
    input,
    setInput,
    isModalOpen,
    setIsModalOpen,
    addCustomer,
  } = useContext(AppContext);
  return (
    <StyledModal isOpen={isModalOpen}>
      <StyledModalTitle paddingLeft='10px'>Opprett ny kunde</StyledModalTitle>
      <Box display='flex' justifyContent='space-between' marginX='20px'>
        <Box display='flex'>
          <Box marginRight='10px'>
            <span>Dato</span>
          </Box>
          <input
            type='text'
            size='10'
            placeholder='DD.MM.YY'
            value={input.date}
            onChange={e => setInput({ ...input, date: e.target.value })}
          />
        </Box>
        <Box display='flex'>
          <Box marginRight='10px'>
            <span>Kunde</span>
          </Box>
          <input
            type='text'
            size='40'
            placeholder='Kundenavn'
            value={input.name}
            onChange={e => setInput({ ...input, name: e.target.value })}
          />
        </Box>
      </Box>
      <Box display='flex' justifyContent='flex-end' marginBottom='10px'>
        <Button
          display='flex'
          justifyContent='center'
          alignItems='center'
          marginRight='10px'
          onClick={() => addCustomer(input)}
        >
          OK
        </Button>
        <Button
          display='flex'
          justifyContent='center'
          alignItems='center'
          marginRight='10px'
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </Button>
      </Box>
    </StyledModal>
  );
};

const StyledModal = Modal.styled`
width: 600px;
height: 150px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid ${props => props.theme.colors.nordBlue};
background-color: ${props => props.theme.colors.white};
`;

const StyledModalTitle = styled(Box)`
  background: ${props => props.theme.colors.graBlue1};
  font-size: ${props => props.theme.fontSize[1]};
`;

const Button = styled(Box)`
  height: 40px;
  width: 87px;
  border-radius: 6px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.graBlue1};
  &:hover {
    cursor: pointer;
  }
`;

export default AddCustomerModal;
