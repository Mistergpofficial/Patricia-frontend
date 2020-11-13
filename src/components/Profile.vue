<template>
<div>

    <!-- START: Header-->
    <div id="header-fix" class="header fixed-top">
        <div class="site-width">
            <nav class="navbar navbar-expand-lg  p-0">
                <div class="navbar-header  h-100 h4 mb-0 align-self-center logo-bar text-left">
                    <a href="" class="horizontal-logo text-left">
                        <svg height="20pt" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(.1 0 0 -.1 0 512)" fill="#1e3d73">
                                <path d="m1450 4481-1105-638v-1283-1283l1106-638c1033-597 1139-654 1139-619 0 4-385 674-855 1489-470 814-855 1484-855 1488 0 8 1303 763 1418 822 175 89 413 166 585 190 114 16 299 13 408-5 100-17 231-60 314-102 310-156 569-509 651-887 23-105 23-331 0-432-53-240-177-460-366-651-174-175-277-247-738-512-177-102-322-189-322-193s104-188 231-407l231-400 46 28c26 15 360 207 742 428l695 402v1282 1282l-1105 639c-608 351-1107 638-1110 638s-502-287-1110-638z" />
                                <path d="m2833 3300c-82-12-190-48-282-95-73-36-637-358-648-369-3-3 580-1022 592-1034 5-5 596 338 673 391 100 69 220 197 260 280 82 167 76 324-19 507-95 184-233 291-411 320-70 11-89 11-165 0z" />
                            </g>
                        </svg> <span class="h4 font-weight-bold align-self-center mb-0 ml-auto">PATRICIA</span>
                    </a>
                </div>
                <div class="navbar-header h4 mb-0 text-center h-100 collapse-menu-bar">
                    <a href="#" class="sidebarCollapse" id="collapse"><i class="icon-menu"></i></a>
                </div>

                <form class="float-left d-none d-lg-block search-form">
                    <div class="form-group mb-0 position-relative">
                        <input type="text" class="form-control border-0 rounded bg-search pl-5" placeholder="Search anything...">
                        <div class="btn-search position-absolute top-0">
                            <a href="#"><i class="h6 icon-magnifier"></i></a>
                        </div>
                        <a href="#" class="position-absolute close-button mobilesearch d-lg-none" data-toggle="dropdown" aria-expanded="false"><i class="icon-close h5"></i>
                        </a>

                    </div>
                </form>
                <div class="navbar-right ml-auto h-100">

                </div>
            </nav>
        </div>
    </div>
    <!-- END: Header-->

    <!-- START: Main Menu-->
    <div class="sidebar">
        <div class="site-width">

            <!-- START: Menu-->
            <ul id="side-menu" class="sidebar-menu">
                <li class="dropdown"><a href="#"><i class="icon-home mr-1"></i> Dashboard</a></li>
            </ul>
            <!-- END: Menu-->
            <li class=""><a @click="logout" v-if="isLoggedIn"><i class="icon-home mr-1"></i> Logout</a></li>

        </div>
    </div>
    <!-- END: Main Menu-->

    <!-- START: Main Content-->
    <main>
        <div class="container-fluid site-width">
            <!-- START: Breadcrumbs-->
            <div class="row">
                <div class="col-12">

                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-7  align-self-center  my-4">
                            <div class="sub-header align-self-center d-sm-flex w-100 rounded">
                                <div class="w-sm-100">
                                    <h4 class="mb-0">Dashboard</h4>
                                    <p>Welcome {{ authUser.replace(/^"|"$/g, '')  }} </p>
                                    <a href="#" class="btn btn-primary">Get Started <i class="fas fa-arrow-right"></i></a>
                                </div>

                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-5 my-4">
                            <div id="flot-stacking" class="header-chart"></div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- END: Breadcrumbs-->

            <!-- START: Card Data-->
            <div class="row">
                <div class="col-12 col-sm-6 col-xl-4 mt-3">
                    <div class="card">
                        <div class="card-body text-info border-bottom border-info border-w-5">
                            <h2 class="text-center">3,740,591</h2>
                            <h6 class="text-center">Coronavirus Cases</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-4 mt-3">
                    <div class="card">
                        <div class="card-body text-success border-bottom border-success border-w-5">
                            <h2 class="text-center">1,247,377</h2>
                            <h6 class="text-center">Recovered</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-4 mt-3">
                    <div class="card">
                        <div class="card-body text-danger border-bottom border-danger border-w-5">
                            <h2 class="text-center">258,509</h2>
                            <h6 class="text-center">Deaths</h6>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-8  mt-3">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <canvas id="chartjs_corona"></canvas>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="card-title">Cases by Country</h6>
                        </div>
                        <div class="card-content">
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-borderless pick-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Country</th>
                                                <th class="text-right">Active Cases</th>
                                                <th class="text-right">Death</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>USA</td>
                                                <td class="text-right">964,817</td>
                                                <td class="text-right">72,275</td>
                                            </tr>
                                            <tr>
                                                <td>Canada</td>
                                                <td class="text-right">31,010</td>
                                                <td class="text-right">4,043</td>
                                            </tr>
                                            <tr>
                                                <td>Mexico</td>
                                                <td class="text-right">6,708</td>
                                                <td class="text-right">2,507</td>
                                            </tr>
                                            <tr>
                                                <td>Dominican Republic</td>
                                                <td class="text-right">6,221</td>
                                                <td class="text-right">354</td>
                                            </tr>
                                            <tr>
                                                <td>Panama</td>
                                                <td class="text-right">6,490</td>
                                                <td class="text-right">210</td>
                                            </tr>
                                            <tr>
                                                <td>Cuba</td>
                                                <td class="text-right">5,345</td>
                                                <td class="text-right">323</td>
                                            </tr>
                                            <tr>
                                                <td>Honduras</td>
                                                <td class="text-right">5,555</td>
                                                <td class="text-right">657</td>
                                            </tr>
                                            <tr>
                                                <td>Guatemala</td>
                                                <td class="text-right">6,490</td>
                                                <td class="text-right">234</td>
                                            </tr>
                                            <tr>
                                                <td>Costa Rica</td>
                                                <td class="text-right">3,477</td>
                                                <td class="text-right">123</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12  col-md-3 mt-3">
                    <div class="card overflow-hidden">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="card-title">Symptoms of COVID-19</h6>
                        </div>
                        <div class="card-content">
                            <div class="card-body p-0">
                                <ul class="list-group list-unstyled">
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Fever <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Tiredness <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Dry Cough <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Aches and Pains <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Nasal Congestion<i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Runny Nose <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Sore Throat <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12  col-md-3 mt-3">
                    <div class="card overflow-hidden">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="card-title">Prevention of COVID-19</h6>
                        </div>
                        <div class="card-content">
                            <div class="card-body p-0">
                                <ul class="list-group list-unstyled">
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Stay home <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Keep a safe distance <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Wash hands often <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Cover your cough <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Sick? Call the helpline<i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 border-bottom zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Cover your nose <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>
                                    <li class="py-3 px-4 zoom">
                                        <a href="#" class="mb-0 font-w-600 d-flex w-100 color-primary">Follow local health authority <i class="fas fa-arrow-right ml-auto my-auto"></i></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 mt-3">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="card-title">Q&A on coronaviruses (COVID-19)</h6>
                        </div>
                        <div class="card-body">
                            <div class="card-content">
                                <div id="accordion2" class="accordion-alt" role="tablist">
                                    <div class="mb-2">
                                        <h6 class="mb-0">
                                            <a class="d-block border" data-toggle="collapse" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                                What is a coronavirus?
                                            </a>
                                        </h6>
                                        <div id="collapse4" class="collapse show" role="tabpanel" data-parent="#accordion2">
                                            <div class="card-body">
                                                <p>
                                                    Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <h6 class="mb-0">
                                            <a class="collapsed redial-dark d-block border redial-border-light" data-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                What is COVID-19?
                                            </a>
                                        </h6>
                                        <div id="collapse5" class="collapse" role="tabpanel" data-parent="#accordion2">
                                            <div class="card-body">
                                                <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="mb-0">
                                            <a class="collapsed redial-dark d-block border redial-border-light" data-toggle="collapse" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                What are the symptoms of COVID-19?
                                            </a>
                                        </h6>
                                        <div id="collapse6" class="collapse" role="tabpanel" data-parent="#accordion2">
                                            <div class="card-body">
                                                <p> The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include aches and pains, nasal congestion, headache, conjunctivitis, sore throat, diarrhea, loss of taste or smell or a rash on skin or discoloration of fingers or toes. These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms.
                                                </p>
                                                <p>
                                                    Most people (about 80%) recover from the disease without needing hospital treatment. Around 1 out of every 5 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer, are at higher risk of developing serious illness. However, anyone can catch COVID-19 and become seriously ill. People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath, chest pain/pressure, or loss of speech or movement should seek medical attention immediately. If possible, it is recommended to call the health care provider or facility first, so the patient can be directed to the right clinic.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- END: Card DATA-->
        </div>
    </main>
    <!-- END: Content-->

</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn
        },
        authUser: function () {
            return localStorage.getItem('user')
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/')
                })
        }
    }
}
</script>
