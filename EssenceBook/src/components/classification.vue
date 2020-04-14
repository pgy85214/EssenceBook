<template>

  <div>
  <!--  导航栏固定底部-->
  <nav class="navbar navbar-expand-sm  navbar-dark fixed-top" style="background: white;">
        <a class="navbar-brand" style="font-size: 1.25rem; font-family: SimHei;" @click="$router.go(-1)"><返回</a>
      </nav>

    <!--头部-->



    <div style="margin: 0.625rem; margin-top:0.625rem;font-size: 1rem;">
      <div>
       <p class="text-center">好书精华·<span class="text-primary" style="font-size: 1.125rem;">免费体验区</span></p>
      </div>
       <div>
         <div class="container">
           <ul class="list-group" >
             <li v-for="(items,index) in datas" class="list-group-item" style="border: #DFDFDF solid 0.0625rem;">
               {{items.city}}<span class="pull-right" style="font-size: 0.9375rem; font-family: SimHei;">></span></li>
           </ul>
         </div>

      </div>
    </div>


    <div style="margin: 0.625rem; margin-top:3.125rem; font-size: 1rem;">
      <div>
       <p class="text-center">好书精华·<span class="text-primary" style="font-size: 1.125rem;">VIP会员区</span></p>
      </div>
       <div>
         <div class="container">
           <ul class="list-group" >
             <li v-for="(items,index) in datasvip" class="list-group-item" style="border: #DFDFDF solid 0.0625rem;">
               {{items.city}}<span class="pull-right" style="font-size: 0.9375rem; font-family: SimHei;">></span></li>
           </ul>
         </div>

      </div>
    </div>




 <Bottom></Bottom>


    <!--固定底部-->
   <div class="row" style="height: 4.375rem; width: 100%;">
      </div>
  </div>
</template>

<script>
  import Bottom from "./bottom.vue"
  export default{
    name:"Classification",
    components: {Bottom},
    data() {
      return {
        datas: [{
            city: "免费体验区"
          },
          {
            city: "青少年阅读"
          },
          {
            city: "著书人论书"
          },
          {
            city: "其他免费"
          }
        ],
        datasvip: [{
            city: "财经"
          },
          {
            city: "文化"
          },
          {
            city: "科技"
          },
          {
            city: "保险"
          },
          {
            city: "历史"
          },
          {
            city: "军事"
          },
          {
            city: "政治"
          },
          {
            city: "法律"
          }
        ],
        books:
         [
          {
            id: 1,
            name: "钢铁是怎样炼成的",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :1
          },
          {
            id: 2,
            name: "小飞侠",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :0
          },
          {
            id: 3,
            name: "岳飞传",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :1
          },
          {
            id: 4,
            name: "八十天环游地球",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :0
          },
          {
            id: 5,
            name: "汤姆叔叔的小屋",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :1
          },
          {
            id: 6,
            name: "三国演义",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :0
          },
          {
            id: 7,
            name: "水浒传",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :1
          },
          {
            id: 8,
            name: "西游记",
            image: "https://i.loli.net/2019/04/10/5cada940e206a.jpg",
            thisvip :0
          }
        ]
    }
  },
  methods:{

  }
  }
</script>

<style>
</style>
