<script setup>
import {ref} from "vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";

const isOpen = ref(false)
</script>

<template>
    <div v-if="!isOpen" class="cursor-pointer" @click="isOpen = !isOpen">
        <p class="text-3xl">&#9776;</p>
    </div>
    <div v-if="isOpen"
         class="cursor-pointer min-w-[100vw] min-h-[100vh] fixed top-0 left-0  bg-slate-700 bg-opacity-50  "
         @click="isOpen =
!isOpen">

        <p class="absolute top-0 right-0 m-5 text-3xl text-gray-100">&#10005;</p>
        <div class="grid place-content-center h-[75vh]">
            <ul class="flex flex-col justify-around text-gray-100">
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
        </div>
    </div>
</template>

<style scoped>

</style>
