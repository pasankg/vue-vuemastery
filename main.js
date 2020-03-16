var app = new Vue({
  el: '#app',
  data: {
    brand: 'HomeBrand',
    totalCart: 0,
    product: 'Socks',
    selectedVariant: 0, // To base it on the variant index
    alt: 'product image',
    link: 'www.google.com',
    inventory: 10,
    details: ["80% Cotton", "20% Polyester"],
    sizes: ['L', 'M', 'S'],
    variants: [
      {
        variantID: '001',
        variantColor: 'Green',
        variantImage: 'https://dummyimage.com/250/00ff00/000000',
        variantQuantity: 1,
        onSale: false,
        cart: 0,

      },
      {
        variantID: '002',
        variantColor: 'Black',
        variantImage: 'https://dummyimage.com/250/0000/000000',
        variantQuantity: 2,
        onSale: false,
        cart: 0,
      },
      {
        variantID: '003',
        variantColor: 'Orange',
        variantImage: 'https://dummyimage.com/250/FF5733/000000',
        variantQuantity: 0,
        onSale: false,
        cart: 0,
      },
    ],
  },
  methods: {
    addToCart: function () {
      if(this.variants[this.selectedVariant].cart<= this.variants[this.selectedVariant].variantQuantity) {
        this.variants[this.selectedVariant].cart += 1;
        this.totalCart += 1
        return this.variants[this.selectedVariant].cart
      }
    },
    removeFromCart: function () {
      if( this.variants[this.selectedVariant].cart > 0) {
        this.variants[this.selectedVariant].cart -= 1;
        this.totalCart -= 1
        return this.variants[this.selectedVariant].cart
      }
    },
    updateProductImage: function (index) {
      this.selectedVariant = index
    },
    calculateStock: function () {
      var stock = this.variants[this.selectedVariant].variantQuantity
      if(stock && stock <= 10 && stock > 0) {
        return 'Low stock'
      }
      else if(stock > 10){
        return 'In stock'
      }
      else {
        return false
      }
    }
  },
  computed: {
    computedTitle() {
      return this.brand + ' ' + this.product;
    },
    mainImage() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.calculateStock()
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale
    },
    cart() {
      return this.variants[this.selectedVariant].cart
    },
    reachedMaxAddToCart() {
      if(this.variants[this.selectedVariant].cart >= this.variants[this.selectedVariant].variantQuantity) {
        return true
      }
      return false
    }
  }
})