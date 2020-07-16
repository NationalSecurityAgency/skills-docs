<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="p-md-5">
                        <img src="img/home/Screenshot_2020-07-15_Vue_js_Integration_SkillTree_Docs.png"/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="p-md-5 mt-1">
                        <h1 class="border-bottom text-uppercase">Rapid Integration</h1>
                        <p class="text-secondary">Quickly integrate gamified training into your web-application</p>
                        <a href="skills-client/" class="btn btn-lg btn-info mt-3">Visit our Integration Guide</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "RapidIntegrationSection"
    }
</script>

<style scoped>
    .container img {
        max-width: 29rem;
    }
    @media (max-width: 576px) {
        .container img {
            width: 100%;
        }
    }
</style>
