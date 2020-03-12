<template>
  <div class="bg-img bg-cover">
    <!-- <nav class="flex text-white justify-between items-center">
      <div class="flex-1 p-5">
        <div class="flex justify-start ml-10">
          <router-link to="/" class="flex p-5">
            <img class="h-6 mr-2" src="../assets/svg/top/ico-1.png" alt /> ENG
          </router-link>
          <router-link to="/" class="flex p-5">
            <img class="h-6 mr-2" src="../assets/svg/top/ico-2.png" alt /> ESP
          </router-link>
        </div>
      </div>

      <div id="social" class="flex-1">
        <ul class="flex">
          <li>
            <router-link to="/" class="flex">
              <img class="h-6 w-6" src="../assets/svg/top/telf.png" alt /> (54) 9 3735 431234
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex">
              <img class="h-6" src="../assets/svg/top/rs-facebook.png" alt />
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex">
              <img class="h-6" src="../assets/svg/top/rs-instagram.png" alt />
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex">
              <img class="h-6" src="../assets/svg/top/rs-twter.png" alt />
            </router-link>
          </li>

          <li>
            <router-link to="/" class="flex">
              <img class="h-6" src="../assets/svg/top/rs-youtube.png" alt />
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex">
              <img class="h-6" src="../assets/svg/top/usuario-1.png" alt />
            </router-link>
          </li>
          <li>
            <router-link to="/" class="flex">
              <img class="h-6" src="../assets/svg/top/registro-1.png" alt />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>-->

    <div class="flex justify-around items-center">
      <div class="w-1/3">
        <h1 class="text-white font-bold text-5xl p-10 tracking-wider">
          Profesionales inmobiliarios dedicados
          <span class="block">a usted</span>
        </h1>
      </div>

      <div class="w-2/5">
        <div id="form" class="bg-black text-white py-5 px-10 m-10 rounded-lg text-c-s">
          <div class="flex my-5 items-center">
            <h1 class="text-xl font-semibold ml-2">Busqueda</h1>
            <img class="h-5 ml-5" src="../assets/svg/iconos/map-solid.png" alt />
          </div>
          <div class="mb-10 text-sm ml-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ullam, eos assumenda eius dolorum nam alias fugiat.</p>
          </div>
          <div class="my-5">
            <label for class="ml-2 block uppercase">Buscar</label>
            <input type="text" name class="block w-full rounded-full text-xl" />
          </div>

          <div class="my-5">
            <label for class="ml-2 block uppercase">tipo de venta</label>
            <input type="text" name class="block w-full rounded-full text-xl" />
          </div>

          <div class="my-5">
            <label for class="ml-2 block uppercase">tipo inmueble</label>
            <input type="text" name class="block w-full rounded-full text-xl" />
          </div>

          <div class="ml-2">
            <input type="checkbox" name id />
            <span class="text-sm ml-2">Mostrar Busqueda en el mapa?</span>
          </div>

          <div class="my-5">
            <button class="block w-full rounded-full text-md text-white brown py-2">BUSCAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>


<style lang="scss">
.bg-img {
  background-image: url("../assets/img/banners/banner_principal.png");
}
.bd {
  border: 1px solid white;
}
.brown {
  background-color: #a08629;
  //   font-size: 13px;
  //   color: #a08629;
}
</style>