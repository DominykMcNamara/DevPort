<script setup>

import {Head} from "@inertiajs/vue3";
import NavBar from "@/Components/NavBar.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
</script>

<template>
    <section class="bg-gray-200 py-3   text-slate-800 shadow-lg tracking-wide">
        <header>
            <NavBar/>
        </header>
    </section>

    <section>
        <div class="tracking-wide" >
            <slot/>
        </div>
    </section>
</template>

