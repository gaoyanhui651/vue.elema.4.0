var Util = {
		getHTML:function(id){
			return document.getElementById(id).innerHTML;
		}
	}

var Product = {
		template:Util.getHTML("productTem"),
		data:function(){
			return {
				list:["K Coffee","桶","美味汉堡","吮指原味鸡","小食/配餐","甜品/冰激凌","缤纷饮料","儿童餐"]
			}
		}
};
var Big = {
	template:Util.getHTML("foodTem")
}
var Food1 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			};
		}
	},
	created:function(){
		this.$http.get("data/food1.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
				this.num = new Array( this.list.length).fill(0);
			}
		})
	}
}
var Food2 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food2.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot;
			}
		})
	}
}
var Food3 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food3.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
			}
		})
	}
}
var Food4 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food4.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
			}
		})
	}
}
var Food5 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food2.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
			}
		})
	}
}
var Food6 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food3.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
			}
		})
	}
}
var Food7 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food7.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
			}
		})
	}
}
var Food8 = {
	template:Util.getHTML("food1Tem"),
	data:function(){
		return {
			list:[]
		}
	},
	methods:{
		reduce:function(index){
			this.list[index].sum++;
		},
		add:function(index){
			if(this.list[index].sum <= 0){
				this.list[index].sum = 0;
			}else{
				this.list[index].sum--;
			}
		}
	},
	created:function(){
		this.$http.get("data/food1.json").then(function(res){
			if(res&&res.data.errno === 0){
				this.list = res.data.data.hot ;
			}
		})
	}
}

// 评价列表
var All = {
	template:"#all",
	data:function(){
		return {
			list:228,
			text1:"非常好吃",
			text2:"如风达",
			text3:"good"
		}
	}
}
var Good = {
	template:"#all",
	data:function(){
		return {
			list:223,
			text1:"",
			text2:"如风达",
			text3:"good"
		}
	}
}
var Nogood = {
	template:"#all",
	data:function(){
		return {
			list:5,
			text1:"一般般",
			text2:"我等的花儿都谢了",
			text3:"难吃"
		}
	}
}




var Judge = {
	template:"#judge",

};
var routes = [
	{path:"/product",component:Product,
			children:[
				{path:"/big",component:Big,
					children:[
						{path:"/product/big/food1",component:Food1},
						{path:"/product/big/food2",component:Food2},
						{path:"/product/big/food3",component:Food3},
						{path:"/product/big/food4",component:Food4},
						{path:"/product/big/food5",component:Food5},
						{path:"/product/big/food6",component:Food6},
						{path:"/product/big/food7",component:Food7},
						{path:"/product/big/food8",component:Food8}
					]
				}
			]
    },
	{path:"/judge",component:Judge,
				   children:[
				   		{path:'/judge/all',component:All},
				   		{path:'/judge/good',component:Good},
				   		{path:'/judge/nogood',component:Nogood}
				   ]


	},
	{path:"*", redirect: '/product/big/food1'}
];
var router = new VueRouter({
	routes:routes
});

var store = new Vuex.Store({
			state:{
				sum:0
			},
			mutations:{
                reduce:function(state,price){
                 	state.sum += +price;
                 	console.log(typeof state.sum)
                 	console.log(state.sum);
                },
                add:function(state,price){
                    state.sum -= +price;
                    console.log(state.sum)
                }
              }
		});


new Vue({
	el:"#app",
	router:router,
	store:store
})