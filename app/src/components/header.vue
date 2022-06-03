<template>
  <div class="vc-header flex justify-between mt-2">
    <span class="text-2xl text-white font-bold"
      ><router-link to="/">Jmartz.de</router-link></span
    >
    <nav class="flex">
      <ul class="flex text-white space-x-3 mt-2 mr-2">
        <li>
            <router-link to="/impressum">{{$t('nav.impressum')}}</router-link>
        </li>
        <li><router-link to="/contact">{{$t('nav.contact')}}</router-link></li>
      </ul>
      <select
        v-model="$i18n.locale"
        class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option v-for="(item, index) in $i18n.availableLocales">
          {{ item }}
        </option>
      </select>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      lang: "de",
    };
  },
  watch: {
    lang: function (value) {
      console.log(value);
    },
  },
};
</script>
