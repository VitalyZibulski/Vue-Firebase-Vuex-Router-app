<template>
    <div>
        <v-navigation-drawer app temporary v-model="sideNav"></v-navigation-drawer>
        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-toolbar-title>Online Store</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>
                    <v-icon left>account_box</v-icon>
                    Link One
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script>
export default{
    data () {
        return {
            sideNav: false
        }
    }
}
</script>