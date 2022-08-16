<template>
  <div class="home-body">
    <!-- image slider start -->
    <div class="slider">
      <div class="slides">
        <!-- radio buttons start -->
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <input type="radio" name="radio-btn" id="radio5" />
        <!-- radio buttons end -->
        <!-- slide images start -->
        <div class="slide first">
          <img src="https://i.postimg.cc/Hs6WCCsz/pexels-lumn-167706.jpg" />
        </div>

        <div class="slide">
          <img
            src="https://i.postimg.cc/2S7Xxn5R/pexels-ihsan-adityawarman-1445696.jpg"
          />
        </div>

        <div class="slide">
          <img src="https://i.postimg.cc/pL1gK2SD/pexels-web-donut-19090.jpg" />
        </div>

        <div class="slide">
          <img src="https://i.postimg.cc/NM8JCYdC/pexels-mnz-1598505.jpg" />
        </div>

        <div class="slide">
          <img src="https://i.postimg.cc/xTVjbPm0/pexels-pixabay-267320.jpg" />
        </div>
        <!-- slide images end -->
        <!-- automatic navigation start -->
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
          <div class="auto-btn5"></div>
        </div>
        <!-- automatic navigation end -->
      </div>
      <!-- manual navigation start -->
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        <label for="radio5" class="manual-btn"></label>
      </div>
      <!-- manual navigation end -->
    </div>
    <!-- image slider end -->
    <div class="color-overlay">
      <div class="home-text-1">
        <h1 id="home-text">WELCOME TO</h1>
      </div>
      <div class="home-text-2">
        <h1 id="home-text">LACED HOVERS</h1>
      </div>
    </div>
  </div>
</template>
<script>
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

export default {};
</script>
<style>
.home-body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #3d55dd, #01fcf8);
  overflow-x: hidden;
}

#home-text {
  font-size: 6em;
  font-weight: bolder;
}

.home-text-1 {
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 13em;
}

.home-text-2 {
  color: white;
  display: flex;
  justify-content: center;
}

.color-overlay {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  position: absolute;
}

.slider {
  width: 800px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
}

.slides {
  width: 500%;
  height: 500px;
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 20%;
  transition: 2s;
}

.slide img {
  width: 800px;
  height: 500px;
}

/*manual slide navigation  */
.navigation-manual {
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  border: 2px solid #40d3dc;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child) {
  margin-right: 40px;
}

.manual-btn:hover {
  background: #40d3dc;
}

#radio1:checked ~ .first {
  margin-left: 0;
}
#radio2:checked ~ .first {
  margin-left: -20%;
}
#radio3:checked ~ .first {
  margin-left: -40%;
}
#radio4:checked ~ .first {
  margin-left: -60%;
}
#radio5:checked ~ .first {
  margin-left: -80%;
}

/* automatic navigation */

.navigation-auto {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 800px;
  margin-top: 460px;
}

.navigation-auto div {
  border: 2px solid #40d3dc;
  padding: 5px;
  border-radius: 10px;
  transition: 1s;
}

.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background-color: #40d3dc;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background-color: #40d3dc;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background-color: #40d3dc;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background-color: #40d3dc;
}

#radio5:checked ~ .navigation-auto .auto-btn5 {
  background-color: #40d3dc;
}

@media only screen and (max-width: 810px) {
  .slider {
    width: 600px;
  }

  .slide img {
    width: 600px;
  }
}

@media only screen and (max-width: 630px) {
  .slider {
    width: 400px;
  }

  .slide img {
    width: 400px;
  }
}

@media only screen and (max-width: 428px) {
  .slider {
    width: 300px;
  }

  .slide img {
    width: 300px;
  }
}
</style>
