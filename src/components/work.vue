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
                    <div class="card work_list">
                        <img src="/work/img_gs_cover.png" alt="珠寶電商" class="work_cover">
                        <div class="work_list_name">
                            <h5 class="title">珠寶質感電商</h5>
                            <div class="tag">WEB</div>
                        </div>
                    </div>
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
@import "src/css/_mixins.scss";
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
    .work_list {
        min-height: 28rem;
        overflow: hidden;
        background-color: var(--grey-9F);
        transition: 0.5s;
        &:hover {
            background-color: #566B5A;
        }
        .work_cover {
            border: solid 1px var(--white);
            border-radius: 0.75rem;
            width: 90%;
            position: absolute;
            top: 0;
            margin: 1.25rem auto;
            inset: 0;
            transition: 0.5s;
            filter: grayscale(100%) blur(1px);
        }
        &:hover .work_cover {
            filter: grayscale(0%) blur(0px);
        }
        
        .work_list_name {
            position: absolute;
            bottom: 0;
            background: linear-gradient(180deg, rgba(#fff, 0.70) 0%, rgba(#fff, 0.70) 100%);
            backdrop-filter: blur(0.75rem);
            border-radius: 0.75rem;
            border: 1px solid var(--white);
            padding: 1.25rem 1rem;
            margin: 1.25rem;
            width: 90%;
            @include flex($j:space-between);
            transition: 0.5s;
        }
        &:hover .work_list_name {
            background: linear-gradient(180deg, rgba(#000, 0.70) 0%, rgba(#000, 0.70) 100%);
            color: #fff;
        }
        .title {
            margin: 0;
            font-weight: 400;
            // color: var(--grey-33);
        }
        .tag {
            font-weight: 700;
            color: var(--grey-9F);
        }
    }
}
</style>
