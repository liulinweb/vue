
<template>
  <!--<router-view></router-view>-->

  <div class="com-app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
   export default{
    data: function () {
      return {
        transitionName: 'slide-top'
      }
    },

  }
</script>

<style>

</style>
