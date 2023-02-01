<script setup>
import Profile from "../components/Profile.vue";
import Sejarah from "../components/Sejarah.vue";
import Struktural from "../components/Struktural.vue";
import Demisioner from "../components/Demisioner.vue";
import Galeri from "../components/Galeri.vue";
import { reactive } from "vue";

const toggle = reactive({
  setNavbar: false,
  // alert("tes");
  // document.getElementById("nav").classList.toggle("navactive");
});
</script>

<template>
  <header class="fixed-top">
    <div class="logo"><img src="../assets/logoforsa.png" alt="" /></div>

    <nav
      :class="{ active: toggle.setNavbar }"
      class="navbar"
      id="nav"
      ref="header"
    >
      <ul>
        <li>
          <a class="ri-home-3-line" href="#"> Home</a>
        </li>
        <li><a class="ri-file-paper-line" href="#sejarah"> Sejarah</a></li>
        <li>
          <a class="ri-group-line" href="#struktural"> Struktural</a>
        </li>
        <li>
          <a class="ri-user-star-line" href="#demisioner"> Demisioner</a>
        </li>
        <li>
          <a class="ri-gallery-fill" href="#galeri"> Galery</a>
        </li>
        <div class="text">
          <p>
            Jadilah kader organisasi yang gagah,kuat,dan penuh tanggung jawab
            dalam menjalankan tugasnya.
          </p>
        </div>
      </ul>
    </nav>
    <div @click="toggle.setNavbar = !toggle.setNavbar">
      <i class="icon ri-align-justify" id="menuIcon"></i>
    </div>
  </header>
  <div class="top">
    <div class="welcome">
      <h3>WELCOME TO</h3>
      <h3>FORSA</h3>
      <p>Forum Remaja Santri Dan Allumni</p>
    </div>
  </div>
  <Profile></Profile>
  <Sejarah id="sejarah"></Sejarah>
  <Struktural id="struktural"></Struktural>
  <Demisioner id="demisioner"></Demisioner>
  <Galeri id="galeri"></Galeri>
</template>
<style scoped>
header {
  width: 100%;
  padding: 5px 0;
  background: rgba(31, 9, 110, 0.5);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 80px;
  height: 70px;
  margin-left: 15px;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.navbar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
}
.navbar ul li {
  list-style: none;
  display: flex;
  margin: 10px;
  align-items: center;
}
.navbar ul li a {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  transition: all 0.5s ease;
}
ul li a:hover {
  background-color: rgba(255, 255, 255, 0.637);
  color: black;
  border-radius: 25px;
}
ul li a:active,
:focus {
  text-decoration: underline;
  font-weight: 1000;
}
.text {
  display: none;
}
.icon {
  display: none;
}
.top {
  width: 100%;
  height: 80vh;
  background-image: url(../assets/tes.jpeg);
  background-size: cover;
  background-position-y: -50px;
}
.welcome {
  padding-top: 150px;
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  background: rgba(16, 9, 41, 0.5);
}
.welcome h3 {
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  font-family: "Rowdies", cursive;
}
.welcome p {
  font-size: 2rem;
  font-family: "Playfair Display", serif;
}
@media screen and (max-width: 414px) {
  .top {
    height: 50vh;
    background-position-y: 0;
  }
  .welcome h3 {
    font-size: 2rem;
  }
  .welcome p {
    font-size: 1rem;
  }
}
@media (max-width: 768px) {
  .navbar {
    position: fixed;
    display: block;
    width: 60%;
    height: 100vh;
    top: 0;
    right: 0;
    padding: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    /* background-color: red; */
  }
  .navbar.active {
    transform: translateX(0);
  }
  .navbar ul {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    display: block;
    /* top: -40px; */
    padding: 60px 0 30px;
    background-color: rgba(0, 0, 0, 0.836);
  }
  .navbar ul li {
    border: 1px solid white;
    margin: 40px 10px;
    border-radius: 20px;
    justify-content: center;
  }
  .navbar ul li a:hover {
    width: 100%;
    text-align: center;
  }
  .text {
    display: inline;
    width: 100%;
    height: auto;
    text-align: center;
  }
  .text p {
    color: white;
  }
  .icon {
    display: inline;
    color: white;
    margin-right: 20px;
    font-size: 27px;
    padding: 0 5px;
    border: 1px solid rgb(255, 255, 255);
  }
}
</style>
