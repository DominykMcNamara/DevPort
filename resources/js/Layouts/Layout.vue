<script setup>

import {Head} from "@inertiajs/vue3";
import NavBar from "@/Components/NavBar.vue";
</script>

<template>


            <NavBar/>

    <section>
        <div >
            <slot/>
        </div>
    </section>
</template>

