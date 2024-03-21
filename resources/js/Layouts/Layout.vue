<script setup>

import {Head} from "@inertiajs/vue3";
import NavBar from "@/Components/NavBar.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
</script>

<template>
    <section class="bg-gray-200 py-3 w-[100vw]  text-slate-800 shadow-lg tracking-wide">
        <header class ="flex justify-around">

            <ApplicationLogo height="50" width="50" id="application-logo"/>

            <NavBar/>

        </header>
    </section>

    <section>
        <div class="tracking-wide" >
            <slot/>
        </div>
    </section>
</template>

