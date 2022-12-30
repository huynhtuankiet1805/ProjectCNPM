import Header from '~/components/Layout/DefaultLayout/Header';
import Avatar from './Avatar';
import Form from './Form';
import styles from  './Info.module.scss';

function Information() {
    return (<div>
        <div class={styles.header}>
        <Header />
        </div>
        
        <div class={styles.container}>
        <Avatar/>
        <div class= {styles.Form}><Form/></div>
        </div>    
    </div>);
}

export default Information;