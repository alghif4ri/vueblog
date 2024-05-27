<template>
    <div>LOADING</div>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: aqua;
  animation: spin 0.5s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
