const app = Vue.createApp({
    data() {
        return {
            cart: {},
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            if (this.cart[id]) {
                this.cart[id]++
            } else {
                this.cart[id] = 1
            }
        },
        removeFromCart(id) {
            --this.cart[id]
        }
    },
    computed: {
        sum() {
            return Object.values(this.cart).reduce((acc, next) => acc + next, 0)
        }
    }
})
