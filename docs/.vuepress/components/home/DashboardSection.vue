<template>
    <section>
        <div class="container">
            <div class="row text-center text-sm-left">
                <div class="col-lg-6">
                    <div class="p-xlg-5">
                        <img src="../../../screenshots/admin/page-subjects.png" class="image-border" alt="SkillTree Dashboard Screenshot"/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="py-4 p-sm-5 mt-1 text-start">
                        <h1 class="border-bottom text-uppercase">Dashboard</h1>
                        <p class="text-secondary">A web-based user interface that enables creation and management of multiple
                            training profiles and acts as a Learning Management System (LMS).</p>
                        <div class="mb-1"><i class="fas fa-check-double"></i> Effective and visual creation and management of the training profiles
                        </div>
                        <div class="mb-1"><i class="fas fa-check-double"></i> Visibility of corporate expertise and knowledge gaps</div>
                        <div class="mb-1"><i class="fas fa-check-double"></i> Take training by completing skills, gaining points, achieving badges, passing quizzes, completing surveys and much, much more...</div>
                        <a href="dashboard/user-guide/" class="btn btn-lg btn-info mt-4 font-weight-bold">Read our Dashboard Guide</a>
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
