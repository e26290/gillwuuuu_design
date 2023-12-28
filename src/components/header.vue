<template>
    <header>
        <div class="container navbar">
            <router-link to="/">
                <img src="../assets/img_logo.svg" alt="logo">
            </router-link>
            <button class="menu_open">MENU</button>
        </div>
    </header>
</template>
<script setup></script>
<style scoped lang="scss">
header {
    border-bottom: solid 1px var(--grey-D4);
    padding: 1rem 0;
    .container {
        flex-direction: row;
        justify-content: space-between;
    }
    .navbar {
        padding: 0;
    }

    .menu_open {
        position: relative;
        font-size: 1.75rem;
        font-weight: 700;
        
        &::before, &::after {
            content: "";
            display: block;
            position: absolute;
            left: -32px;
            width: 28px;
            height: 3px;
            background-color: var(--black);
        }
        &::before {
            top: 13px;
        }
        &::after {
            bottom: 13px;
        }
    }
}
</style>