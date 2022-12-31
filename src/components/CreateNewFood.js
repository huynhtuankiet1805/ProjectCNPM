import React, { Component } from "react";
import CED from "./CED";
import Title from "./Title";
/* -----------------------------------Phần đầu của-Thêm - Xoá - Sửa Món Ăn------------------------------------ */
function CreateNewFood() {
  return (
    <>
      <div className="title">
        {" "}
        <Title />
      </div>
      <br></br>
      <br></br>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className=" titleCreate navbar-brand" href="#">
          Thông tin món ăn
        </a>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <button
              className="saveButton btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              Lưu
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              X Đóng
            </button>
          </form>
        </div> */}
      </nav>
      <br></br>
      <br></br>
      <CED />
    </>
  );
}

export default CreateNewFood;
