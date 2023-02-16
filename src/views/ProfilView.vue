<template>
    <div>
        <SidebarMenu />
        <!-- <ProfilePage /> -->
        <h1>TEST</h1>
        <h2>test</h2>
    </div>
</template>
<script>
import profilView from '@/components/ProfilView/ProfilePage.vue'
import SidebarMenu from '@/components/Menu/SidebarMenu.vue'
    export default {
        name: 'profile',
        components: {
            profilView,
            SidebarMenu
        }
    }

</script>
<style>

</style>
