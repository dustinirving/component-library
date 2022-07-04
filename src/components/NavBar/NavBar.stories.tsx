import React from 'react';
import styled from 'styled-components';
import { Colors } from '../GlobalStyles';
import NavBar from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <>
        <Colors />
        <Story />
      </>
    ),
  ],
};

const navItems = [
  { text: 'About', href: '#about', active: true },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Education', href: '#education' },
];

export const Left = () => <NavBar navItems={navItems} position="left" />;
export const Center = () => <NavBar navItems={navItems} position="center" />;
export const Right = () => <NavBar navItems={navItems} position="right" />;
