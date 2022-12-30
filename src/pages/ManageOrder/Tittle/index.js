import React, { Component } from "react";
import styles from './Tittle.module.scss';


function Title() {
  return (
    <nav class= {styles.Wrapper}>
      <p class={styles.Tittle}>
        QUẢN LÝ <span>CỬA HÀNG</span> 
      </p>
    </nav>
  );
}

export default Title;
