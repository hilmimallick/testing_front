<template>
    <div class="contact-body">
      <div class="container">
      <div class="contact-box">
        <div class="left"></div>
        <div class="right">
          <h2>Countact Us</h2>
          <form action="https://formspree.io/f/mgednobw" method="POST">
            <input type="text" class="field" placeholder="Your Name" />
            <input type="email" class="field" placeholder="Your Email" />
            <input type="text" class="field" placeholder="Your Phone" />
            <textarea class="field" placeholder="Message"></textarea>
            <button class="contact-btn">SEND</button>
          </form>
        </div>
      </div>
    </div>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.contact-body {
  width: 100%;
  height: 100vh;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 100px;
}

.container:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #1a2980, #26d0ce);
  z-index: -1;
  filter: blur(50px);
}

.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.left {
  height: 100%;
  background: url("https://i.postimg.cc/1tzqxm5C/Screenshot-2022-08-11-150458.png")
    no-repeat center;
  background-size: cover;
}

.right {
  padding: 25px 40px;
}

h2 {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: white;
}

h2:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: white;
}

.field {
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 2px solid white;
  background-color: rgba(230, 230, 230, 0.6);
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
}



.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.field:focus {
  background-color: #fff;
  border: 3px solid rgba(30, 250, 228, 0.6);
}

.area {
  min-height: 150px;
}

.contact-btn {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #26d0ce;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: 0.3s;
}

.contact-btn:hover {
  background-color: #20aeac;
}

@media screen and (max-width: 880px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
}

</style>