<template>
    <div class="banner ptb">
        <div class="container wrap">
            <h1 class="pageTitle">從人的需求出發，為專案尋求創新解決方案<br>並創造更多的可能性😉</h1>
            <div class="imgbox">
                <!-- TODO 這裡更換一張ＡＩ詠唱圖 -->
                <img src="/index/img_banner.jpg" alt="banner">
            </div>
            <!-- TODO 效果還沒做 -->
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
                        <div class="col-md-12">
                            <!-- 關於我 -->
                            <div class="card aboutme_content">
                                <span>in 台北</span>
                                <h4>UI/UX 設計師 aka 前端小白菜</h4>
                                <p>
                                    經手過中大型專案，提供各種高品質的設計。<br>
                                    並認同「設計，是為了將問題解決而存在的技術。」－水野學 之裡念。
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12"><div class="card pj1"></div></div>
                        <div class="col-md-6 col-sm-12"><div class="card pj2">
                            <h4>F2E 立委選舉官網</h4>
                            <span>Side Project</span>
                        </div></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="card pj3"></div>
                </div>
            </div>
            <!-- group 2 -->
            <div class="row g-3 mb-3">
                <div class="col-md-4 col-sm-12">
                    <div class="card service">
                        <ul>
                            <li class="item">網頁設計</li>
                            <li class="item">平面設計</li>
                            <li class="item">網頁切版</li>
                            <li class="item">other ?</li>
                        </ul>
                        <span class="mark-icon">＊</span>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row g-3">
                        <div class="col-md-12"><div class="card pj4"></div></div>
                        <div class="col-md-6 col-sm-12"><div class="card pj5"></div></div>
                        <div class="col-md-6 col-sm-12"><div class="card pj6"></div></div>
                    </div>
                </div>
            </div>
            <!-- group 3 -->
            <div class="row g-3">
                <div class="col-md-4 col-sm-12"><div class="card illustration"></div></div>
                <div class="col-md-8 col-sm-12">
                    <div class="card email">
                        <i class="fa-solid fa-paper-plane"></i>
                        <h4>Livercheers@gmail.com</h4>
                    </div>
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
    .aboutme_content {
        color: var(--grey-66);
        align-items: start;
        
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            transition: all 0.3s;
            @include imgCover('/index/img_index_adoutme.jpg');
        }
        &:hover::before {
            scale: 2;
            transform-origin: bottom left;
            filter: brightness(105%);
        }
        span {
            background-color: #fff;
            padding: 0.2rem 0.75rem;
            border-radius: 4rem;
        }
        h4 {
            margin-top: 2.5rem;
            margin-bottom: 1rem;
        }
    }
    .pj1, .pj2 {
        min-height: 40rem;
    }
    .pj1 {
        background-color: var(--grey-E9);
        &::before {
            content: '';
            position: absolute;
            top: 8%;
            left: 50%;
            transform: translate(-50%, 0px);
            @include imgCover('/index/img_index_iseetw.jpg', top);
            width: 80%;
            height: 170%;
        }
    }
    .pj2 {
        justify-content: start;
        @include imgCover('/index/img_index_cat.png');
        padding-top: 7rem;
    }
    .pj3 {
        @include imgCover('/index/img_index_gas.png');
    }
    .service {
        background-color: var(--grey-E9);
        ul {
            @include flex($g:1.5rem);
            flex-direction: column;
            .item {
                font-size: 1.25rem;
            }
        }
        .mark-icon {
            position: absolute;
            left: 50%;
            bottom: 3.5rem;
            transform: translateX(-50%);
            font-size: 48px;
            font-weight: 900;
            color: var(--grey-D4);
        }
    }
    .pj4 {
        min-height: 32rem;
        @include imgCover('/index/img_index_ec.png',top);
    }
    .pj5, .pj6 {
        min-height: 21rem;
    }
    .pj5 {
        @include imgCover('/index/img_index_lunar.png',top);
    }
    .pj6 {
        @include imgCover('/index/img_index_lily.jpg',top);
    }
    .illustration {
        min-height: 16rem;
        @include imgCover('/index/img_index_illustration.jpg');
    }
    .email {
        flex-direction: row;
        gap: 1rem;
        color: var(--grey-66);
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            @include imgCover('/index/img_index_emailbg.png');
        }
        
        .fa-paper-plane {
            font-size: 1.5rem;
        }
    }
}

</style>