<template>
<div class="container">
    <div class="phone"><img src="../assets/phone.svg" alt="Phone" /></div>
    <div class="form__wrapper">
        <form @submit.prevent="login">
            <img src="../assets/avatar.svg" alt="Avatar" class="form__img" />
            <h2 class="form__title">Welcome!</h2>
            <div class="input__container one">
                <div class="input__icon">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Email</h5>
                    <input type="email" class="input" name="email" v-model="form.email" />
                </div>
            </div>
            <div class="input__container two">
                <div class="input__icon">
                    <i class="fa fa-lock"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Password</h5>
                    <input type="password" class="input" name="password" v-model="form.password" />
                </div>
            </div>
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
import {
    required,
    email
} from "vuelidate/lib/validators";
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
    validations: {
        form: {
            email: {
                required,
                email
            },
            password: {
                required
            },
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
            } catch (error) {
                console.log(error)
            }
            //  }
        }
    },
    created() {
        if (this.$store.getters.isLoggedIn !== false) {
            this.$router.push({
                name: 'Profile'
            })
        }
    }
}
</script>
