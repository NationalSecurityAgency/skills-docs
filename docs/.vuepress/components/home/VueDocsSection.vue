<template>
    <section id="section-view-docs" class="py-5 p-md-5">
        <div class="container">
            <div class="row text-white text-center text-sm-left">
                <div class="col-lg-9">
                    <h3 class="border-bottom">Did we mention it's FREE & Open Source??</h3>
                    <p class="text-white-50">Read our extensive documentation to learn more about the SkillTree platform.</p>
                </div>
                <div class="col-lg-3 text-lg-right">
                    <a href="overview/" class="btn btn-lg btn-info"><i class="fas fa-book"></i> Read our Docs</a>
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
        background: linear-gradient(0deg, #42b983 0%, #124430 100%);
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
        background-size: cover;
    }
</style>
