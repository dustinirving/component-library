import React from 'react';
import styled from 'styled-components';
import { NavItemProps } from './NavBar.types';

const NavItem: React.FC<NavItemProps> = (props) => {
  const { text, href, active } = props;
  return (
    <ListItem active={active}>
      <Anchor href={href} active={active}>
        {text}
      </Anchor>
    </ListItem>
  );
};

const ListItem = styled.li<{ active: NavItemProps['active'] }>`
  padding: 6px 12px;
  border-bottom: 3px solid transparent;
  ${({ active }) => active && activeStyles}
`;

const Anchor = styled.a<{ active: NavItemProps['active'] }>`
  text-decoration: none;
  color: var(--color-text);
  font-size: 18px;
  font-weight: 500;
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco',
    BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const activeStyles = `
  border-bottom: 3px solid var(--color-active);
  ${Anchor} {
    color: var(--color-active);
  }
`;

export default NavItem;
