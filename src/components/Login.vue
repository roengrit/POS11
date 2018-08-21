<style scoped>
.application.theme--light{
    background-repeat:no-repeat;
    background-size: cover;
      height: 100%; 
    background-image: url(https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7cac606b3752d340f2c342f32536727&auto=format&fit=crop&w=1350&q=80);
}
</style>
<template>
<v-app id="inspire"  >
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center style="margin-top:-60px">
                <v-flex xs12 sm8 md4>
                    <v-card style="padding:20px;border-radius:10px!important;">
                        <v-layout justify-center align-center>
                            <v-btn icon large>
                                <v-avatar size="52px" tile="tile">
                                    <img src="../assets/logo.svg" alt="Vuetify" />
                                </v-avatar>
                            </v-btn>
                        </v-layout>
                        <v-layout justify-center align-center>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">ลงชื่อเข้าใช้งาน</h3>
                                </div>
                            </v-card-title>
                        </v-layout>
                        <v-layout justify-center align-center>
                            <div>ใช้บัญชี POSx ของคุณ</div>
                        </v-layout>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Username" v-model="username" :rules="[rules.required ]"></v-text-field>
                                <v-text-field label="Password" v-model="password" :append-icon="showPass ? 'visibility_off' : 'visibility'" :rules="[rules.required, rules.min]" :type="showPass ? 'text' : 'password'" name="input-10-2" hint="At least 8 characters" value="" class="input-group--focused"
                                    @click:append="showPass = !showPass"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-text>
                            <v-layout justify-center align-center>
                                <div>หากไม่ใช่คอมพิวเตอร์ของคุณ ให้ใช้โหมดผู้มาเยือนเพื่อลงชื่อเข้าใช้ </div>
                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn v-on:click="logIn()" color="primary">เข้าสู่ระบบ</v-btn>
                            <v-btn>ลงทะเบียน</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
        logIn() {

            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (
                this.info = response
            ))

            // console.log('A-A')

            sessionStorage.token = '-----'
            localStorage.token = '-----'
            this.$router.replace(this.$route.query.redirect || '/pos')
        }
    },
    data: () => {
        return {
            showPass: false,
            password: '',
            username: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match')
            },
            info: null
        }
    },
    mounted() {
        if (localStorage.token) {
            this.$router.replace(this.$route.query.redirect || '/')
        }
    }
};
</script>
