<template>
    <header :class="{ 'black-bg': isMenuOpen }">
        <div class="container navbar">
            <router-link to="/">
                <h1 class="logo"></h1>
            </router-link>
            <button class="menu_open" @click="toggleMenu">MENU</button>
        </div>
    </header>

    <!-- menu -->
    <transition name="slide">
        <div id="menu-page" v-show="isMenuOpen">
            <div class="container ptb">
                <div class="row">
                    <div class="col-md-6 info">
                        <h2>
                            請講一些廢話～～<br>
                            ～～～～～～<br>
                            ～～～<br>
                        </h2>
                    </div>
                    <div class="col-md-6 item">
                        <ul class="navItems">
                            <li><router-link to="/work" class="item">Work</router-link></li>
                            <!-- <li><router-link to="/contact" class="item">Contact</router-link></li> -->
                            <li><router-link to="/ramblings" class="item">Ramblings</router-link></li>
                        </ul>
                        <span class="copyright">
                            Copyright © 2024 Gill WUUUU. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    
</template>
<script setup>
import { ref } from 'vue';

// 使用 ref 創建一個響應式狀態
const isMenuOpen = ref(false);

// 切換菜單狀態的方法
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // 切換菜單狀態（開啟或關閉）
};
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";
header {
    transition: 0.3s;
    border-bottom: solid 1px var(--grey-D4);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    background-color: var(--white);
    .container {
        flex-direction: row;
        justify-content: space-between;
    }

    .logo {
        width: 200px;
        height: 40px;
        background-image: url(../assets/img_logo.svg);
        background-repeat: no-repeat;
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

header.black-bg {
    transition: 0.3s;
    border-bottom: solid 1px var(--grey-D4);
    background-color: var(--grey-1D);
    .logo {
        background-image: url(../assets/img_logo_w.svg);
    }
    .menu_open {
        color: var(--yellow);
        &::before, &::after {
            background-color: var(--yellow);
            transition: 0.5s;
        }
    }
}

#menu-page {
    position: fixed;
    top: 76px;
    left: 0;
    background-color: var(--grey-1D);
    width: 100vw;
    height: calc( 100vh - 76px );
    z-index: 98;
    color: var(--grey-9F);
    .info {
        height: 100vh;
        @include flex($j: start);
    }

    .item {
        @include flex($a: end, $g: 3rem);
        flex-direction: column;
    }
    .navItems {
        .item {
            color: var(--white);
            font-size: 3rem;
            text-decoration: none;
            transition: .5s;
            color: var(--white);
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
    .copyright {
        font-size: 0.75rem;
    }

}

// menu的transition動畫
.slide-leave-active,
.slide-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(200%);
  opacity: 1;
}
</style>