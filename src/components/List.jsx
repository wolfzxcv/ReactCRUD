import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { AppContext } from '../context/AppContext';

const List = ({ id, date, name }) => {
  const { isEdit, removeCustomer, editCustomer } = useContext(AppContext);

  return (
    <Box display='flex'>
      {isEdit ? (
        <HoverColor display='flex'>
          <Box display='flex' onClick={() => editCustomer(id)}>
            <TableTitle
              width='10vw'
              height='50px'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              {date}
            </TableTitle>
            <TableTitle
              paddingX='15px'
              width='30vw'
              height='50px'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              {name}
            </TableTitle>
          </Box>
          <TableTitle
            width='5vw'
            height='50px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            color='red'
            onClick={() => removeCustomer(id)}
          >
            <i className='fas fa-trash-alt' />
          </TableTitle>
        </HoverColor>
      ) : (
        <>
          <TableTitleNotActive
            width='10vw'
            height='50px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            {date}
          </TableTitleNotActive>
          <TableTitleNotActive
            paddingX='15px'
            width='30vw'
            height='50px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            {name}
          </TableTitleNotActive>
          <TableTitleNotActive
            width='5vw'
            height='50px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <i className='fas fa-trash-alt' />
          </TableTitleNotActive>
        </>
      )}
    </Box>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const HoverColor = styled(Box)`
  &:hover {
    div {
      background: ${props => props.theme.colors.iconBlue};
    }
  }
`;

const TableTitle = styled(Box)`
  border: 1px solid ${props => props.theme.colors.tabledorder};
  &:hover {
    cursor: pointer;
  }
`;

const TableTitleNotActive = styled(Box)`
  color: ${props => props.theme.colors.fontGray};
  border: 1px solid ${props => props.theme.colors.tabledorder};
`;

export default List;
