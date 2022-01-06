Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    }
  },
  methods: {
    increatement(index) {
      this.books[index].count++
    },
    decreate(index) {
      this.books[index].count--
    },
    removebook(index) {
      this.books.splice(index, 1)
    },
    formatPrice(price){
      console.log(price);
      return '$' + price
    }
  },
  computed: {
    price() {
      let total = 0
      this.books.forEach(item => {
        total += item.price * item.count
      })
      return total
    },
    filterBooks(){
      return this.books.map(item=>{
        const newitem=Object.assign({},item)
        newitem.price="$" +item.price 
        return newitem
      })
    },
   
  }
}).mount("#app")