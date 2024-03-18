<script setup>


import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
</script>

<template>
    <nav class="flex justify-around w-96">
        <div class="my-auto">
            <ApplicationLogo id="application-logo"/>
        </div>
        <div class="my-auto">
            <ResponsiveNavLink href="/"> Home</ResponsiveNavLink>
        </div>
    </nav>
</template>
