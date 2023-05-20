<template>
    <div>
    <form @submit="saveUserInput">
      <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Τι σημαίνει για σένα τρύπια σκέψη;</label>
        </div>
    <p>
      <label>
        <input name="group1" type="radio" value="option1" />
        <span>Θέλω να το κρατήσω για μένα</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" value="option2" />
        <span>Είναι οκ ο κοσμος να δει τον ορισμό μου για την τρύπια σκέψη </span>
      </label>
    </p>
    <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Μοιράσου την τρύπια σκέψη σου</label>
        </div>
        <button class="btn waves-effect waves-light purple teal darken-4 "  style="text-transform: none;" type="submit" name="action">Δημοσίευση</button>
    </form>





      <!-- Your input form
      <form @submit="saveUserInput"> -->
        <!-- Your input fields -->
        <!-- <input v-model="form.name" type="text" placeholder="Name" />
        <input v-model="form.email" type="email" placeholder="Email" />
        Submit button -->
        <!-- <button type="submit">Submit</button>
      </form> -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
        },
      };
    },
    methods: {
      saveUserInput() {
        axios.post('/api/user-input', this.form)
          .then(response => {
            console.log(response.data.message);
            // Optionally, perform any additional actions after saving the data
          })
          .catch(error => {
            console.error(error);
            // Handle the error
          });
      },
    },
  };
  </script>