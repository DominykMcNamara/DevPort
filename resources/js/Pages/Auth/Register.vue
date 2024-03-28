<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';

const form = useForm({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    pronouns: '',
    location: '',
    profile_picture: null,
    bio: '',
    password: '',
    password_confirmation: '',
});


const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const handleFileUpload = (event) => {
    form.profile_picture = event.target.files[0];
}

</script>

<template>

    <Head title="Register"/>

    <form class="grid md:place-content-center   h-[100vh]" @submit.prevent="submit">
        <h1 class="text-center text-3xl my-2">Register</h1>
        <div>
            <InputLabel for="first_name" value="First Name *"/>

            <TextInput
                id="first_name"
                v-model="form.first_name"
                autocomplete="first_name"
                autofocus
                class="mt-1 block w-full"
                required
                type="text"
            />

            <InputError :message="form.errors.first_name" class="mt-2"/>
        </div>

        <div class="mt-4">
            <InputLabel for="last_name" value="Last Name *"/>

            <TextInput
                id="last_name"
                v-model="form.last_name"
                autocomplete="last_name"
                autofocus
                class="mt-1 block w-full"
                required
                type="text"
            />

            <InputError :message="form.errors.last_name" class="mt-2"/>
        </div>

        <div class="mt-4">
            <InputLabel for="username" value="Username *"/>

            <TextInput
                id="username"
                v-model="form.username"
                autocomplete="username"
                autofocus
                class="mt-1 block w-full"
                required
                type="text"
            />

            <InputError :message="form.errors.username" class="mt-2"/>
        </div>
        <div class="mt-4">
            <InputLabel for="email" value="Email *"/>

            <TextInput
                id="email"
                v-model="form.email"
                autocomplete="username"
                class="mt-1 block w-full"
                required
                type="email"
            />

            <InputError :message="form.errors.email" class="mt-2"/>
        </div>

        <div class="mt-4">
            <InputLabel for="pronouns" value="Pronouns"/>

            <TextInput
                id="pronouns"
                v-model="form.pronouns"
                autocomplete="pronouns"
                autofocus
                class="mt-1 block w-full"
                required
                type="text"
            />

            <InputError :message="form.errors.pronouns" class="mt-2"/>
        </div>

        <div class="mt-4">
            <InputLabel for="bio" value="Bio"/>
            <textarea id="bio" v-model="form.bio" class="mt-1 block w-full"/>

            <InputError :message="form.errors.bio" class="mt-2"/>
        </div>

        <div class="text-center flex-col my-5">
            <InputLabel for="profile_picture" value="Profile Picture"/>

            <input id="profile_picture" class="mt-1 block w-full" type="file" @change="handleFileUpload"/>

            <InputError :message="form.errors.profile_picture" class="mt-2"/>
        </div>

        <div class="mt-4">
            <InputLabel for="password" value="Password"/>

            <TextInput
                id="password"
                v-model="form.password"
                autocomplete="new-password"
                class="mt-1 block w-full"
                required
                type="password"
            />

            <InputError :message="form.errors.password" class="mt-2"/>
        </div>


        <div class="mt-4">
            <InputLabel for="password_confirmation" value="Confirm Password"/>

            <TextInput
                id="password_confirmation"
                v-model="form.password_confirmation"
                autocomplete="new-password"
                class="mt-1 block w-full"
                required
                type="password"
            />

            <InputError :message="form.errors.password_confirmation" class="mt-2"/>
        </div>

        <div class="flex items-center justify-end mt-4">
            <Link
                :href="route('login')"
                class="underline text-sm  hover:text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Already registered?
            </Link>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                           class="ms-4 bg-blue-600 hover:bg-blue-700">
                Register
            </PrimaryButton>
        </div>
    </form>
</template>
