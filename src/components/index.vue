<template>
    <div class="banner ptb">
        <div class="container wrap">
            <h1 class="pageTitle">從人的需求出發，為專案尋求創新解決方案<br>並創造更多的可能性😉</h1>
            <div class="imgbox">
                <img src="/img_banner.jpg" alt="banner">
            </div>
            <div class="banner_bottom">
                <div class="scroll_anima"></div>
                <a href="#" class="btn_email">
                    <i class="fa-solid fa-paper-plane"></i>
                    EMAIL
                </a>
            </div>
        </div>
    </div>
    <div class="aboutme ptb">
        <div class="container">
            <h2 class="secTitle"># ABOUT ME</h2>

            <!-- group 1 -->
            <div class="row g-3 mb-3">
                <div class="col-md-8">
                    <div class="row g-3">
                        <div class="col-md-12"><div class="card">123</div></div>
                        <div class="col-md-6 col-sm-12"><div class="card">123</div></div>
                        <div class="col-md-6 col-sm-12"><div class="card">123</div></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="card">123</div>
                </div>
            </div>
            <!-- group 2 -->
            <div class="row g-3 mb-3">
                <div class="col-md-4 col-sm-12">
                    <div class="card">123</div>
                </div>
                <div class="col-md-8">
                    <div class="row g-3">
                        <div class="col-md-12"><div class="card">123</div></div>
                        <div class="col-md-6 col-sm-12"><div class="card">123</div></div>
                        <div class="col-md-6 col-sm-12"><div class="card">123</div></div>
                    </div>
                </div>
            </div>
            <!-- group 3 -->
            <div class="row g-3">
                <div class="col-md-6 col-sm-12">
                    <div class="card">123</div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="card">123</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";
.banner {
    height: max(400px, ( 100vh - 69px));
    .container {
        height: max(400px, 100%);
    }
    .pageTitle {
        color: var(--grey-66);
        text-align: center;
    }
    .imgbox {
        width: 100%;
        flex-basis: 100%;
        height: 100%;
        border-radius: 1.5rem;
        overflow: hidden;
        @include flex;
        img {
            width: 100%;
        }
    }
    .banner_bottom {
        width: 100%;
        @include flex($j: space-between);
        .scroll_anima {
            width: 3px;
            height: 4rem;
            background-color: var(--grey-D4);
            position: relative;
            &::after {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 1rem;
                background-color: var(--primary);

            }
        }
        .btn_email {
            padding: 0.75rem 1.5rem;
            background-color: var(--grey-E9);
            border-radius: 0.5rem;
            color: var(--grey-66);
            font-size: 1.5rem;
        }
    }
}
.aboutme {
}

</style>