<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md mb-2">
        <div class="card h-100 card-border-top1">
          <div class="card-body">
            <div class="row no-gutters text-center text-sm-left">
              <div class="col-sm-auto">
                          <span class="fa-stack">
                            <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                            <i class="fa fa-user-graduate fa-stack-1x icon-foreground"></i>
                          </span>
              </div>
              <div class="col-sm media-body text-start">
                <div class="h5 mt-0 mb-3 mb-sm-2">User Engagement</div>
                Enable users to Quickly learn new skills and effectively master advanced knowledge.
                Improve training recall through continued user engagement.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md mb-2">
        <div class="card h-100 card-border-top2">
          <div class="card-body">
            <div class="row no-gutters text-center text-sm-left">
              <div class="col-sm-auto">
                                <span class="fa-stack">
                                  <i class="fa fa-circle fa-stack-2x icon-background2"></i>
                                  <i class="fa fa-chess-king fa-stack-1x icon-foreground"></i>
                                </span>

              </div>
              <div class="col-sm media-body text-start">
                <div class="h5 mt-0">Gamification</div>
                Consistent and innovative solution takes the guesswork and maintenance out of
                implementing gamified training.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg mb-2">
        <div class="card h-100 card-border-top3">
          <div class="card-body">
            <div class="row no-gutters text-center text-sm-left">
              <div class="col-sm-auto">
                                <span class="fa-stack">
                                  <i class="fa fa-circle fa-stack-2x icon-background3"></i>
                                  <i class="fa fa-money-bill-wave fa-stack-1x icon-foreground"></i>
                                </span>

              </div>
              <div class="col-sm media-body text-start">
                <div class="h5 mt-0">Reduced Cost</div>
                Fewer training sessions - less support costs. Continued user engagement in
                application
                training promotes local experts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "InfoCards"
    }
</script>

<style scoped>

    .container-fluid {
        max-width: 1281px;
    }

    .card {
        background: #124430;
        border-top-leftradius: 50%;
        border-top-right-r-adius: 50%;
    }

    .card .media-body {
        color: #c1b9b9;
    }

    .card .media-body h5 {
        color: #efe7e7;
    }

    .card .fa-stack {
        font-size: 2rem;
        margin-right: 1rem;
        /*margin-left: 1rem;*/
    }

    .card .icon-foreground {
        color: #efe7e7;
    }

    .card.card-border-top1 {
        border-top: 5px solid #e76f51ff;
        border-top-leftradius: 50%;
        border-top-right-r-adius: 50%;
    }

    .card .icon-background1 {
        color: #e76f51ff;
    }

    .card.card-border-top2 {
        border-top: 5px solid #007bff;
    }

    .card .icon-background2 {
        color: #007bff;
    }

    .card.card-border-top3 {
        border-top: 5px solid #2a9d8fff;
    }

    .card .icon-background3 {
        color: #2a9d8fff;
    }

</style>
