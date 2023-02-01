<script setup></script>
<template>
  <main>
    <div class="boxs">
      <h4>FORUM REMAJA SANTRI DAN ALLUMNI</h4>

      <div class="column">
        <div
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="ri-scales-3-line"></i>
          <h5>VISI</h5>
        </div>
        <div
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="ri-scales-3-fill"></i>
          <h5>MISI</h5>
        </div>
      </div>
      <!-- Modal -->
      <!-- visi -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">VISI</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  height: 20vh;
  background: rgba(206, 206, 206, 0.5);
  display: flex;
  justify-content: center;
}
.boxs {
  width: 60%;
  height: auto;
  padding-bottom: 25px;
  background-color: rgba(255, 255, 255, 0.623);
  position: absolute;
  z-index: 200px;
  top: -100px;
  box-shadow: 1px 1px 7px black;
}
.boxs h4 {
  padding: 5px;
  font-family: "Playfair Display", serif;
  color: black;
  text-align: center;
}
.column {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.column .btn {
  width: 9rem;
  height: 8rem;

  background-color: white;
  box-shadow: 1px 1px 7px black;
  text-align: center;
}
.column .btn i {
  font-size: 4rem;
  color: black;
}
.column .btn h5 {
  font-size: 28px;
  top: -15px;
  color: black;
  font-family: "Playfair Display", serif;
}
.modal .modal-content {
  background-color: aqua;
}
@media screen and (max-width: 414px) {
  .boxs {
    height: auto;
    top: -70px;
  }
  .boxs h4 {
    font-size: 18px;
  }
  .column .kotak {
    width: 5rem;
    height: 5rem;
  }
  .column .kotak i {
    font-size: 2rem;
  }
  .column .kotak h5 {
    font-size: 18px;
    top: -5px;
  }
}
</style>
