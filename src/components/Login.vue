<template>
<div class="container">
    <div class="phone"><img src="../assets/phone.svg" alt="Phone" /></div>
    <div class="form__wrapper">

        <form @submit.prevent="login" @keydown="clear($event.target.name)">
            <img src="../assets/avatar.svg" alt="Avatar" class="form__img" />
            <h2 class="form__title">Welcome!</h2>
            <span v-if="errors.length > 0" class="label label-danger" style="color:red;">{{ errors }}</span>
            <div class="input__container one">
                <div class="input__icon">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Email</h5>
                    <input type="email" class="input" name="email" v-model="form.email" />
                </div>
            </div>
            <span v-if="errors.email" class="label label-danger" style="color:red;">{{ errors.email[0] }}</span>
            <div class="input__container two">
                <div class="input__icon">
                    <i class="fa fa-lock"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Password</h5>
                    <input type="password" class="input" name="password" v-model="form.password" />
                </div>
            </div>
            <span v-if="errors.password" class="label label-danger" style="color:red;">{{ errors.password[0] }}</span>
            <a href="#" class="form__forgot">Forgot password?</a>
            <input type="submit" class="form__submit" value="Login" />
            Not a registered user? <router-link class="nav-link" to="/register">Sign up</router-link>

        </form>
    </div>
</div>
</template>

<style>
/* Lockscreen Page */
</style>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: []
        }
    },

    methods: {
        async login() {
            // this.errors = this.$v.form.$touch();
            // if (this.errors === false) {
            try {
                const payload = {
                    ...this.form,
                    email: this.form.email,
                    password: this.form.password
                };
                const response = await this.$store.dispatch(
                    "LOGIN",
                    payload
                );
                if (response) {
                    this.$router.push('/profile');
                }
            } catch (err) {
                this.errors = err.response.data.errors || err.response.data.message;
                //  console.log(err.response.data.errors.email)
            }
        },
        clear() {
            this.errors = false;
        },
        //}
    },
    created() {
        if (this.$store.getters.isLoggedIn !== false) {
            this.$router.push('/')
        }
    }
}
</script>
