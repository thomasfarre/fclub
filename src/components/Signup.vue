<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        <form action="#" method="POST">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Choose a strong password">
            </div>
            <div class="flex items-center justify-between">
                <button @click="signup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign Up
                </button>
            </div>
            <p v-if="errorMessage">{{ errorMessage }}</p>
        </form>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const signup = () => {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Handle user sign up success
          // You might want to redirect or save the user info
          console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
          errorMessage.value = error.message; // Display error message in the template
          console.error("Error signing up:", error.message);
        });
    };

    return { email, password, signup, errorMessage };
  }
};
</script>
