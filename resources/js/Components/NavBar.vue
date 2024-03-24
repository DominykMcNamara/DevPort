<script setup>


import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import HamburgerMenu from "@/Components/HamburgerMenu.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
</script>

<template>
    <nav class="my-auto flex w-full justify-around">
        <ApplicationLogo height="50" width="50" id="application-logo"/>
        <div class="md:hidden my-auto">
        <HamburgerMenu />
        </div>
        <ul class="justify-around xxs:hidden md:flex w-96">
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
