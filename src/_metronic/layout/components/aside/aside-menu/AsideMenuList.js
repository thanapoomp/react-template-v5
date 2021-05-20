/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { useSelector } from "react-redux";
import { ROLES } from "../../../../../Constants";
import Hoc from "../../../../../app/modules/Common/components/Hoc";
import DvrIcon from "@material-ui/icons/Dvr";
import Icon from "@material-ui/core/Icon";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const authReducer = useSelector(({ auth }) => auth);

  const isShowMenu = (roles) => {
    roles = roles === undefined ? [] : roles;
    if (roles.length > 0) {
      // check if route is restricted by role
      let intersection = roles.filter((x) => authReducer.roles.includes(x));
      return intersection.length > 0;
    } else {
      return true;
    }
  };

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Menu</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/test", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/test">
            <span className="svg-icon menu-icon">
              <DvrIcon></DvrIcon>
            </span>
            <span className="menu-text">dashboard</span>
          </NavLink>
        </li>

        {/* Demo zone สามารถ comment ทิ้งได้ */}
        <>
          {/* Custom roles */}
          {isShowMenu([ROLES.admin, ROLES.Manager]) && (
            <Hoc>
              {/* begin::section */}
              <li className="menu-section ">
                <h4 className="menu-text">Demo Custom roles</h4>
                <i className="menu-icon flaticon-more-v2"></i>
              </li>

              {/* end:: section */}

              {/*begin::1 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/test", false)}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/test">
                  <span className="svg-icon menu-icon">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Food/Bucket.svg")}
                    />
                  </span>
                  <span className="menu-text">Show only Admin and Manager</span>
                </NavLink>
              </li>
              {/*end::1 Level*/}
            </Hoc>
          )}

          {/* Menu Example */}
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Demo Menu</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>

          {/* end:: section */}

          {/*begin::1 Level*/}
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/demo/pages",
              false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink to="/demo/pages" className="menu-link menu-toggle">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">Level 1</span>
              <i className="menu-arrow" />
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Demo 1</span>
                  </span>
                </li>

                {/* Inputs */}
                {/*begin::2 Level*/}
                <li
                  className={`menu-item menu-item-submenu ${getMenuItemActive(
                    "/google-material/inputs",
                    true
                  )}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <NavLink
                    className="menu-link menu-toggle"
                    to="/google-material/inputs"
                  >
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text">Level 2</span>
                    <i className="menu-arrow" />
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {/*begin::3 Level*/}
                      <li
                        className={`menu-item  ${getMenuItemActive("/alert")}`}
                        aria-haspopup="true"
                      >
                        <NavLink className="menu-link" to="/alert">
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">alert</span>
                        </NavLink>
                      </li>
                      {/*end::3 Level*/}
                    </ul>
                  </div>
                </li>
                {/*end::2 Level*/}
              </ul>
            </div>
          </li>
          {/*end::1 Level*/}
          {/* End Menu Example */}

          {/*begin::1 Redux Demo*/}
          <li
            className={`menu-item ${getMenuItemActive("/reduxDemo", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/reduxDemo">
              <span className="svg-icon menu-icon">
                <DvrIcon></DvrIcon>
              </span>
              <span className="menu-text">ReduxDemo</span>
            </NavLink>
          </li>

          {/*begin::1 Form Demo*/}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/formDemo",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/formDemo">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">FormDemo</span>
            </NavLink>
          </li>
          {/*End::1 Form Demo*/}

          {/*begin::1 Datatable Demo*/}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/datatableList",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/datatableList">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">Datatable List</span>
            </NavLink>
          </li>
          {/*End::1 Datatable Demo*/}
          {/* begin::1 pdfGenerrate */}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/pdfGenerrate",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/pdfGenerrate">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">PDF GenerrateDemo</span>
            </NavLink>
          </li>
          {/* End::1 pdfGenerrate */}
          {/* begin::1 QRGenerateDemo */}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/QRGenerateDemo",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/QRGenerateDemo">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">QR GenerateDemo</span>
            </NavLink>
          </li>
          {/* End::1 QRGenerateDemo */}
          {/* begin::1 apexcharts */}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/apexcharts",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/apexcharts">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">ApexchartsDemo</span>
            </NavLink>
          </li>
          {/* End::1 apexcharts */}
          {/* begin::1 PrintComponent */}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/PrintComponent",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/PrintComponent">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">PrintComponentDemo</span>
            </NavLink>
          </li>
          {/* End::1 PrintComponent */}
          {/* begin::1 BarcodeGenerateDemo */}
          <li
            className={`menu-item ${getMenuItemActive(
              "/demo/BarcodeGenerateDemo",
              false
            )}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/demo/BarcodeGenerateDemo">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">BarcodeGenerateDemo</span>
            </NavLink>
          </li>
          {/* End::1 PrintComponent */}
        </>
        {/* End Demo สามารถ comment ทิ้งได้ */}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
