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
                    <a href="#" class="sidebarCollapse" id="collapse"><i class="fa fa-bars"></i></a>
                </div>
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
                <li class="dropdown"><a href="#"><i class="fa fa-btc"></i> Dashboard</a></li>
            </ul>
            <!-- END: Menu-->
            <li class="dropdown"><a @click="logout" v-if="isLoggedIn"><i class="fa fa-sign-out"></i> Logout</a></li>

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
                                    <p>Welcome {{ authUser.username }} </p>
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
                            <h2 class="text-center">USERNAME</h2>
                            <h6 class="text-center">{{ authUser.username  }}</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-4 mt-3">
                    <div class="card">
                        <div class="card-body text-success border-bottom border-success border-w-5">
                            <h2 class="text-center">EMAIL</h2>
                            <h6 class="text-center">{{ authUser.email  }}</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-4 mt-3">
                    <div class="card">
                        <div class="card-body text-danger border-bottom border-danger border-w-5">
                            <h2 class="text-center">PHONE</h2>
                            <h6 class="text-center">+234{{ authUser.phone  }}</h6>
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
            return JSON.parse(localStorage.getItem('user'))
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
