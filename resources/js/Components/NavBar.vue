<script setup>


import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import HamburgerMenu from "@/Components/HamburgerMenu.vue";
</script>

<template>
    <nav class="my-auto">
        <HamburgerMenu />
        <ul class="flex justify-around xxs:hidden">
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
                <ResponsiveNavLink :active="$page.component === 'Home'" href="/dashboard"> Welcome Back {{
                        $page.props.auth.user.name
                    }}

                </ResponsiveNavLink>
            </li>


            <li v-if="$page.props.auth.user">
                <ResponsiveNavLink href="/logout"> Logout</ResponsiveNavLink>
            </li>

        </ul>

    </nav>
</template>
