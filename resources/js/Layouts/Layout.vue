<script setup>

import {Head} from "@inertiajs/vue3";
import NavBar from "@/Components/NavBar.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
</script>

<template>
    <section class="bg-gray-200 py-3 shadow-sm">
        <header class ="flex justify-around">

            <ApplicationLogo height="100" width="100" id="application-logo"/>

            <NavBar/>

        </header>
    </section>

    <section>
        <div class="" >
            <slot/>
        </div>
    </section>
</template>

