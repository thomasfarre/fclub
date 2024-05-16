<template>
<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-900">Login</h2>
      <form action="#" method="POST">
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Email
              </label>
              <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email">
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
              <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          </div>
          <div class="flex items-center justify-between">
              <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Login
              </button>
          </div>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</div>

</template>

<script>
import { ref } from 'vue';
import { signIn } from '../auth'; // Import from auth/index.js

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const login = () => {
      signIn(email.value, password.value)
        .then((userCredential) => {
          console.log("User logged in:", userCredential.user);
          // Redirect or further handling
        })
        .catch((error) => {
          errorMessage.value = error.message;
          console.error("Error logging in:", error.message);
        });
    };

    return { email, password, login, errorMessage };
  }
};
</script>

