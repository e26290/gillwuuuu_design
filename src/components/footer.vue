<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-12">
                    <!-- TODO 表單送到哪？ -->
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
                <div class="col-md-7 col-sm-12 info">
                    <button id="pageTop">
                        <i class="fa-solid fa-arrow-up"></i>
                    </button>
                    <ul class="navItems">
                        <li><router-link to="/work" class="item">Work</router-link></li>
                        <!-- <li><router-link to="/contact" class="item">Contact</router-link></li> -->
                        <li><router-link to="/ramblings" class="item">Ramblings</router-link></li>
                    </ul>
                    <router-link to="/">
                        <img src="../assets/img_logo_w.svg" alt="logo">
                    </router-link>
                    <span class="copyright">
                        Copyright © 2024 Gill WUUUU. All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup></script>
<style scoped lang="scss">
@import "src/css/_mixins.scss";

footer {
    padding: 3rem 0;
    background-color: var(--grey-1D);
    color: var(--white);

    .form {
        .main {
            @include flex($a: stretch);
            flex-direction: column;
            margin: 2rem 0;
        }

        .ask {
            @include flex($j: flex-start);
            flex-wrap: wrap;

            .askItem {
                @include flex($g: 0.5rem);
            }

            input[type=checkbox] {
                -webkit-appearance: none;
                -moz-appearance: none;
                -ms-appearance: none;
                -o-appearance: none;
                appearance: none;
                height: 1.5rem;
                width: 1.5rem;
                border: solid 1px var(--white);
                cursor: pointer;
                display: inline-block;

                &:hover {
                    background: var(--grey-33);
                }

                &:checked {
                    background: var(--yellow);
                }
            }
        }

        .text_input {
            background-color: transparent;
            color: var(--white);
            border: none;
            border-bottom: solid 1px var(--white);
            padding: 0.75rem  1rem;
            
            &:focus-visible {
                outline: none;
                border-bottom: solid 1px var(--yellow);
            }
        }

        .formBtn {
            padding: 0.75rem 4.5rem;
            color: var(--white);
            background-color: var(--bruno);
            border-radius: 0.5rem;
        }
    }

    .info {
        @include flex($j: flex-start, $a: flex-end, $g: 2rem);
        flex-direction: column;

        .navItems {
            .item {
                color: var(--white);
                font-size: 1.5rem;
                text-decoration: none;
                transition: .5s;
            }

            li {
                text-align: right;
                @include flex($j: end);
            }

            li::after {
                content: "";
                display: inline-block;
                width: 1.5rem;
                height: 0.125rem;
                background-color: var(--white);
                transition: .5s;
            }

            li:hover {
                &::after {
                    background-color: var(--yellow);
                }

                .item {
                    color: var(--yellow);
                    letter-spacing: 0.125rem;
                }
            }
        }

    }

    .copyright {
        display: block;
        color: var(--grey-9F);
        font-size: 0.75rem;
    }

    #pageTop {
        width: 2.5rem;
        height: 2.5rem;
        background: var(--yellow);
        border-radius: 50%;
        @include flex;
        color: var(--black);
    }
}
</style>