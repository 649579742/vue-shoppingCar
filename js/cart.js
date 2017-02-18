new Vue({
	el:'#shoppingCar',
	data:{
		title1:"hello vue",
		productList:[],
		totalMoney:0,
		mockData:{
		  status: 1,
		  result: {
		    totalMoney: 59,
		    list: [
		      {
		        productId: "000001",
		        productName: "公猫",
		        productPrice: 19,
		        productQuentity: 1,
		        productImage: "img/test.jpg",
		        parts: [
		          {
		            partsId: "1001",
		            partName: "猫粮"
		          },
		          {
		            partsId: "1002",
		            partName: "猫窝"
		          }
		        ]
		      },
		      {
		        productId: "000002",
		        productName: "手机",
		        productPrice: 1000,
		        productQuentity: 2,
		        productImage: "img/goods-1.png",
		        parts: [
		          {
		            partsId: "1003",
		            partName: "耳机"
		          }
		        ]
		      },
		      {
		        productId: "000003",
		        productName: "电脑",
		        productPrice: 3000,
		        productQuentity: 4,
		        productImage: "img/goods-2.png",
		        parts: [
		          {
		            partsId: "1004",
		            partName: "键盘"
		          },
		          {
		            partsId: "1005",
		            partName: "鼠标"
		          },
		          {
		            partsId: "1006",
		            partName: "音响"
		          }
		        ]
		      }
		    ]
		  },
		  message: "1111"
		}
	},
	methods:{
		cartView:function(){
			this.productList=this.mockData.result.list;
			this.totalMoney=this.mockData.result.totalMoney;
		}
	},
	mounted:function(){
		this.$nextTick(function () {
			this.cartView();
		});
	},
	filters:{
		forMartMoney:function(value){
			return '￥'+value.toFixed(2)+'元';
		}
	}

});
Vue.filter('money',function(value,type){
	return '￥'+value.toFixed(2)+type;
})