<template>
    <div>
        <v-navigation-drawer app temporary></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script>
    export default{
    }
</script>