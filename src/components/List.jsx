import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const List = () => {
  return (
    <Box display='flex'>
      <TableTitle
        width='10vw'
        height='50px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        07.10.19
      </TableTitle>
      <TableTitle
        paddingX='15px'
        width='30vw'
        height='50px'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        Example 1
      </TableTitle>

      <TableTitle
        width='5vw'
        height='50px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <i className='fas fa-trash-alt' />
      </TableTitle>
    </Box>
  );
};

const TableTitle = styled(Box)`
  color: ${props => props.theme.colors.fontGray};
  border: 1px solid ${props => props.theme.colors.tabledorder};
`;

export default List;
