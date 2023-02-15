<template>
    <div>
        <SidebarMenu />
        <RegisterPage />
    </div>
</template>

<script>
import SidebarMenu from '@/components/Menu/SidebarMenu.vue';
import RegisterPage from '@/components/Register/RegisterPage.vue';

    export default {
        name: 'RegisterView',
        components: {
            RegisterPage,
            SidebarMenu
        }
    }

</script>
<style>

</style>