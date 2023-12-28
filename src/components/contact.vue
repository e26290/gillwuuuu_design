<template>
    <div class="contact ptb">
        <div class="container">
            <h2 class="secTitle"># CONTACT</h2>

            <!-- 卡片組 -->
            <div class="row contactMain">
                <div class="col-md-8">
                    <div class="imgbox">
                        <img src="/img_contactbg.jpg">
                    </div>
                </div>

                <div class="col-md-6 poa">
                    <div class="card">
                        <form action="" class="form">
                        <h5 class="formTitle">歡迎您與我們聯絡！</h5>
                        <div class="main">
                            <div class="ask">
                                <span class="checkTitle">詢問項目</span>
                                <div class="askItem">
                                    <input type="checkbox" id="uiux" name="" value="" />
                                    <label for="uiux">網頁設計</label>
                                </div>
                                <div class="askItem">
                                    <input type="checkbox" id="brand" name="" value="" />
                                    <label for="brand">品牌設計</label>
                                </div>
                                <div class="askItem">
                                    <input type="checkbox" id="website" name="" value="" />
                                    <label for="website">網頁製作</label>
                                </div>
                                <div class="askItem">
                                    <input type="checkbox" id="other" name="" value="" />
                                    <label for="other">其他</label>
                                </div>
                            </div>

                            <input class="text_input" type="text" id="name" name="name" size="10" placeholder="姓名"
                                required />
                            <input class="text_input" type="email" id="email" pattern=".+@example\.com" size="30" placeholder="信箱" required />
                            <textarea class="text_input" id="content" name="content" rows="3" placeholder="內容"></textarea>
                        </div>
                        <button type="submit" class="formBtn">送出表單</button>
                    </form>

                    </div>
                </div>
                
            </div>


            <area_contact />
        </div>

    </div>
</template>

<script setup>
import area_contact from './area_contact.vue';
</script>

<style scoped lang="scss">
.contact {
    height: max(400px, (100vh - 69px));
    background-color: var(--grey-F7);
    .container {
        height: max(400px, 100%);
    }

    .contactMain {
        position: relative;
        // padding-top: 3rem;
        // flex-basis: 100%;
        // height: 100%;
    }

    .poa {
        position: absolute;
        right: 0;
        top: 3rem;
    }

    .imgbox {
        height: 100%;
        border-radius: 1.5rem;
        display: grid;
        place-items: center;
        max-height: 500px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
}</style>
