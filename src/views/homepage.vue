<template>
  <div>
    <!-- header 部分 -->
    <div class="header">
      <h1 class="title">2024 project: ScummVM for Group 8</h1>
    </div>

    <!-- banner 部分 -->
    <div class="banner">
      <div class="w">
        <div class="subnav">
          <ul>
            <li><a href="https://docs.scummvm.org/en/v2.8.0/">About ScummVM<span>&gt;</span></a></li>
            <li><a href="https://onq.queensu.ca/d2l/le/content/959322/viewContent/5711369/View">Project detail <span>&gt;</span></a></li>
            <li><a href="#">A1. Conceptual Architecture <span>&gt;</span></a>
                <ul class="extendlist">
                    <li class="ex"><a class="link" href="https://docs.google.com/document/d/1kMLdL93nUJLYjgldISFDgx3uo8D1ewVyGsJoDKKIpgo/edit?usp=sharing">Report</a></li>
                    <li class="ex"><a class="link" href="https://youtu.be/Edj3f_PXFKA">Presentation Video</a></li>
                </ul>
            </li>
            <li><a href="#">A2. Concrete Architecture <span>&gt;</span></a></li>
            <li><a href="#">A3. Architectural Enhancement <span>&gt;</span></a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- intro 部分 -->
    <div class="intro">
        <h1>Introduction</h1>
        <h2>Group Members</h2>
    <div class="intro1">
            
    <div class="nameSection">
        <div class="name-sec">
        <ul class="name">
            <li>Zihao Lin</li>
            <li>Runfeng Zou</li>
            <li>Ziqi Meng</li>
            <li>Yuhan Zhang</li>
            <li>Xuefeng Qin</li>
            <li>Yuqi Liang</li>
        </ul>
    </div>

    <div class="IDsec">
        <li>20321567</li>
        <li>20302123</li>
        <li>20322033</li>
        <li>20345639</li>
        <li>20340486</li>
        <li>20322627</li>
    </div>

    <div class="Email">
        <li>21ZL60@queensu.ca</li>
        <li>21zr4@queensu.ca</li>
        <li>21zm22@queensu.ca</li>
        <li>21yz2170@queensu.ca</li>
        <li>21xq8@queensu.ca</li>
        <li>21yl111@queensu.ca</li>
    </div>
    </div>
    </div>
    <h2>About project</h2>
    <div class="intro2">
        
        <p>
            The purpose of this project is to give you an appreciation of software architecture in the context of a large software system. You will create a detailed architecture report for a large software system. This year's project is ScummVM, "which allows you to run certain classic graphical adventure and role-playing games, provided you already have their data files". Essentially, it "replaces the executables shipped with the games, allowing you to play them on systems for which they were never designed". 
        </p>
    </div>
    
    
        
    </div>
  </div>
</template>


<script>
export default {
    name: 'HomePageComponent',  
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.w {
    width: 1260px;
    margin: auto;
}

body {
    background-color: #f3f5f7;
    
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}



.title{
    text-align: center;
    margin: 0;
    padding: 20px 0;
    background-color: gainsboro;
    border-radius: 10px;
}

.banner {
    height: 420px;
    background-color: #bf6b27;
}

.banner .w {
    height: 420px;
    background-image: url('@/assets/scummVM.png');
}

.subnav {
    float: left;
    width: 300px;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}


.subnav ul li {
    position: relative; /* 添加这行，确保子菜单相对主菜单定位 */
    height: 84px;
    line-height: 84px;
    padding: 0 20px;
}


.subnav ul li a {
    font-size: 18px;
    color: #fff;
}

.subnav ul li:hover a{
    color: #00b4ff;
}

.subnav ul li:hover{
    background-color: #fff;
}

.subnav ul li a span{
    float: right;
}

.intro{
    margin: 30px 130px 0 130px;
    background-color: gainsboro;
    height: auto;
    
}

.intro1{
    display: flex;
}

.intro h1{
    text-align: center;
    
}

.nameSection{
    margin-top: 20px;
    display: flex;  
    margin-left: 150px;
}

.name li{
    font-size: 20px;
    margin: 10px 0 10px 20px;
}

.IDsec{
    margin-left: 30px;
}
.IDsec li{
    font-size: 20px;
    margin: 10px 0 10px 20px;
}
.intro h2{
    margin-left: 20px;
}

.Email{
    margin-left: 30px;
}

.Email li{
    font-size: 20px;
    margin: 10px 0 10px 20px;
}
.intro2{
    display: flex;
}

.intro2 p{
    margin-top: 20px;
    font-size: 20px;
    margin: 20px 20px 20px 20px;
}

.extendlist {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.extendlist li {
    width: 170px;
    height: 84px;
}

.link {
    font-size: 16px;
    color: #fff; /* 默认为白色 */
}

.link:hover {
    color: #00b4ff; /* 鼠标悬停时变为蓝色 */
}

.subnav ul li:hover .extendlist,
.extendlist:hover {
    display: block;
}

.extendlist li {
    font-size: 16px;
}



</style>

