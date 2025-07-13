<template>
    <nav>
        <button @click="$emit('switchView', 'portfolio')">Portfolio</button>
        <button @click="$emit('switchView', 'home')">Home</button>
        <button @click="$emit('switchView', 'comp')">Account</button>
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
