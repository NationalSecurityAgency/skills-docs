<template>
    <section id="section-view-docs" class="p-5">
        <div class="container">
            <div class="row text-white">
                <div class="col-lg-9">
                    <h3 class="border-bottom">Did we mention it's FREE & Open Source??</h3>
                    <p class="text-white-50">Read our extensive documentation to learn more about the SkillTree platform.</p>
                </div>
                <div class="col-lg-3 text-right">
                    <a href="overview/" class="btn btn-lg btn-info">Read our Docs</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "VueDocsSection"
    }
</script>

<style scoped>
    #section-view-docs {
        background: #42b983;
        position: relative;
        overflow: hidden;
        padding-top: calc(7rem + 72px);
        padding-bottom: 7rem;
        background: linear-gradient(0deg, #42b983 0%, #124430 100%);
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
        background-size: cover;
    }
</style>
