import styles from'./Form.module.scss'
import FormItem from "./FormItem";
function FormInfo() {
    return (
        <div class={styles.wrapper}>
        <p class={styles.ttcn}>Thông Tin Cá Nhân</p>
        <FormItem label="Họ và tên" placehoder="Họ và tên" value="Lãnh Hàn Thiên Băng"/>
        <FormItem label="Email" placehoder="Họ và tên" value="hmmm@gmail.com"/>
        <div class={styles.item}>
            <label class={styles.label}> Ngày sinh</label>
            <input class={styles.inputBox} type="date" value="2022-11-25"/>
        </div>
        <FormItem label="Số điện thoại" placehoder="Họ và tên" value="0123456789"/>
        <FormItem label="Số CCCD/CMND" placehoder="Họ và tên" value="111155557777"/>
        <FormItem label="Địa chỉ" placehoder="Họ và tên" value="KTX Khu A, ĐHQG TP - HCM"/> 

        <div class={styles.listbtn}>
        <input type="submit" class={styles.btn} value="Sửa hồ sơ"/>
        <input type="submit" class={styles.btn1} value="Quay lại"/>
        </div>
        
        </div>
    
        );
}

export default FormInfo;