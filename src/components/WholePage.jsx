import React, { useContext } from 'react';
import { ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { AppContext } from '../context/AppContext';
import List from './List';
import PopOver from './PopOver';
import AddCustomerModal from './AddCustomerModal';

const WholePage = () => {
  const {
    isEdit,
    setIsEdit,
    setIsModalOpen,
    customerList,
    isProducing,
    startProducing,
  } = useContext(AppContext);

  console.log('isProducing', isProducing);

  return (
    <ModalProvider>
      <Box display='flex' justifyContent='space-between'>
        <LogoN
          height='45px'
          width='45px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          onClick={() => window.location.reload()}
        >
          N
        </LogoN>
        <Box
          height='45px'
          width='45px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          marginRight='70px'
        >
          <Icon>
            <i className='fas fa-check-circle' />
          </Icon>
          <Box marginLeft='20px' color='white'>
            innstillinger
          </Box>
          <ArrowDown marginLeft='5px' />
        </Box>
      </Box>
      {isProducing && <PopOver />}
      <GradientH height='50px' />
      <SandHeader />
      <Content>
        <Box marginLeft='15px' display='flex'>
          {isProducing ? (
            <InactiveStart
              display='flex'
              justifyContent='center'
              alignItems='center'
              marginRight='10px'
            >
              Start
            </InactiveStart>
          ) : (
            <Button
              display='flex'
              justifyContent='center'
              alignItems='center'
              marginRight='10px'
              onClick={() => startProducing()}
            >
              Start
            </Button>
          )}
          <Button
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginRight='10px'
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? 'Save' : 'Edit'}
          </Button>
          {isEdit && (
            <Button
              width='150px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              onClick={() => setIsModalOpen(true)}
            >
              Opprett ny kunde
            </Button>
          )}
        </Box>
        <Box marginTop='30px' display='flex'>
          <TableTitle
            width='10vw'
            height='50px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            Date
          </TableTitle>
          <TableTitle
            paddingX='15px'
            width='30vw'
            height='50px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box> Type something 1</Box>
            <BoxHover>
              <i className='fas fa-sort' />
            </BoxHover>
          </TableTitle>

          <TableTitle
            width='5vw'
            height='50px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            Delete
          </TableTitle>
        </Box>

        {customerList.map(d => (
          <List key={d.id} id={d.id} date={d.date} name={d.name} />
        ))}
      </Content>
      <GradientV />
      <AddCustomerModal />
      <SandFooter />
    </ModalProvider>
  );
};

const LogoN = styled(Box)`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.nordBlue};
  font-size: ${props => props.theme.fontSize[2]};
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(Box)`
  font-size: ${props => props.theme.fontSize[1]};
  color: ${props => props.theme.colors.nordBlue};
`;

const ArrowDown = styled(Box)`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${props => props.theme.colors.white};
`;

const GradientH = styled(Box)`
  height: 45px;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  background-image: linear-gradient(-90deg, #a1c4e2 5%, #6892c1 100%);
`;

const GradientV = styled.div`
  height: 100%;
  width: 45px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  background: linear-gradient(-45deg, #a1c4e2 5%, #6892c1 100%);
`;

const SandHeader = styled.div`
  width: calc(100% - 45px);
  height: 60px;
  top: 45px;
  left: 45px;
  position: fixed;
  z-index: -1;
  background: ${props => props.theme.colors.sandBG};
`;

const SandFooter = styled.div`
  width: calc(100% - 45px);
  height: 100px;
  bottom: 0;
  left: 45px;
  position: fixed;
  z-index: -1;
  background: ${props => props.theme.colors.sandBG};
`;

const Content = styled.div`
  position: absolute;
  top: 160px;
  left: 120px;
  width: calc(100% - 200px);
  height: calc(100% - 320px);
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

const InactiveStart = styled(Box)`
  height: 40px;
  width: 87px;
  border-radius: 6px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.graBlue1};
  opacity: 0.48;
`;

const TableTitle = styled(Box)`
  background: ${props => props.theme.colors.tableHead};
  color: ${props => props.theme.colors.fontGray};
  border: 1px solid ${props => props.theme.colors.tabledorder};
`;

const BoxHover = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

export default WholePage;
