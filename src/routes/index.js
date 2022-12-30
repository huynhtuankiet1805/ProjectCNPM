// Pages
import Home from '~/pages/Welcomepage';
import Login from '~/pages/Login'
import Info from '~/pages/Infomation'
import ManageMenu from '~/pages/ManageMenu'
import ManageOrder from '~/pages/ManageOrder'
import OrderList from '~/pages/ManageOrder/OrderList'
import Order from '~/pages/Orderfood'
import Payment from '~/pages/Payment'
import { OnlyHeader } from '~/components/Layout';

// Không cần đăng nhập vẫn vào được
const publicRoutes = [
    // http://localhost:3000
    {
        path: '/',
        component: Home,
    },
    // http://localhost:3000/login
    {
        path: '/login',
        component: Login,
        layout: null,
    },
    // http://localhost:3000/infomation
    {
        path: '/infomation',
        component: Info,
        layout: null
    },
    // http://localhost:3000/managemenu
    {
        path: '/managemenu',
        component: ManageMenu,
    },
    // http://localhost:3000/order
    {
        path: '/order',
        component: Order,
    },
    // http://localhost:3000/manageorder
    {
        path: '/manageorder',
        component: ManageOrder,
        layout: OnlyHeader
    },
    {
        path: '/manageorder/orderlist',
        component: OrderList,
    },
    
    // http://localhost:3000/payment
    {
        path: '/payment',
        component: Payment,
    },
];

// Sau khi đăng nhập mới vào được
const privateRoutes = [

];

export { publicRoutes, privateRoutes };
