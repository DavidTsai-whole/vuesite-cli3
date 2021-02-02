import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: () => import('../views/Layout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Home.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/Login.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/CustomerProduct.vue')
        },
        {
          path: 'products/:id',
          name: 'products',
          component: () => import('../views/ProductDetail.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/Cart.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('../views/Checkout.vue')
        },
        {
          path: 'checkoutFinal/:id',
          name: 'checkoutFinal',
          component: () => import('../views/FinalCheckout.vue')
        },
        {
          path: 'track',
          name: 'track',
          component: () => import('../views/Track.vue')
        },
        {
          path: 'question',
          name: 'question',
          component: () => import('../views/Question.vue')
        },
        {
          path: 'thx',
          name: 'thx',
          component: () => import('../views/Thx')
        }
      ]

    },
    {
      path: '/admin',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'product',
          name: 'Editproduct',
          component: () => import('../views/EditProduct.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('../views/Coupon.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }

  ]

})
