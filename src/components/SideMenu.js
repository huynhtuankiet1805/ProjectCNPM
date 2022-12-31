import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
/* ------------------------------------EDIT NỘI DUNG SITEBAR------------------------------------ */
// added more menuItems
export const menuItems = [
  {
    name: "Quản lý menu",
    exact: true,
    to: `/content/managerMenu`,
    iconClassName: "bi bi-menu-up",
    subMenus: [
      { name: "Thêm-Xoá-Sửa món", to: "/content/create" },
      // { name: "Xoá món ăn", to: "/content/delete" },
      // { name: "Chỉnh sửa", to: "/content/edit" },
    ],
  },
  // {
  //   name: "Quản lý đơn hàng",
  //   exact: true,
  //   to: `/content-2`,
  //   iconClassName: "bi bi-stop-circle",
  //   subMenus: [
  //     { name: "Danh sách đơn", to: "/content-2/orderList" },
  //     { name: "Chờ xác nhận", to: "/content-2/waitConfirm" },
  //     { name: "Đang giao", to: "/content-2/delivering" },
  //     { name: "Đã giao", to: "/content-2/delivered" },
  //     { name: "Đã huỷ", to: "/content-2/canceled" },
  //   ],
  // },
  { name: "Tin nhắn", to: "/chat", iconClassName: "bi bi-envelope" , class:"messageManage"},
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>

        <div className="side-menu-footer">
          <div className="avatar"></div>
          <div className="user-info">
            <h5 style={{ textAlign: "center", color: "#333" }}>NOBORE</h5>
            <p>Website đặt đồ ăn Trực Tuyến </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
