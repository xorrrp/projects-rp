<!--<template>-->
<!--&lt;!&ndash;    <aio-header />&ndash;&gt;-->
<!--    <div>-->
<!--        <navbar @switchView="currentComponent = $event" />-->
<!--        <component :is="currentComponent" />-->
<!--    </div>-->
<!--&lt;!&ndash;    <aio-footer />&ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--import Navbar from "@/components/Navbar.vue"-->
<!--import Comp from "@/components/Comp.vue"-->
<!--import Portfolio from "@/components/Portfolio.vue"-->
<!--import Home from "@/components/Home.vue"-->

<!--export default {-->
<!--    components: { Navbar, Comp, Portfolio, Home},-->
<!--    data() {-->
<!--        return {-->
<!--            currentComponent: 'comp'-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->
<template>
    <Portfolio />
</template>

<script setup>
import Portfolio from './components/Portfolio.vue';
</script>
