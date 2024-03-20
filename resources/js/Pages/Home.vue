<script setup>
import Layout from "@/Layouts/Layout.vue";
import HomePortFolioSVG from "@/Components/HomePortFolioSVG.vue";

defineProps();

</script>


<template>
    <Layout>
        <section>
            <div class="flex justify-around mt-96 ">

                <div class="flex flex-col px-2 justify-around rounded xl">
                    <div class="mx-auto">
                        <h1 class="text-8xl w-96 ">Developer portfolios made simple</h1>
                        <p class="text-4xl">Create a custom portfolio to showcase your applications to the world</p>
                    </div>
                </div>

                <HomePortFolioSVG height="500" width="500"/>

            </div>
        </section>
    </Layout>
</template>
