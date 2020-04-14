<template>
  <div class="fixed-bottom" style="font-size: 0.9375rem;">
        <nav class="navbar-dark fixed-bottom" style="background: #EEEEEE; color: #ABABAB;">
  <ul class="nav nav-justified">
        <li class="nav-item">
          <a @click="homepage()"><i class="fa fa-home" style="color: black; font-size: 1rem;"></i>
            <br>
            <span>首页</span>
          </a>
        </li>
        <li class="nav-item">
          <a @click="classification()"><i class="fa fa-bars" style="color: black;"></i>
            <br>
            <span>分类</span>
          </a>
        </li>
        <li class="nav-item">
          <a @click="contact()"><i class="fa fa-envelope-open-o" style="color: black;"></i>
            <br>
            <span>联系我们</span>
          </a>
        </li>
        <li class="nav-item">
          <a @click="mypage()"><i class="fa fa-address-card-o" style="color: black;"></i>
            <br>
            <span>我的</span>
          </a>
        </li>
      </ul>
      </nav>
      </div>
</template>

<script>
  export default{
    name:"Bottom",
    methods:{
      homepage() {
        alert("首页1")
        this.$router.push({path:'/'})
      },
      classification() {
        alert("分类1")
        this.$router.push({path:'/classification'})
      },
      contact(){
        alert("联系我们1")
        this.$router.push({path:'/contact'})
      },
      mypage(){
        alert("我的1")
        this.$router.push({path:'/mypage'})
      }
    }
  }
</script>

<style>
</style>
