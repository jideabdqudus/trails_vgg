import "./index.css";
import React from "react";
import { Menu, Grid } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return <Menu mode={md ? "horizontal" : "inline"}></Menu>;
};

export default LeftMenu;
