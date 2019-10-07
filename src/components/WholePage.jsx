import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const WholePage = () => {
  return (
    <>
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
      <GradientH height='50px' />
      <SandHeader />
      <Content>
        <Box display='flex'>
          <Button
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginRight='10px'
          >
            Start
          </Button>
          <Button display='flex' justifyContent='center' alignItems='center'>
            Edit
          </Button>
        </Box>
      </Content>
      <GradientV />
      <SandFooter />
    </>
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
  left: 140px;
  width: calc(100% - 120px - 140px);
  height: calc(100% - 320px);
  border: 1px solid red;
`;

const Button = styled(Box)`
  height: 40px;
  width: 87px;
  border-radius: 6px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.graBlue1};
`;

export default WholePage;
