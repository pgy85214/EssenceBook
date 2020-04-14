<template>
  <div style="background: #F6F8F7;">
    <!--固定头部-->
    <nav class="navbar navbar-expand-sm  navbar-dark fixed-top" style="background: white;">
      <a class="navbar-brand" href="#" style="color: blue;font-size: 0.9375rem;">好书精华</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" style="color: blue;font-size: 10px;">品味阅读·精彩生活</a>
        </li>
      </ul>
    </nav>


<!--轮播图-->
    <div class="container" style="margin-top:30px">
      <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
          </div>
          <div class="carousel-item">
            <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
          </div>
          <div class="carousel-item">
            <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
          </div>
        </div>

        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>

      </div>
    </div>

    <div class="container" style="margin-top:30px">
<!--搜索框-->
<div class="row"
style="padding-left: 0.9375rem;padding-right: 0.9375rem;
 ">
 <div class="input-group input-group-sm mb-3">
   <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
   <div class="input-group-append" >
     <button class="btn btn-success" type="submit">
      <span style="font-size: 0.625rem;">搜索</span>
     </button>
    </div>
 </div>

</div>


      <div class="row" style="background-color: white;">
        <div class="col-sm-6">

          <div class="d-flex mb-3 ">
               <div class="p-2" style="margin-left: -10px;">
                  <span style="color: royalblue;">|</span>
                <span style="">好书精华·</span>
                <span style=" color: blue;">免费体验区</span>
              </div>
              <div class="p-2 ml-auto" style="margin-right: -10px;">
               <span style="color: blue;">更多</span>
               </div>
            </div>
           <!--免费书类-->
          <div class="d-flex" style="color: #A3CECD;">
            <div v-if="items.thisvipId==1" v-for="(items,index) in Category" class="p-2 flex-fill"
            style=" padding-left: 0.625rem; padding-right: 0.625rem;"
             :class="[{bookdiv:index==isShow},index==0?'bookdiv1':'bookdiv2']"
             @click="changeColor(index)"
             ><span>{{items.name}}</span></div>
          </div>
          <!--免费书列表-->
          <div class="d-flex" style="padding-top:0.625rem;">
            <div v-for="(items,index) in books" class="d-sm-inline-flex p-2 flex-fill" style="height: 9.375rem; width: 3.5625rem;">
             <img style="width: 3.75rem; height: 6.25rem;"  :src="items.image">
             <span style="">{{items.name}}</span>
             </div>
          </div>

          <hr class="d-sm-none">
        </div>
        <div class="col-sm-6">
          <div class="d-flex mb-3 ">
               <div class="p-2" style="margin-left: -10px;">
                  <span style="color: royalblue;">|</span>
                <span style="">好书精华·</span>
                <span style=" color: blue;">VIP会员区</span>
              </div>
              <div class="p-2 ml-auto" style="margin-right: -10px;">
                <span style="color: blue;">更多</span>
               </div>
            </div>
           <!--会员书类-->
          <div class="d-flex" style="color: #A3CECD;">
            <div v-if="items.thisvipId==2" v-for="(items,index) in Category" class="p-2 flex-fill"
            style=" padding-left: 0.625rem; padding-right: 0.625rem;"
             :class="[{bookdivVip:index==isVip},index==4?'bookVip1':'bookVip2']"
             @click="changeColorVip(index)"
             ><span style="">{{items.name}}</span></div>
          </div>
          <!--会员书列表-->
          <div class="d-flex" style="padding-top:0.625rem;">
            <div v-for="(items,index) in books" class="d-sm-inline-flex p-2 flex-fill" style="height: 9.375rem; width: 3.5625rem;">
             <img style="width: 3.75rem; height: 6.25rem;"  :src="items.image">
             <span style="">{{items.name}}</span>
             </div>
          </div>

        </div>
      </div>

      <div class="row" style="padding-top: 0.625rem;">
        <div style="height: 16.25rem;width: 94%; border: red solid 0.0625rem; margin-left: 0.625rem;">
          广告区
        </div>
      </div>

      <div class="row" style="background: white;">
        <div class="container mt-3">
         <div class="d-flex mb-3 ">
             <div class="p-2" style="margin-left: -10px;">
               <span style="color: royalblue;">|</span>
             <span style="">好书精华·</span>
             <span style="color: blue;">阅读排行榜</span>
             </div>
           </div>
           </div>
      </div>

      <div class="row" style="background-color: white;">
        <div class="container">
          <ul class="list-group list-group-flush">
            <li v-for="(items,index) in RankingList" class="list-group-item">
              <div class="row">
                <div style="width: 4.375rem; height: 7.5rem;">
                  <img style="width: 4.375rem; height: 7.5rem;" :src="items.image">
                </div>
                <div style="padding: 0.625rem;">
                <span class="font-weight-bold" style="font-size: 0.75rem;">{{items.name}}</span>

                </div>
                <div style="position: absolute;top:2.5rem;left:5.3125rem;">
                  <i class="fa fa-fire" style="color: coral;"></i>
                  <span style="color:coral;font-size: 0.625rem;">
                    阅读量：{{items.readNumber}}
                  </span>
                </div>
                <div style="position: absolute;top:2.7rem;right:0.0625rem;">
                  <span v-if="items.thisvipid==2" class="badge badge-pill badge-info"
                  style="color: white;background: #027CBE;font-size: 0.75rem;">VIP年卡</span>
                  <span v-if="items.thisvipid==1" class="badge badge-pill badge-info"
                  style="color: white;background: #A3CECD;font-size: 0.75rem;">免费读</span>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>


    </div>

<Bottom></Bottom>
<div style="width: 100%; height: 2.5rem;">

</div>
  </div>
</template>


<script>
  import Bottom from './bottom.vue'
  export default {
    name: "HelloWorld",
    components: {Bottom},
    data() {
      return {
        Category: [],
        RankingList:[],
        isShow: -1,
        isVip: -1,
        books:[]
      }
    },
	 mounted:function(){
	   this.createcode();
	   }
    ,methods: {
        createcode: function(){
        this.$axios.get('http://localhost:8888/index').then(resp => {
            this.books=resp.data
        })
        this.$axios.get('http://localhost:8888/RankingList').then(resp => {
            this.RankingList=resp.data
        })
        this.$axios.get('http://localhost:8888/getCategory').then(resp => {
            this.Category=resp.data
        })
        },
      hello: function() {
        alert("hello")
      },
      changeColor(index) {
        this.isShow = index
      },
      changeColorVip(index) {
        this.isVip = index
      },
      classification() {
        alert("分类1")
        this.$router.push({path:'/classification'})
      }

    }
  };
</script>

<style>
   .carousel-inner img {
        width: 100%;
        height: 100%;
    }
   .fakeimg {
        height: 200px;
        background: #aaa;
    }
    .img-responsive {
      display: block;
      height: auto;
      max-width: 100%;
    }
    .bookdiv {
       color: white;
       background: #A3CECD;
     }
     .bookdivVip{
       color: white;
       background: #027CBE;
     }
     .bookdiv1{
    border-color: #A3CECD;
    border-style: solid;
    border-width: 0.0625rem
     }
     .bookdiv2{
       border-color: #A3CECD;
       border-style: solid;
       border-width: 0.0625rem;
       border-left: none;
     }
     .bookVip1{
       border-color: #027CBE;
       border-style: solid;
       border-width: 0.0625rem;
     }
     .bookVip2{
       border-color: #027CBE;
       border-style: solid;
       border-width: 0.0625rem;
       border-left: none;
     }
    body {
      font-size: 0.5rem;
    }
</style>
