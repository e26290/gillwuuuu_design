<template>
    <div class="area_contact">
        <h2 class="contact_text">聯絡我～～～～</h2>
        <div class="email">
            <i class="fa-solid fa-paper-plane"></i>
            <h4>Livercheers@gmail.com</h4>
        </div>
    </div>
</template>
<script setup></script>
<style scoped lang="scss">
@import "src/css/_mixins.scss";
.area_contact {
    padding: 3rem 0;
    margin: 2rem 0;
    border-top: solid 1px var(--primary);
    border-bottom: solid 1px var(--primary);
    .contact_text {
        text-align: center;
    }
    .email {
        @include flex;
    }
}
</style>