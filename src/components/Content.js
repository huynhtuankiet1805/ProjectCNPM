import React, { Component } from "react";
import Title from "./Title";
/* ------------------------------------Quản lý Menu------------------------------------ */
function Content() {
  return (
    <>
      <div className="title">
        {" "}
        <Title />
      </div>
      <br></br>
      <br></br>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className=" titleMenu navbar-brand" href="#">
          Menu
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 font-italic"
              type="search"
              placeholder="Tìm kiếm..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 bi bi-search"
              type="submit"
            ></button>
          </form>
        </div>
      </nav>

      <br></br>
      {/* ------------------------------------Danh sách món ăn------------------------------------ */}
      <h2>Thức ăn</h2>
      <br></br>
      <div className="row" style={{ margin: "auto" }}>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>CƠM GÀ XỐI MỠ</p>
                <span> 65.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00101</h1>
                <span>- Số lượng còn 50 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://cdn.beptruong.edu.vn/wp-content/uploads/2018/06/cach-uop-thit-nuong-com-tam.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>CƠM TẤM</p>
                <span> 55.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00102</h1>
                <span>- Số lượng còn 20 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://cdn.tgdd.vn/Files/2017/03/24/964495/cach-nau-bun-bo-hue-gio-heo-ngon-cong-thuc-chuan-vi-202208251617593627.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>BÚN BÒ HUẾ</p>
                <span> 80.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00103</h1>
                <span>- Số lượng còn 26 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Summer_roll.jpg/800px-Summer_roll.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>GỎI CUỐN</p>
                <span> 30.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00104</h1>
                <span>- Số lượng còn 34 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* ------------------------------------Danh sách món ăn------------------------------------ */}
      <h2>Đồ uống</h2>
      <br></br>

      <div className="row" style={{ margin: "auto" }}>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://image.thanhnien.vn/w1024/Uploaded/2022/lxwpcqjwp/2022_06_02/fresh-orange-juice-jar-1748.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>NƯỚC CAM</p>
                <span> 20.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00105</h1>
                <span>- Số lượng còn 80 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRswuyxaZQekEgTEPLumMeh0QiVH6VyzpLA&usqp=CAU"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>SINH TỐ BƠ</p>
                <span> 25.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00106</h1>
                <span>- Số lượng còn 40 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://89khamthien.com/wp-content/uploads/2018/08/Coca-n%E1%BA%AFp-v%E1%BA%B7n-jpg-e1586150381902.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>COCA COLA</p>
                <span> 30.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00107</h1>
                <span>- Số lượng còn 50 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {/* item */}
          <div className="card" style={{ width: "12rem", height: "15rem" }}>
            <div className="card-body team__item--3">
              <img
                src="https://thucthan.com/media/2019/06/sinh-to-xoai/mon-sinh-to-xoai.jpg"
                alt="team"
              />
              <div className="team__item__info">
                <p style={{ color: "yellow" }}>SINH TỐ XOÀI</p>
                <span> 55.000 Đ </span>
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-pen"></i>
                </button>
              </div>
              <div class="team__item__detail">
                <h1>ID 00108</h1>
                <span>- Số lượng còn 5 phần</span>
                <p>07:00 AM - 05:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
    </>
  );
}

export default Content;
