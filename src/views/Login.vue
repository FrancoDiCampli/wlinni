<template>
  <div>
    <header-nav></header-nav>
    <div class="bg-gray-200 relative">
      <div class="bg-img">
        <div class="w-3/5 flex mx-auto pt-10">
          <div class="flex-1 bd bg-white rounded-lg lg:rounded-r-none">
            <div class="w-9/12 mx-auto my-10">
              <div class="flex">
                <h1
                  class="font-bold tracking-wider uppercase bloc mb-5 mx-5"
                >ingresar a la plataforma</h1>
                <span class="text-sm">
                  <svg
                    @mouseover="showAlert"
                    @mouseleave="hideAlert"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="info-circle"
                    class="h-6 svg-inline--fa fa-info-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                    />
                  </svg>
                </span>
              </div>

              <div
                class="my-5 lg:my-10 px-5 flex border-gray-500 b-brown items-center p-0 rounded-full"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  class="t-brown h-5 svg-inline--fa fa-user fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  />
                </svg>
                <input
                  placeholder="Usuario"
                  type="text"
                  class="text-sm focus:outline-none py-2 text-gray-900 w-4/5 lg:w-full lg:px-2"
                />
              </div>

              <div class="px-5 flex border-gray-500 b-brown items-center p-0 rounded-full">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  class="t-brown h-5 svg-inline--fa fa-user fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"
                  />
                </svg>
                <input
                  @click="hiddeError"
                  placeholder="Password"
                  type="password"
                  class="text-sm focus:outline-none py-2 text-gray-900 w-4/5 lg:w-full lg:px-2"
                />
              </div>

              <p class="text-red-700 text-xs italic" :class="error.state">{{error.msg}}</p>
              <router-link to="/">
                <a href class="mx-5 font-semibold text-xs underline">Olvido contraseña?</a>
              </router-link>
              <router-link to="/" class="my-5">
                <a
                  href
                  @click.prevent="showError"
                  class="block mt-5 text-center text-white p-2 brown uppercase"
                >ingresar</a>
              </router-link>
              <div class="my-5 flex items-center">
                <input type="checkbox" class />
                <span class="text-sm font-semibold">Recordame</span>
              </div>
              <div class="my-5">
                <span>
                  Aun no eres usuario?
                  <router-link to="/">
                    <a href class="text-xs underline">Obtener una cuenta</a>
                  </router-link>
                </span>
              </div>
            </div>
          </div>
          <img src="../assets/img/imagen-logueo.png" class="hidden w-1/2 bd lg:block flex-1" alt />
        </div>
      </div>

      <!-- Alert   -->
      <div
        :class="alert.state"
        class="flex l-50 bg-blue-900 text-white w-4/12 p-5 rounded-t-md rounded-r-md absolute top-0"
      >
        <p
          class="flex-1"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita dicta blanditiis, velit iusto veniam debitis voluptates quod saepe, et soluta dolor sed temporibus voluptate incidunt vel perferendis dolorem repudiandae.</p>
        <svg
          class="flex-2 fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </div>
      <!-- end alert  -->
    </div>
    <footer-all></footer-all>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: {
        msg: "Sin error",
        state: "hidden"
      },
      alert: {
        state: "hidden"
      }
    };
  },
  methods: {
    showAlert() {
      this.alert.state = "block";
    },
    hideAlert() {
      this.alert.state = "hidden";
    },
    showError() {
      this.error.state = "block";
      this.error.msg = "Choose a password";
    },
    hiddeError() {
      this.error.state = "hidden";
    }
  }
};
</script>

<style lang="scss">
.bg-img {
  background-image: url("../assets/img/banners/banner_de_descanso-03.png");
  height: 90vh;
}
.l-50 {
  left: 45%;
}
.b-brown {
  border: 1px solid #a08629;
}
.t-brown {
  color: #a08629;
}
.bd {
  border: 1px solid white;
}
</style>