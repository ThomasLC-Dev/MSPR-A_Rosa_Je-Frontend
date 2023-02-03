
<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen" class="sidebar-panel">
                <div class = "LogoAccueil"></div>
                <ButtonMenu><a href="#home">Home</a></ButtonMenu>
                <ButtonMenu><a href="#about">About</a></ButtonMenu>
                <ButtonMenu><a href="#contact">Contact</a></ButtonMenu>
            </div>
        </transition>
    </div>
</template>
<script>
import ButtonMenu from './ButtonMenu.vue';

export default {
    components: {
        ButtonMenu
    },
    props: {
        isPanelOpen: Boolean
    },
    data: () => ({

    }),
    methods: {
        closeOpenSidebarPanel() {
            this.isPanelOpen = !this.isPanelOpen
        }
    }
}

</script>
<style>
.LogoAccueil{
    margin: 30%;
}
.slide-enter-active {
    transition: transform 0.2s ease;
}

.slide-leave-active {
    transition: transform 0.2s ease;
}

.slide-enter {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}

.sidebar-panel {
    overflow-y: auto;
    background-color: #130f40;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
}
</style>