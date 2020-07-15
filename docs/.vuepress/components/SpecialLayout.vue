<template>
    <div>
        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container">
                    <h1 class="masthead-heading mb-0"><i class="fab fa-pagelines"></i> SkillTree</h1>
                    <h2 class="masthead-subheading mb-0">Innovative approach to implementing application training</h2>
                    <a href="/overview/" class="btn btn-primary btn-xl rounded-pill mt-5">Read Docs</a>
                </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
<!--                            <i class="img-fluid circle-icon fas fa-user-graduate"></i>-->
                            <span class="fa-stack fa-4x">
                              <i class="fa fa-circle fa-stack-2x icon-background"></i>
                              <i class="fa fa-user-graduate fa-stack-1x icon-foreground"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">User Engagement</h2>
                            <p>Enable users to Quickly learn new features and effectively master advanced features.
                                Improve training recall through continued user engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr/>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5">
<!--                            <i class="img-fluid circle-icon fas fa-chess-king"></i>-->
                            <span class="fa-stack fa-4x">
                              <i class="fa fa-circle fa-stack-2x icon-background"></i>
                              <i class="fa fa-chess-king fa-stack-1x"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Rich Gamification Platform</h2>
                            <p>Corporate solution takes the guesswork and maintenance out of implementing gamified user
                                training. Provides a template that applications can use to implement the capability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr/>

        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
<!--                            <i class="img-fluid circle-icon fas fa-money-bill-wave"></i>-->

                            <span class="fa-stack fa-4x">
                              <i class="fa fa-circle fa-stack-2x icon-background"></i>
                              <i class="fa fa-money-bill-wave fa-stack-1x"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Reduced Cost</h2>
                            <p>Fewer training sessions - less support costs. Continued user engagement in application
                                training promotes local experts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-5 mt-4">
            <div class="container">
                <p class="m-0 text-center text-white small">Apache 2 Licensed | Copyright © 2019-present </p>
            </div>
            <!-- /.container -->
        </footer>

    </div>
</template>

<script>
    export default {
        name: "SpecialLayout.vue"
    }
</script>

<style scoped>
    body {
        font-family: 'Lato';
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Catamaran';
        font-weight: 800 !important;
    }

    .btn-xl {
        text-transform: uppercase;
        padding: 1.5rem 3rem;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
    }

    .bg-black {
        background-color: #000 !important;
    }

    .rounded-pill {
        border-radius: 5rem;
    }

    .fa-stack {
        font-size: 12rem;
    }

    .icon-foreground {
        color: #343131;
    }
    .icon-background {
        color: #42b983;
    }

    footer {
        background: black;
    }

    section {
        padding-top: 1rem;
    }

    section .circle-icon {
        font-size: 10rem;
        background: #ff6a00;
        color: #e8e2e2;
        padding: 8rem;
        border-radius: 50%;
    }

    header.masthead {
        position: relative;
        overflow: hidden;
        padding-top: calc(7rem + 72px);
        padding-bottom: 7rem;
        background: linear-gradient(0deg, #42b983 0%, #ee0979 100%);
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
        background-size: cover;
    }

    header.masthead .masthead-content {
        z-index: 1;
        position: relative;
    }

    header.masthead .masthead-content .masthead-heading {
        font-size: 2rem;
    }

    header.masthead .masthead-content .masthead-subheading {
        font-size: 1rem;
    }

    header.masthead .bg-circle {
        z-index: 0;
        position: absolute;
        border-radius: 100%;
        background: linear-gradient(0deg, #ee0979 0%, #42b983 100%);
    }

    header.masthead .bg-circle-1 {
        height: 90rem;
        width: 90rem;
        bottom: -55rem;
        left: -55rem;
    }

    header.masthead .bg-circle-2 {
        height: 50rem;
        width: 50rem;
        top: -25rem;
        right: -25rem;
    }

    header.masthead .bg-circle-3 {
        height: 20rem;
        width: 20rem;
        bottom: -10rem;
        right: 5%;
    }

    header.masthead .bg-circle-4 {
        height: 30rem;
        width: 30rem;
        top: -5rem;
        right: 35%;
    }

    @media (min-width: 992px) {
        header.masthead {
            padding-top: calc(10rem + 55px);
            padding-bottom: 10rem;
        }

        header.masthead .masthead-content .masthead-heading {
            font-size: 6rem;
        }

        header.masthead .masthead-content .masthead-subheading {
            font-size: 2rem;
        }
    }
</style>
