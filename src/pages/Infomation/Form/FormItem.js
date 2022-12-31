import styles from './Form.module.scss';

function FormItem({label, placeholder, value}) {
    return ( 
        <div class={styles.item}>
            <label class={styles.label}>{label}</label>
            <input class={styles.inputBox} type="text" placeholder={placeholder} value={value}/>
        </div>
     );
}

export default FormItem;