<template>
  <nav>
    <div class="fold fold_click">
    </div>
    <img src="../assets/logo.png" alt="" class="nav_logo" width='121'>
  </nav>
</template>

<script lang="ts">
export default  {
  name: 'Nav',

}
</script>
<style scoped lang='scss'>
@import "../assets/scss/var";

.nav{
  display: none;
}
.nav_logo{
  display: none;
}
.fold{
  display: none;
}

@media (max-width: 650px) {
  nav {
    box-shadow: 0 0 5px rgba(#000, .2);
    padding: 10px;
    position: relative;
    z-index: 90;
    width: 100%;

    .nav_logo {
      display: block;
      width: 50px;
      margin-left: auto;
      margin-right: auto;
    }

    .fold {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 3px;
      border-radius: 5px;
      background-color: $light-color;
      transition: all .25s ease;

      &:before {
        transition: all .25s ease;
        position: absolute;
        top: -9px;
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        background-color: $light-color;
      }

      &:after {
        transition: all .25s ease;
        content: '';
        top: 9px;
        position: absolute;
        display: block;
        width: 30px;
        height: 3px;
        background-color: $light-color;
      }
    }

    .fold_click {
      height: 0;

      &:before {
        transform: rotate(45deg);
        top: 0;
      }

      &:after {
        top: 0;
        transform: rotate(-45deg);
      }
    }

  }
}

</style>