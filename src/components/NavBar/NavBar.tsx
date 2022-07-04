import React from 'react';
import { NavBarProps } from './NavBar.types';
import NavItem from './NavItem';
import styled from 'styled-components';

const Navbar: React.FC<NavBarProps> = (props) => {
  const { navItems, position } = props;
  return (
    <Wrapper>
      <Items position={position}>
        {navItems.map((navItem) => (
          <NavItem {...navItem} />
        ))}
      </Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-bg-primary);
  height: 60px;
`;
const Items = styled.ul<{ position: NavBarProps['position'] }>`
  height: 100%;
  padding: 0 18px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ position }) => position === 'left' && 'justify-content: flex-start;'}
  ${({ position }) => position === 'right' && 'justify-content: flex-end;'}
`;

export default Navbar;
