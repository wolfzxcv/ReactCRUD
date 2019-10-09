import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { AppContext } from '../context/AppContext';

const PopOver = () => {
  const { setIsProducing, customerList } = useContext(AppContext);
  return (
    <StyledPopOver
      display='flex'
      flexDirection='column'
      bgcolor='white'
      onClick={() => setIsProducing(false)}
    >
      <MessageArrow />
      <RoundBorder
        height='30px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        Bekreftelse
      </RoundBorder>
      <Box height='30px' display='flex' alignItems='center'>
        <Box fontSize='8px' color='#03fc0f' marginX='7px'>
          <i className='fas fa-circle' />
        </Box>
        <Box color='black'>Produsert</Box>
        <Box marginLeft='30px'>{customerList.length}</Box>
      </Box>
    </StyledPopOver>
  );
};

const StyledPopOver = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  z-index: 2;
  top: 50px;
  right: 75px;
  width: 150px;
  height: 60px;
  box-shadow: 0 2px 7px 2px rgba(169, 169, 169, 0.5);
  &:hover {
    cursor: pointer;
  }
`;

const RoundBorder = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${props => props.theme.colors.nordBlue};
  color: ${props => props.theme.colors.white};
`;

const MessageArrow = styled(Box)`
  position: fixed;
  z-index: 1;
  top: 40px;
  right: 138px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid ${props => props.theme.colors.nordBlue};
`;

export default PopOver;
