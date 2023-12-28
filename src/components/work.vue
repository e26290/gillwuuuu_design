<template>
    <div class="work ptb">
        <div class="container">
            <h2 class="secTitle"># WORK</h2>

            <!-- 篩選選單 -->
            <!-- TODO 需要下判斷做tab切換 -->
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">All</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">UI/UX</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">WEBSITE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BRAND</a>
                </li>
            </ul>

            <!-- 卡片組 -->
            <div class="row g-3">
                <!-- TODO 卡片內容還沒寫，使用v-for -->
                <div class="col-md-4">
                    <div class="card">123</div>
                </div>
                <div class="col-md-4">
                    <div class="card">123</div>
                </div>
                <div class="col-md-4">
                    <div class="card">123</div>
                </div>
            </div>


            <area_contact/>
        </div>

    </div>
</template>

<script setup>
import area_contact from './area_contact.vue';
</script>

<style scoped lang="scss">
.work {
    .nav {
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    .nav-link {
        color: var(--grey-9F);
        font-size: 1.125rem;
    }
    .nav-link.active {
        color: var(--bruno);
        font-weight: 700;
        border-bottom: solid 1px var(--bruno);
    }
}
</style>
