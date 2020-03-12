<template>
  <div>
    <header>
      <div class="hidden bg-gray-800 lg:flex text-white justify-between items-center">
        <!-- Languajes -->
        <div class="flex-2 flex px-10">
          <router-link to="/" class="flex p-5">
            <img class="h-5 mr-2" src="../assets/svg/top/ico-1.png" alt />
            <p class="text-sm">ENG</p>
          </router-link>
          <router-link to="/" class="flex p-5">
            <img class="h-5 mr-2" src="../assets/svg/top/ico-2.png" alt />
            <p class="text-sm">ESP</p>
          </router-link>
        </div>
        <!-- Contact  -->
        <div class="flex-1 flex justify-end items-center">
          <router-link to="/" class="mr-5 flex-1 flex p-5 justify-end">
            <img class="h-5" src="../assets/svg/top/telf.png" alt />
            <span class="text-sm">+51 994641341</span>
          </router-link>
          <div class="flex-2 flex justify-end">
            <router-link to="/" class="flex">
              <img class="h-5 mr-2" src="../assets/svg/top/rs-facebook.png" alt />
            </router-link>
            <router-link to="/" class="flex">
              <img class="h-5 mr-2" src="../assets/svg/top/rs-instagram.png" alt />
            </router-link>
            <router-link to="/" class="flex">
              <img class="h-5 mr-2" src="../assets/svg/top/rs-twter.png" alt />
            </router-link>
            <router-link to="/" class="flex">
              <img class="h-5 mr-2" src="../assets/svg/top/rs-youtube.png" alt />
            </router-link>
          </div>
          <div class="flex-1 flex justify-end items-center mr-20">
            <img class="h-10" src="../assets/svg/submenu/notificacion.png" alt />
            <img
              class="h-10 rounded-full border-2 border-orange-600"
              src="../assets/svg/rostros/a.png"
              alt
            />
            <h2 class="flex text-md font-thin">
              Hola Diego
              <a href>
                <img class="h-6 transform rotate-180" src="../assets/svg/top/menu-arrow.png" alt />
              </a>
            </h2>
          </div>
        </div>
        <!-- end contact  -->
      </div>
      <div id="navbar" class="lg:w-10/12 mx-auto flex justify-between items-center">
        <div class="flex-1">
          <img class="h-20 lg:m-5" src="../assets/svg/footer/logo-footer.png" alt />
        </div>
        <div class="lg:hidden flex-1 flex justify-between ml-10 mr-5">
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
        <div class="flex-1 hidden lg:block font-semibold">
          <ul class="flex justify-between mr-10">
            <li>
              <router-link to="/">PRECIO</router-link>
            </li>
            <li>
              <router-link to="/">ALQUILER</router-link>
            </li>
            <li>
              <router-link to="/">VENTA</router-link>
            </li>
            <li>
              <router-link to="/">NOSOTROS</router-link>
            </li>
            <li>
              <router-link to="/">CONTACTO</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <!-- <div id="social" class="text-white hidden bg-gray-900 lg:flex items-center">
          <div class="flex-2 flex justify-start px-10">
            <router-link to="/" class="flex p-5">
              <img class="h-6 mr-2" src="../assets/svg/top/ico-1.png" alt />
              <p class="text-sm">ENG</p>
            </router-link>
            <router-link to="/" class="flex p-5">
              <img class="h-6 mr-2" src="../assets/svg/top/ico-2.png" alt />
              <p class="text-sm">ESP</p>
            </router-link>
          </div>

          <div class="bd flex-1 text-white flex items-center justify-end">
            <div class="mx-10">
              <router-link to="/" class="flex p-5">
                <img class="h-6" src="../assets/svg/top/telf.png" alt />
                <span class="text-sm font-semibold">+51 994641341</span>
              </router-link>
            </div>
            <div class="flex justify-between">
              <router-link to="/" class="flex">
                <img class="h-5 mr-2" src="../assets/svg/top/rs-facebook.png" alt />
              </router-link>
              <router-link to="/" class="flex">
                <img class="h-5 mr-2" src="../assets/svg/top/rs-instagram.png" alt />
              </router-link>
              <router-link to="/" class="flex">
                <img class="h-5 mr-2" src="../assets/svg/top/rs-twter.png" alt />
              </router-link>
              <router-link to="/" class="flex">
                <img class="h-5 mr-2" src="../assets/svg/top/rs-youtube.png" alt />
              </router-link>
            </div>
            <div class="flex items-center">
              <img class="h-10" src="../assets/svg/submenu/notificacion.png" alt />
              <img
                class="h-10 rounded-full border-2 border-orange-600"
                src="../assets/svg/rostros/a.png"
                alt
              />
              <h2 class="flex text-md font-thin">
                Hola Diego
                <a href>
                  <img class="h-6 transform rotate-180" src="../assets/svg/top/menu-arrow.png" alt />
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div id="navbar" class="lg:w-10/12 mx-auto flex justify-between items-center">
          <div class="flex-1">
            <img class="h-20 m-5 lg:m-10" src="../assets/svg/footer/logo-footer.png" alt />
          </div>
          <div class="lg:hidden flex-1 flex justify-between ml-10 mr-5">
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
          <div class="flex-1 hidden lg:block font-semibold">
            <ul class="flex justify-between mr-10">
              <li>
                <router-link to="/">PRECIO</router-link>
              </li>
              <li>
                <router-link to="/">ALQUILER</router-link>
              </li>
              <li>
                <router-link to="/">VENTA</router-link>
              </li>
              <li>
                <router-link to="/">NOSOTROS</router-link>
              </li>
              <li>
                <router-link to="/">CONTACTO</router-link>
              </li>
            </ul>
          </div>
        </div>-->
      </div>
    </header>
  </div>
</template>
<style lang="scss">
.bd {
  border: 1px solid white;
}
</style>