<template>
    <section class="dark-bg">
        <div class="container">
            <div class="row align-items-center text-center text-sm-left">
                <div class="col-lg-6 order-lg-2" style="margin-top: -6rem;">
                    <div class="p-md-5">
                        <img src="../../../screenshots/progress-and-ranking/client-display-proj.png"
                             alt="User Display Screenshot"
                             class="image-border-dark"/>
                    </div>
                </div>
              <div class="col-lg-6 order-lg-1">
                <div class="py-4 p-sm-5 text-white text-start">
                  <h1 class="border-bottom text-uppercase font-weight-bold">User Display</h1>
                  <p class="text-white">Pluggable user skill and ranking visualization - customize and use the
                    display component
                    in your application within minutes.</p>
                  <div class="d-flex d-sm-block ml-sm-2 justify-content-center">
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "UserDisplaySection"
    }
</script>

<style scoped>
    .image-border-dark {
        width: 30rem;
        border-style: solid;
        border-image: linear-gradient(#124430, transparent) 1;
    }
    .dark-bg {
        background: #124430;
    }
    section i {
        width: 2.5rem;
    }

    @media (max-width: 1200px) {
        .container img {
            width: 100%;
        }
    }
</style>
