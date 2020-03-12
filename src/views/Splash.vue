<template>
  <div>
    <header-nav></header-nav>

    <div class="bg-gray-200 relative">
      <div class="bg-img"></div>

      <div class="absolute top-0 w-3/5 mt-20 l-50">
        <h1 class="text-white lg:text-5xl font-semibold">Registro</h1>
        <div class="my-2 border-b border-orange-500 px-10 w-1/12"></div>
        <p class="text-lg text-white my-5">Crea una cuenta</p>
        <div id="card" class="text-center bg-gray-200 rounded-lg border pb-5 lg:pb-10">
          <h1 class="text-xl b-brown lg:text-4xl font-bold mt-10">Registro Satisfactorio!</h1>
          <h6 class="text-sm lg:text-lg font-bold">Sus datos fuerron registrados</h6>
          <img
            class="w-1/2 mx-auto mb-10"
            src="../assets/img/Registrar-usuarios-satisfactorio.png"
            alt
          />
          <p
            class="hidden lg:block my-10 text-md w-10/12 mx-auto"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dicta ut odit molestiae delectus reprehenderit temporibus laborum deleniti similique.</p>
          <a class="uppercase brown text-white lg:py-5 lg:px-10" href>volver al inicio</a>
        </div>
      </div>
    </div>

    <footer-all></footer-all>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bg-img {
  background-image: url("../assets/img/banners/banner_de_descanso-03.png");
  height: 80vh;
}
.l-50 {
  left: 20%;
}
.b-brown {
  color: #a08629;
}
</style>