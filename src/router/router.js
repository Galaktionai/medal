import { createRouter, createWebHashHistory } from 'vue-router'

import vHome from '../components/home/v-home'
import vCatalog from '../components/catalog/v-catalog'
import vProductCard from '../components/product-card/v-product-card'
import vCartSection from '../components/cart/v-cart-section'
import vProfile from '../components/profile/v-profile'
import vOrders from '../components/profile/v-orders'
import vAddresses from '../components/profile/v-addresses'
import vDiscounts from '../components/profile/v-discounts'
import vRefunds from '../components/profile/v-refunds'
import vQuestions from '../components/profile/v-questions'
import vFeedback from '../components/profile/v-feedback'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog,
        },
        {
            path: '/product',
            name: 'product',
            component: vProductCard,
        },
        {
            path: '/cart-section',
            name: 'cart-section',
            component: vCartSection,
            props: true,
        },
        {
            path: '/profile',
            name: 'profile',
            component: vProfile
        },
        {
            path: '/orders',
            name: 'orders',
            component: vOrders
        },
        {
            path: '/addresses',
            name: 'addresses',
            component: vAddresses
        },
        {
            path: '/discounts',
            name: 'discounts',
            component: vDiscounts
        },
        {
            path: '/refunds',
            name: 'refunds',
            component: vRefunds
        },
        {
            path: '/questions',
            name: 'questions',
            component: vQuestions
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: vFeedback
        }
    ]
})
