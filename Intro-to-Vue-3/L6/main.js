const app = Vue.createApp({
    data() {
        return {
            cart:0,
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(image) {
            this.image = image
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        }
    }
})
