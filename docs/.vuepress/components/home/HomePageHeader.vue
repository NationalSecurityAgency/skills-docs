<template>
    <header class="masthead text-center text-white">
        <div class="masthead-content">
            <div class="container">
                <div class="masthead-heading mb-0"><img class="img-fluid" :src="$withBase('/img/skilltree_logo.svg')" alt="SkillTree Logo"/> </div>
                <h1 class="masthead-subheading mb-0 mt-sm-3">A micro-learning gamification platform</h1>
                <a href="overview/" class="btn btn-lg btn-primary mt-5 font-weight-bold"><i class="fas fa-book" aria-hidden="true"></i> Read Docs</a>
            </div>
        </div>
        <div class="bg-circle-1 bg-circle"></div>
        <div class="bg-circle-2 bg-circle"></div>
        <div class="bg-circle-3 bg-circle"></div>
        <div class="bg-circle-4 bg-circle"></div>
    </header>
</template>

<script>
    export default {
        name: "HomePageHeader"
    }
</script>

<style scoped>
    /*.container a {*/
    /*    font-size: 1.5rem;*/
    /*}*/
    header.masthead img {
      height: 16rem;
    }

    header.masthead {
        position: relative;
        overflow: hidden;
        padding-top: 5rem;
        padding-bottom: 7rem;
        background: linear-gradient(0deg, #2a9d8fff 0%, #f4a261ff 100%);
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
        font-size: 3rem;
    }

    header.masthead .masthead-content .masthead-subheading {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.80) !important;
        font-weight: lighter;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    header.masthead .bg-circle {
        z-index: 0;
        position: absolute;
        border-radius: 100%;
        background: linear-gradient(0deg, #e76f51ff 0%, #2a9d8fff 100%);
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
            font-size: 5rem;
        }

        header.masthead .masthead-content .masthead-subheading {
            font-size: 2rem;
        }
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
</style>
