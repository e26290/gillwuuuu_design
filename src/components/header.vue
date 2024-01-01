<template>
    <header>
        <div class="container navbar">
            <router-link to="/">
                <img src="../assets/img_logo.svg" alt="logo">
            </router-link>
            <button class="menu_open">MENU</button>
        </div>
    </header>

    <!-- menu -->
    <div id="menu-page">
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
</template>
<script setup>

</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";
header {
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

#menu-page {
    // display: none;
    position: fixed;
    top: 69px;
    left: 0;
    background-color: var(--grey-1D);
    width: 100vw;
    height: calc( 100vh - 69px );
    z-index: 99;
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
</style>