<style scoped>
.application.theme--light {
    background-color: #fafafa;
    background-image: none;
}
</style>

<template>
<v-app id="inspire">
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
        <v-list dense>
            <v-list-tile @click="goto('dashboard')">
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Dashboard
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="goto('pos')">
                <v-list-tile-action>
                    <v-icon>shopping_cart</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Sell
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="goto('inventoy')">
                <v-list-tile-action>
                    <v-icon>all_inbox</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Products
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="goto('other')">
                <v-list-tile-action>
                    <v-icon>account_box</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Customers
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-group>
                <v-list-tile slot="activator">
                    <v-list-tile-action>
                        <v-icon>settings</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Settings
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click.stop>
                    <v-list-tile-action>
                        <v-icon>add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Create Label
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>
            <v-list-tile @click="logout()">
                <v-list-tile-action>
                    <v-icon>logout</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Logout
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="green darken-1" height="48px" dark app fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down">POSx</span>
        </v-toolbar-title>
        <!-- <v-text-field flat solo-inverted hide-details prepend-inner-icon="search"
        @change="generateCharts()"
         v-model="pSearch" label="Search" class="hidden-sm-and-down"></v-text-field> -->
        <v-spacer></v-spacer>
        <!-- <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn> -->
        <v-toolbar-title>MixX</v-toolbar-title>
        <!-- <v-btn color="primary">Success</v-btn> -->
        <v-btn icon>
            <v-icon>person_add</v-icon>  
        </v-btn>
          
        
    </v-toolbar>
    <v-content>
     
        
                <router-view></router-view>
        
      
    </v-content>

</v-app>
</template>

<script>
export default {
    methods: {
        logout() {
            delete localStorage.token
            this.$router.replace('/login')
        },
        goto(path) {
            this.$router.replace('/' + path)
        }
    },
    data: () => ({
        dialog: false,
        drawer: false
    }),
    mounted() {
        if (!localStorage.token) {
            this.$router.replace('/login')
        }
    }
}
</script>
