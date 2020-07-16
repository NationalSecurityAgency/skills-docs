<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="p-xlg-5">
                        <img src="img/home/Screenshot_2020-07-15_SkillTree_Dashboard.png" class="image-border"/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="p-xlg-5 mt-1">
                        <h1 class="border-bottom text-uppercase">Dashboard</h1>
                        <p class="text-secondary">A web-based user interface that enables creation and management of an applications'
                            training profile</p>
                        <div class="mb-1"><i class="fas fa-check-double"></i> Effective and visual skill definition management
                        </div>
                        <div class="mb-1"><i class="fas fa-check-double"></i> Comprehensive Visualization</div>
                        <div class="mb-1"><i class="fas fa-check-double"></i> Visibility of application expertise</div>
                        <div class="mb-1"><i class="fas fa-check-double"></i> SkillTree configuration management</div>
                        <a href="dashboard/user-guide/" class="btn btn-lg btn-info mt-4">Read our Dashboard Guide</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "DashboardSection"
    }
</script>

<style scoped>
    .container img {
        width: 30rem;
        border-style: solid;
        border-image: linear-gradient(#17a2b8, transparent) 1;
    }

    @media (max-width: 1200px) {
        .container img {
            width: 100%;
        }
    }

    section i {
        width: 1.2rem;
    }
</style>
