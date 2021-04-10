// import React from "react";
// import "./index.css";
// import { connect, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
// import { logout, loadUser } from "../../../actions/authAuctions";

// import { Menu, Grid } from "antd";
// import { Link } from "@material-ui/core";
// import { CLEAR_SESS } from "../../../constants/Types";
// const SubMenu = Menu.SubMenu;

// const { useBreakpoint } = Grid;

// export const RightMenu = (props) => {
//   const { userData } = props;
//   const dispatch = useDispatch();

//   const onLogout = () => {
//     localStorage.clear();
//     dispatch({
//       type: CLEAR_SESS,
//       payload: {},
//     });
//     props.history.push("/login");
//   };

//   const onDashboardClick = () => {
//     props.history.push("/app/dashboard");
//   };

//   const onProgramClick = () => {
//     props.history.push("/app/dashboard/projects");
//   };

//   const onManagerClick = () => {
//     props.history.push("/app/dashboard/manager");
//   };

//   const onFormClick = () => {
//     props.history.push("/app/dashboard/form");
//   };

//   const { md } = useBreakpoint();
//   return (
//     <Menu mode={md ? "horizontal" : "inline"}>
//       <SubMenu
//         key="sub1"
//         title={`${userData && userData.firstName} ${
//           userData && userData.lastName
//         }`}
//       >
//         <Menu.Item key="setting:1" className={"blindMenu"}>
//           <Link to="/app/dashboard" onClick={onDashboardClick}>
//             Dashboard
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="setting:2" className={"blindMenu"}>
//           <Link to="/app/dashboard/projects" onClick={onProgramClick}>
//             Program Report
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="setting:3" className={"blindMenu"}>
//           <Link to="/app/dashboard/manager" onClick={onManagerClick}>
//             Programme Manager
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="setting:4" className={"blindMenu"}>
//           <Link to="/app/dashboard/form" onClick={onFormClick}>
//             Forms
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="setting:5">
//           <Link onClick={onLogout}>Logout</Link>
//         </Menu.Item>
//       </SubMenu>
//     </Menu>
//   );
// };

// RightMenu.propTypes = {
//   logout: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout, loadUser })(RightMenu);
