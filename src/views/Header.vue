<template>
  <div class="bg-gray-200">
    <!-- <header class="bg-white">
      <div id="navivation">
        <div id="systemNavbar" class="hidden">Idiomas</div>
        <div id="navbar" class="flex justify-between items-center">
          <div class="flex-1">
            <img class="h-20 m-5" src="../assets/svg/footer/logo-footer.png" alt />
          </div>
          <div class="flex-1 flex justify-between ml-10 mr-5">
            <img class="h-10" src="../assets/svg/submenu/notificacion.png" alt />
            <img
              class="h-10 rounded-full border-2 border-orange-600"
              src="../assets/svg/rostros/a.png"
              alt
            />
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="bars"
              class="h-10 svg-inline--fa fa-bars fa-w-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416a16 16 0 0016-16V76a16 16 0 00-16-16H16A16 16 0 000 76v40a16 16 0 0016 16zm0 160h416a16 16 0 0016-16v-40a16 16 0 00-16-16H16a16 16 0 00-16 16v40a16 16 0 0016 16zm0 160h416a16 16 0 0016-16v-40a16 16 0 00-16-16H16a16 16 0 00-16 16v40a16 16 0 0016 16z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>-->
    <header-nav></header-nav>
    <!-- Search form start  -->
    <section id="search-form" class="m-5 bg-white rounded-lg p-5 lg:w-8/12 lg:mx-auto">
      <div class="lg:w-10/12 lg:px-10 lg:ml-10">
        <h1 class="text-2xl font-bold">Analisis de Mercado Comparativo (AMC)</h1>
        <span class="text-sm flex-1 my-5">Aplicacion de analisis de precios</span>
        <a
          href
          class="py-2 bg-gray-900 block w-1/2 lg:w-3/12 text-sm font-bold text-white my-10 rounded-full text-center"
        >01 PASO</a>
        <h2 class="text-2xl font-bold">Completar Formuario</h2>
        <div class="shadow w-full bg-grey-light mt-2">
          <div class="bg-red-600 text-xs leading-none text-center text-white" style="width: 75%">75%</div>
        </div>
        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">Tipo de inmueble</span>
          <input
            placeholder="LARA GROUP"
            type="text"
            class="mt-3 p-2 mb-5 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>
        <div class="my-3 input-form">
          <span class="ml-5 uppercase font-bold">Tipo de operacion</span>
          <div class="flex justify-around">
            <a
              href
              class="brown uppercase py-2 bg-gray-900 block w-45 lg:w-3/12 text-sm text-white my-10 rounded-full text-center"
            >venta</a>
            <a
              href
              class="brown uppercase py-2 bg-gray-900 block w-45 lg:w-3/12 text-sm text-white my-10 rounded-full text-center"
            >alquiler</a>
          </div>
        </div>

        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">direccion</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>

        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">precio</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>

        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">antiguedad</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>
        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">habitaciones</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>
        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">cuarto de servicio</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>
        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">banos</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>
        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">cocheras</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>
        <div class="my-5 input-form">
          <span class="uppercase m-5 font-bold">zonificacion</span>
          <input
            placeholder="Av san juan 232"
            type="text"
            class="mt-3 p-2 text-xs border-2 rounded-full border-gray-800 w-full"
          />
        </div>

        <div class="my-3" id="input-form">
          <span class="m-5 uppercase mt-5 font-bold">calidad de construccion</span>
          <div class="flex flex-wrap justify-between">
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >excelente</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >bueno</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >regular</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >malo</a>
          </div>
        </div>

        <div class="my-3" id="input-form">
          <span class="m-5 uppercase mt-5 font-bold">calidad de acabados</span>
          <div class="flex flex-wrap justify-between">
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >excelente</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >bueno</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >regular</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >malo</a>
          </div>
        </div>

        <div class="my-3" id="input-form">
          <span class="m-5 uppercase mt-5 font-bold">calidad de conservacion</span>
          <div class="flex flex-wrap justify-between">
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >excelente</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >bueno</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >regular</a>
            <a
              href
              class="bg-gray-500 uppercase py-2 block w-45 lg:w-3/12 text-sm text-white my-5 rounded-full text-center"
            >malo</a>
          </div>
        </div>

        <div id="submitBtn" class>
          <a
            href
            class="my-5 font-semibold p-5 block bg-orange-600 w-full text-white text-md uppercase text-center"
          >guardar cambios</a>
          <a
            href
            class="my-5 font-semibold p-5 block bg-gray-800 w-full text-white text-md uppercase text-center"
          >siguiente</a>
        </div>
      </div>
    </section>
    <!-- serach form end -->

    <!-- footer strat  -->
    <footer class="bg-white mt-10">
      <img class="w-6/12 mx-auto lg:w-1/12" src="../assets/svg/footer/logo-footer.png" alt />

      <div class="hidden lg:flex justify-around w-1/2 mx-auto p-5 font-bold">
        <router-link to="/" class="flex">ALQUILER</router-link>
        <router-link to="/" class="flex">VENTA</router-link>
        <router-link to="/" class="flex">NOSOTROS</router-link>
        <router-link to="/" class="flex">CONTACTO</router-link>
      </div>

      <div class="text-center lg:flex justify-center items-center">
        <div class="flex justify-center py-2">
          <a href>
            <img class="h-6" src="../assets/svg/footer/telf.png" alt />
          </a>
          <span class="font-bold">+51 994641341</span>
        </div>
        <div class="lg:border-t border-black px-4 mx-5"></div>
        <div class="flex justify-center py-2">
          <a href>
            <img class="h-6" src="../assets/svg/footer/direcion.png" alt />
          </a>
          <span>Av. Javier Prado 1278 - San Isidro</span>
        </div>
        <div class="lg:border-t border-black px-4 mx-5"></div>

        <div class="flex items-center justify-center">
          <img class="h-6 m-2" src="../assets/svg/footer/facebook.png" alt />
          <img class="h-6 m-2" src="../assets/svg/footer/instagram.png" alt />
          <img class="h-6 m-2" src="../assets/svg/footer/twiter.png" alt />
          <img class="h-6 m-2" src="../assets/svg/footer/youtube.png" alt />
        </div>
      </div>

      <div class="bg-black flex items-center justify-center p-5 lg:mt-10">
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="copyright"
          class="h-3 text-white svg-inline--fa fa-copyright fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119.03 8 8 119.03 8 256s111.03 248 248 248 248-111.03 248-248S392.97 8 256 8zm0 448c-110.53 0-200-89.45-200-200 0-110.53 89.45-200 200-200 110.53 0 200 89.45 200 200 0 110.53-89.45 200-200 200zm107.35-101.06c-9.61 9.7-45.53 41.4-104.06 41.4-82.43 0-140.49-61.43-140.49-141.57 0-79.16 60.28-139.4 139.76-139.4 55.53 0 88.74 26.61 97.6 34.77a11.96 11.96 0 011.93 15.33l-18.15 28.1a12 12 0 01-17.5 2.93c-8.6-6.78-31.82-22.54-61.7-22.54-48.31 0-77.93 35.33-77.93 80.08 0 41.6 26.9 83.7 78.28 83.7 32.66 0 56.85-19.04 65.73-27.23a12 12 0 0117.82 1.74l19.86 27.17a11.95 11.95 0 01-1.15 15.52z"
          />
        </svg>
        <h1 class="text-white text-xs">Wlinni 2020 - Todos los Derechos Reservados</h1>
      </div>

      <div class="bg-white flex justify-center">
        <p class>Design by</p>
        <img class="h-6" src="../assets/svg/footer/log-imperiosdigitales.png" alt />
        <a class="text-orange-600" href="#">imperiodigital.com</a>
      </div>
    </footer>
    <!-- footer end  -->
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.brown {
  background-color: #a08629;
  //   font-size: 13px;
  //   color: #a08629;
}
</style>