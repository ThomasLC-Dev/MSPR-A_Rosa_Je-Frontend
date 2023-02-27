<template>
  <div>
    <SidebarMenu />
    <profilView />

    <!-- <ProfilePage /> -->

  </div>
</template>

<script>
import ProfilView from '@/components/ProfilView/ProfileView.vue';
import ProfilPage from '@/components/Profil/ProfilePage.vue';

export default {
  name: 'profil',
  components: {
    ProfilPage
  }
}
</script>

<style></style>
