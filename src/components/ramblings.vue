<template>
    <div class="ramblings ptb">
        <div class="container">
            <h2 class="secTitle"># RAMBLINGS</h2>
            <span class="secmain">Lorem Ipsum，也稱亂數假文或者啞元文本， 是印刷及排版領域所常用的虛擬文字。 </span>
            
            <!-- 資訊卡片 -->
            <!-- TODO 使用v-for來渲染資料 -->
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card_cover">
                            <img src="/img_rem.jpg" alt="設計雜談">
                        </div>
                        <div class="card_main">
                            <div class="date">2024.01.01</div>
                            <h3 class="title">標題</h3>
                            <p class="content">
                                Lorem Ipsum，也稱亂數假文或者啞元文本， 是印刷及排版領域所常用的虛擬文字。 由於曾經一台匿名的印表機刻意打亂了一盒印刷字體從而造出一本字體樣品書，Lorem Ipsum從西元15世紀起就被作為此領域的標準文本使用。 它不僅延續了五個世紀，還通過了電子排版的挑戰，其雛形卻依然保存至今。 在1960年代，“Leatraset”公司發佈了印刷著Lorem Ipsum段落的紙張，從而廣泛普及了它的使用。 最近，計算機桌面出版軟體“Aldus PageMaker”也通過同樣的方式使Lorem Ipsum落入大眾的視野。
                            </p>
                        </div>
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

.ramblings {
    background-color: var(--grey-F7);
    .secmain {
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .card {
        padding: 0;
        @include flex($a: flex-start);
        flex-direction: row;
        .card_cover {
            // width: 100%;
            max-width: 240px;
            height: 100%;
            aspect-ratio: 4/3;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .card_main {
            padding: 1.5rem;
            @include flex($a: flex-start);
            flex-direction: column;
            .date {
                color: var(--grey-66);
            }
            .title {
                margin: 0;
            }
            .content {
                // TODO 這裡要改寫寫法。
                height: 72px;
                overflow: hidden;
                line-height: 180%;
            }
        }
    }
}
</style>
