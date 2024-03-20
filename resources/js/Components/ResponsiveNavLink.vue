<script setup>
import {computed} from 'vue';
import {Link} from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ?
        ' py-2 text-start text-base font-bold text-gray-800'
        :
        ' py-2  text-start text-base font-medium  hover:text-blue-600'
);
</script>

<template>
    <Link :class="classes" :href="href">
        <slot/>
    </Link>
</template>
