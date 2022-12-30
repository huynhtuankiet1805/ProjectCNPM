// Pages
import Home from '~/pages/Welcomepage'
import Login from '~/pages/Login'
import Info from '~/pages/Infomation'
import ManageOrder from '~/pages/ManageOrder'
import OrderList from '~/pages/ManageOrder/OrderList'
import Order from '~/pages/Orderfood'
import Payment from '~/pages/Payment'
import Feedback from '~/pages/Feedback'
import { OnlyHeader } from '~/components/Layout';

// Không cần đăng nhập vẫn vào được
const publicRoutes = [
    // http://localhost:3000
    {
        path: '/',
        component: Home,
        layout: null,
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
    // http://localhost:3000/order
    {
        path: '/order',
        component: Order,
    },
    // http://localhost:3000/test
    {
        path: '/manageorder',
        component: ManageOrder,
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
    // http://localhost:3000/payment/feedback
    {
        path: '/payment/feedback',
        component: Feedback,
    }
];

// Sau khi đăng nhập mới vào được
const privateRoutes = [

];

export { publicRoutes, privateRoutes };
