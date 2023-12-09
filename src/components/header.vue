<template>
    <div id="app">
        <header>
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/services">Services</router-link>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>