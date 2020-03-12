<template>
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
</template>