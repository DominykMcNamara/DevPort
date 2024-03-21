<script setup>
import Layout from "@/Layouts/Layout.vue";
import HomePortFolioSVG from "@/Components/HomePortFolioSVG.vue";

defineProps();

</script>


<template>
    <Layout>


        <section class="flex flex-col items-center my-10 place-content-center h-[75vh] gap-10">

            <HomePortFolioSVG height="300" width="250"/>

            <div class="space-y-10 text-center">
                <h1 class="text-2xl font-bold">Developer portfolios made simple</h1>
                <p class="text-lg">Create a custom portfolio and showcase your applications to the
                    world
                </p>
                <div>
                    <a
                        class="bg-blue-500 text-center py-5 px-20 text-white text-xl rounded-2xl shadow-lg hover:bg-blue-600"
                        href="/register">Sign Up</a>
                </div>
            </div>


        </section>
    </Layout>
</template>
