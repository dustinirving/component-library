interface NavItem {
  text: string;
  href: string;
  active?: boolean;
}

export interface NavItemProps extends NavItem {}

export interface NavBarProps {
  navItems: NavItem[];
  position?: 'center' | 'left' | 'right';
}
