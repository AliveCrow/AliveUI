<template>
</template>
<script lang="ts">
export default{}
</script>
<style lang="scss">

$circle: 16px;
$false: rgb(255, 79, 87);
$true: rgb(19, 206, 102);

$light-color: rgb(255, 79, 87);
$logo-color: rgb(0, 79, 131);
$border-color: #e3e3e3;
$color: #353535;

$primary: #1976D2;
$secondary: #424242;
$accent: #82B1FF;
$error: rgb(255, 79, 87);
$info: #2196F3;
$success:rgb(19, 206, 102);
$warning: #FFC107;
@keyframes isvible{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes rotatePlaceholder {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
@keyframes animateSuccessOne {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 13px;
    top: 46px;
  }
}
@keyframes animateSuccessTwo {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 7px;
    top: 38px;
  }
}
@keyframes warning {
  0% {
    background-color: $warning;
  }
  100% {
    background-color: rgba($warning,.4);
  }
}
@keyframes errorAni {
  0% {
    transform: scale(0.4);
    margin-top: 26px;
    opacity: 0;
  }
  50% {
    transform: scale(0.4);
    margin-top: 26px;
    opacity: 0;
  }
  80% {
    transform: scale(1.15);
    margin-top: -6px;
  }
  100% {
    transform: scale(1);
    margin-top: 0;
    opacity: 1;
  }
}
@keyframes rotate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



</style>