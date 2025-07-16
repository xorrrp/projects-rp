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
<!--<template>-->
<!--    <Portfolio />-->
<!--</template>-->

<!--<script>-->
<!--</script>-->
<template>
    <div>
        <h1>User List</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
    try {
        const response = await axios.get('/api/users')
        users.value = response.data
    } catch (error) {
        console.error('API call failed:', error)
    }
})
</script>
