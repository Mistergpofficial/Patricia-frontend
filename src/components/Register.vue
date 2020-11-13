<template>
<div class="container">
    <div class="phone"><img src="../assets/phone.svg" alt="Phone" /></div>
    <div class="form__wrapper">
        <form @submit.prevent="register">
            <img src="../assets/avatar.svg" alt="Avatar" class="form__img" />
            <h5 class="form__title">Register Now!</h5>
            <div class="input__container one">
                <div class="input__icon">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Email</h5>
                    <input type="email" class="input" name="email" v-model="form.email" />
                </div>

            </div>
            <div class="input__container one">
                <div class="input__icon">
                    <i class="fa fa-user"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Username</h5>
                    <input type="text" class="input" name="username" v-model="form.username" />
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
            <div class="input__container two">
                <div class="input__icon">
                    <i class="fa fa-lock"></i>
                </div>
                <div class="input__wrapper">
                    <h5 class="input__title">Password Confirmation</h5>
                    <input type="password" class="input" name="password_confirmation" v-model="form.password_confirmation" />
                </div>
            </div>
            <input type="submit" class="form__submit" value="Register" />
            Already a registered user? <router-link class="nav-link" to="/">Register</router-link>

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
    requiredIf,
    sameAs,
    email
} from "vuelidate/lib/validators";
export default {
    data() {
        return {
            form: {
                username: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: [],
            savingUser: false
        }
    },
    validations: {
        form: {
            username: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required
            },
            password_confirmation: {
                required,
                sameAs: sameAs('password')
            }

        }
    },

    methods: {
        async register() {
            // this.errors = this.$v.form.$invalid;
            this.errors = this.$v.form.$touch();

            if (this.errors === false) {
                try {
                    this.savingUser = true;
                    const payload = {
                        ...this.form,
                        username: this.form.username,
                        email: this.form.email,
                        password: this.form.password
                    };
                    const response = await this.$store.dispatch(
                        "REGISTER",
                        payload
                    );
                    if (response) {
                        this.$router.push('/');

                    }
                } catch (error) {
                    console.log(error)
                }

                this.savingUser = false;
            }

            // this.$validator.validateAll().then(result => {
            //     if (result) {
            //         const payload = {
            //             ...this.form,
            //             username: this.form.username,
            //             email: this.form.email,
            //             password: this.form.pREGISTERassword
            //         }
            //         this.$store.dispatch('', payload);
            //     }
            // });

            // const payload = {
            //     ...this.form,
            //     username: this.form.username,
            //     email: this.form.email,
            //     password: this.form.password
            // }
            // this.$store.dispatch('REGISTER', payload)
            //     .then(response => {
            //         success("User Registered!Check Your Email For Activation Code");
            //         this.form = ""
            //         this.$router.push('/');
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         // this.errors = err.response.data
            //     });
        }

    }
}
</script>
