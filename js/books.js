const vm = new Vue({
	el: '#app',
	data:{
		books: [
			{
				id: 1, 
				name: '<<算法导论>>',
				date: '2006-9',
				price: 85.12,
				count: 1
			},
			{
				id: 2, 
				name: '<<Unix编程艺术>>',
				date: '2006-2',
				price: 59.99,
				count: 3
			},
			{
				id: 3, 
				name: '<<编程珠玑>>',
				date: '2016-9',
				price: 39.58,
				count: 2
			},
			{
				id: 4, 
				name: '<<代码大全>>',
				date: '2019-9',
				price: 128.49,
				count: 1
			},
		]
	},
	methods:{
		getFinalPrice(price){
			return '￥' + price.toFixed(2);
		},
		decrement(index){
			this.books[index].count--;
			
		},
		increment(index){
			this.books[index].count++;
		},
		removeHandler(index){
			this.books.splice(index, 1);
		}
	},
	computed:{
		totalPrice() {
			let total = 0;
			for (let i = 0; i < this.books.length; ++i){
				total += this.books[i].price * this.books[i].count;
			}
			return total;
		}
	},
	filters:{
		showPrice(price){
			return '￥' + price.toFixed(2);
		}
	}
})