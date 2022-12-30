<<<<<<< HEAD
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

=======
import './info.scss'
function Information() {
    return <div>
        <h2> Trang information ở đây</h2>
    </div>;
}

>>>>>>> 4cf48ca37fa10b55ad4e55fd97a5579daaf29839
export default Information;