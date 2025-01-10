<script setup>

</script>

<template>
  <div class="" style="margin-top: 3rem;">
      <div class="vp-hero">
        <div class="">
          <img height="280"
               class="logo"
               :src="$withBase('/img/skilltree_logo.svg')"
               alt="SkillTree Logo"/>

          <img height="280"
               class="darkModeLogo"
               :src="$withBase('/img/skilltree_logo_dark_mode.svg')"
               alt="SkillTree Darkmode Logo"/>
        </div>
        <h1 class="vp-hero-description" style="font-weight: 500;">A micro-learning gamification platform</h1>
        <p class="">
          <a href="overview/"
             style="font-size: 1.5rem;"
           class="st-home-button">Read Docs</a>
        </p>
      </div>
  </div>
</template>

<style scoped>
.darkModeLogo {
  display: none;
}
[data-theme='dark'] .darkModeLogo {
  display: inline-block;
}
[data-theme='dark'] .logo {
  display: none;
}
</style>