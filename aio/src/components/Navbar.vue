<template>
    <nav>
        <a href="#">Account</a>
        <a href="#">Home</a>
        <a href="#">Account</a>
    </nav>
</template>
<style scoped>
    a {
        color: yellow;
        text-decoration: none;
        background-color: black;
        padding: 16px;
        border-radius: 50px;
    }
    a:hover {
        color: red;
    }
    nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
