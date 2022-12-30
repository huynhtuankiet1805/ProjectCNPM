import Header from '~/components/Layout/DefaultLayout/Header';
import styles from './manageorder.module.scss';
import SideBar from './SideBar';
import Title from './Tittle';
import OrderList from './OrderList';
import Delivery from './Delivery';
import WaitingVerify from './WaitingVerify';
import Deliveried from './Deliveried';
import Cancelled from './Cancelled';

function Manageorder() {

    return (
      <div class={styles.wrapper}>
        <div class={styles.container}>
      <Title/>
      <div class={styles.content}>
      <SideBar/>

{/* link route từ sidebar tại đây */}

      <Cancelled/>

      </div>
      </div>
      </div>
      

    );
}

export default Manageorder;