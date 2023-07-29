<template>
  <div id="app">
<!--    <div class="iphone">-->
<!--      <div class="scroll">-->
<!--        <router-view/>-->
<!--      </div>-->
<!--      <div class="notch"></div>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "assets/css/style";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  margin: auto;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html,body {
  height:100%;
  padding: 0;
  margin: 0;
}

.iphone {
  margin:auto;
  border:10px solid black;
  border-radius:40px;
  width:320px;
  height:700px;
  position:relative;
  box-shadow:0px 20px 15px #33333335;
  overflow: hidden;
  .scroll {
    overflow: auto;
    height: 100%;
    width: 105%;
    //padding: 40px 29px 0 16px;
    box-sizing: border-box;
  }
}

.notch {
  z-index:50;
  top:0;
  left:62px;
  position:absolute;
  background:#000000;
  width:200px;
  height:30px;
  border-radius:0px 0px 20px 20px;
}

.screen {
  z-index:10;
  position:absolute;
  background:url("https://cdn57.androidauthority.net/wp-content/uploads/2020/10/iPhone-12-Orb-Blue-Light.jpg");
  background-size:cover;
  width:100%;
  height:100%;
  border-radius:30px;
}

.icons {
  margin-top:40px;
  justify-content:center;
  display:flex;
}

.widget {
  display:flex;
  z-index:100;
  background:url("https://i.ibb.co/KjJZthX/ios14widget.png");
  background-size:contain;
  width:85%;
  height:120px;
  border-radius:20px;
  box-shadow:0px 5px 5px #33333340;
  cursor:pointer;
  transition: transform 400ms ease-in-out;
}

.app:hover {
  transform:scale(0.8);
}

.app_2_row:hover {
  transform:scale(0.8);
}

.app_3_row:hover {
  transform:scale(0.8);
}

.app_4_row:hover {
  transform:scale(0.8);
}

.widget:hover {
  transform:scale(0.9);
}

.app_4_row:nth-child(1)::before {
  text-align:center;
  position:absolute;
  z-index:200;
  left:40px;
  bottom:40px;
  content:'5';
  width:22px;
  height:22px;
  background:red;
  border-radius:50%;
  color:white;
  font-family:'Arial',sans-serif;
  font-size:16px;
}

.app_4_row:nth-child(3)::before {
  text-align:center;
  position:absolute;
  z-index:200;
  left:40px;
  bottom:40px;
  content:'9';
  width:20px;
  height:20px;
  background:red;
  border-radius:50%;
  color:white;
  font-family:'Arial',sans-serif;
  font-size:16px;
}
</style>
<script setup>
</script>
