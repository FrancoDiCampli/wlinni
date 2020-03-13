<template>
  <div class="bg-gray-200">
    <div class="bg-img bg-cover h-full">
      <div class="container m-auto">
        <nav class="text-white">
          <div class="flex items-center">
            <div class="flex-1">
              <div class="flex justify-start">
                <router-link to="/" class="flex p-5">
                  <img class="h-6 mr-2" src="../assets/svg/top/ico-1.png" alt /> ENG
                </router-link>
                <router-link to="/" class="flex p-5">
                  <img class="h-6 mr-2" src="../assets/svg/top/ico-2.png" alt /> ESP
                </router-link>
              </div>
            </div>

            <div id="social" class="flex-1">
              <ul class="flex justify-around items-center">
                <div class="flex justify-start">
                  <li>
                    <router-link to="/" class="flex">
                      <img class="h-6 w-6" src="../assets/svg/top/telf.png" alt />
                      <label class="flex px-4" for>(54) 9 3735 431234</label>
                    </router-link>
                  </li>
                </div>

                <div class="flex justify-around">
                  <li>
                    <router-link to="/" class="flex px-3">
                      <img class="h-6" src="../assets/svg/top/rs-facebook.png" alt />
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/" class="flex px-3">
                      <img class="h-6" src="../assets/svg/top/rs-instagram.png" alt />
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/" class="flex px-3">
                      <img class="h-6" src="../assets/svg/top/rs-twter.png" alt />
                    </router-link>
                  </li>

                  <li>
                    <router-link to="/" class="flex px-3">
                      <img class="h-6" src="../assets/svg/top/rs-youtube.png" alt />
                    </router-link>
                  </li>
                </div>

                <div class="flex justify-end">
                  <li>
                    <router-link to="/" class="flex px-2">
                      <img class="h-10" src="../assets/svg/top/usuario-1.png" alt />
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/" class="flex pl-2">
                      <img class="h-10" src="../assets/svg/top/registro-1.png" alt />
                    </router-link>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <!-- atado con alambre -->
          <div class="border-b-2 border-gray-600">
            <input hidden type="text" />
          </div>

          <div class="flex-1 items-center pt-2">
            <ul class="flex justify-between items-center">
              <div class="flex justify-start pl-5">
                <li>
                  <router-link to="/">
                    <img class="h-20" src="../assets/svg/top/logo-top.png" alt />
                  </router-link>
                </li>
              </div>

              <div class="flex">
                <li>
                  <router-link to="/" class="text-white text-sm font-bold px-8">PRECIOS</router-link>
                </li>
                <li>
                  <router-link to="/" class="text-white text-sm font-bold px-8">ALQUILER</router-link>
                </li>
                <li>
                  <router-link to="/" class="text-white text-sm font-bold px-8">VENTA</router-link>
                </li>
                <li>
                  <router-link to="/" class="text-white text-sm font-bold px-8">NOSOTROS</router-link>
                </li>
                <li>
                  <router-link to="/" class="text-white text-sm font-bold px-8">CONTACTO</router-link>
                </li>
              </div>
            </ul>
          </div>
        </nav>

        <div class="flex justify-around items-center">
          <div class="flex-wrap pw-1/3">
            <h1 class="text-white font-bold text-5xl p-10 tracking-wider">
              Profesionales
              <span class="block">inmobiliarios</span>
              dedicados
              <span class="block">a usted</span>
            </h1>
          </div>

          <div class="lg:flex hidden w-2/5">
            <div id="form" class="bg-black text-white py-5 px-10 m-10 rounded-lg text-c-s">
              <div class="flex my-5 items-center">
                <h1 class="text-xl font-semibold ml-2">Busqueda</h1>
                <img class="h-5 ml-5" src="../assets/svg/iconos/map-solid.png" alt />
              </div>
              <div class="mb-10 text-sm ml-2">
                <p
                  class="text-sm leading-tight align-middle text-left"
                >Atención!! Se filtraran las propiedades en el mapa automáticamente se elija la condición</p>
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
                <button
                  class="block w-full rounded-full text-md text-white hover:bg-yellow-500 brown py-2"
                >BUSCAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container m-auto bg-blue-900 border-t-2 border-yellow-600 rounded-b-lg">
      <div class="flex justify-around items-center">
        <div class="lg:flex hidden justify-start">
          <div class="flex p-6">
            <img class="w-6" src="../assets/svg/iconos/Trazado 2376.png" alt />
          </div>

          <div class="flex-1">
            <h2 class="text-white font-light text-4xl">Eres Agente Inmobiliaria</h2>
            <span class="text-yellow-600 text-xl">solicita tu cuenta en pocos minutos</span>
          </div>
        </div>

        <div class="flex-wrap pw-1/3"></div>

        <div class="flex w-2/5 justify-center">
          <div class="my-5">
            <button
              class="block w-64 h-16 text-sm font-bold text-white bg-orange-500 py-2 hover:bg-orange-400"
            >INICIA TU CUENTA AHORA</button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div class="text-center pt-10 pb-16">
        <h1 class="font-bold text-4xl">¿Por qué usar Wlinii?</h1>
        <div class="w-2 mx-auto border-b-2 border-yellow-500 px-10 pt-3"></div>
      </div>
      <div class="container m-auto">
        <div class="flex justify-center justify-around pb-16">
          <div class="flex-1 text-center px-16">
            <img class="w-32 mx-auto" src="../assets/svg/iconos/Grupo 1244.png" alt />
            <div class="pt-5 pb-5 text-xl font-bold">Agentes Expertos</div>
            <p
              class="text-sm text-center leading-relaxed"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laborum atque nesciunt facere? Harum, magnam inventore iusto quod in eius officia perspiciatis molestiae! Rerum eum inventore excepturi esse velit sapiente.</p>
          </div>
          <div class="flex-1 text-center px-16">
            <img class="w-32 mx-auto" src="../assets/svg/iconos/Grupo 1245.png" alt />
            <div class="pt-5 pb-5 text-xl font-bold">Acelera tus Ventas</div>
            <p
              class="text-sm text-center leading-relaxed"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laborum atque nesciunt facere? Harum, magnam inventore iusto quod in eius officia perspiciatis molestiae! Rerum eum inventore excepturi esse velit sapiente.</p>
          </div>
          <div class="flex-1 text-center px-16">
            <img class="w-32 mx-auto" src="../assets/svg/iconos/Grupo 1246.png" alt />
            <div class="pt-5 pb-5 text-xl font-bold">Confiabilidad</div>
            <p
              class="text-sm text-center leading-relaxed"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laborum atque nesciunt facere? Harum, magnam inventore iusto quod in eius officia perspiciatis molestiae! Rerum eum inventore excepturi esse velit sapiente.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center pt-10 pb-12">
      <img class="w-6 pt-18 mx-auto" src="../assets/svg/iconos/Trazado 2376.png" alt />
      <h1 class="font-bold text-4xl">Propiedades</h1>
      <div class="w-2 mx-auto border-b-2 border-yellow-500 px-10 pt-3"></div>
    </div>

    <div class="w-1/5 w-auto text-center border-2 mx-auto border-yellow-500">
      <div class="flex justify-center px-3 py-1">
        <h1 class="font-bold text-xl text-orange-500 pr-4">+</h1>
        <h1 class="font-bold text-xl tracking-widest">MÁS DESTACADOS</h1>
      </div>
    </div>

    <footer-all></footer-all>
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
  height: 150vh;
}
.bg-img2 {
  background-image: url("../assets/img/banners/banner_principal.png");
  height: 120vh;
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