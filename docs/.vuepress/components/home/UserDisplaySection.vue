<template>
    <section class="dark-bg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-lg-2" style="margin-top: -6rem;">
                    <div class="p-md-5">
                        <img src="img/home/Screenshot_2020-07-15_SkillTree_ClientDisplay.png"
                             class="image-border-dark"/>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="p-md-5 text-white">
                        <h1 class="border-bottom text-uppercase">User Display</h1>
                        <p class="text-white-50">Pluggable user skill and ranking visualization - customize and use the display component
                            in your application within minutes.</p>
                        <div class="p-2">
                            <div class="mb-2">Out-of-the-box support for:</div>
                            <div class="ml-2 mb-2"><i class="fab fa-vuejs fa-2x"></i> Vue.js</div>
                            <div class="ml-2 mb-2"><i class="fab fa-react fa-2x"></i> React</div>
                            <div class="ml-2 mb-2"><i class="fab fa-angular fa-2x"></i> Anagular</div>
                            <div class="ml-2 mb-2"><i class="fab fa-js fa-2x"></i> Pure JavaScript</div>
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
