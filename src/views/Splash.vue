<template>
  <div>
    <header-nav></header-nav>

    <div class="bg-gray-200 relative">
      <div class="bg-img"></div>

      <div class="absolute top-0 w-3/5 mt-20 l-50">
        <h1 class="text-white text-4xl font-semibold">Registro</h1>
        <div class="border-b border-orange-500 px-10 w-1/12"></div>
        <p>Crea una cuenta</p>
        <div id="card" class="text-center bg-gray-200 rounded-lg border">
          <h1>Registro Satisfactorio</h1>
          <h6>Sus datos fuerron registrados</h6>
          <img src="../assets/img/Registrar-usuarios-satisfactorio.png" alt />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis</p>
          <a href class="bg-orange-500">volver al inicio</a>
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
  height: 70vh;
}
.l-50 {
  left: 20%;
}
</style>