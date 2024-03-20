<script setup>


import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
</script>

<template>
    <nav class="my-auto">
        <ul class="flex justify-around w-96">
            <li>
                <ResponsiveNavLink :active="$page.component === 'Home'" href="/">Home</ResponsiveNavLink>
            </li>
            <li v-if="!$page.props.auth.user">
                <ResponsiveNavLink :active="$page.component === 'Login'" href="/login">Log In</ResponsiveNavLink>
            </li>
            <li v-if="!$page.props.auth.user">
                <ResponsiveNavLink :active="$page.component === 'Register'" href="/register">Register
                </ResponsiveNavLink>
            </li>
            <li v-if="$page.props.auth.user">
                <ResponsiveNavLink :active="$page.component === 'Home'" href="/dashboard"> Welcome Back   {{
                        $page.props.auth.user.name }}

                </ResponsiveNavLink>
            </li>


            <li v-if="$page.props.auth.user">
                <ResponsiveNavLink href="/logout"> Logout</ResponsiveNavLink>
            </li>

        </ul>

    </nav>
</template>
