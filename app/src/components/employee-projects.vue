<template>
  <div class="vc-employee-projects">
    <h2 class="text-xl font-bold text-white mb-2">Projects:</h2>
    <div v-for="(item, index) in items" class="card px-2 py-2 bg-white mb-3 rounded-lg">
      <h2>
        <a :href="item.website" target="_blank" class="text-blue-400">
          {{ item.name }}</a
        >
        - <span>{{ item.tech }}</span>
      </h2>
      <p class="text-sm">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeProjects",
  data() {
    return {
      items: [
        {
          website: "https://www.bobcat.de",
          name: "Bobcat Bensheim GmbH",
          tech: "Magento2",
          desc: "Support and Development for the Store.",
        },
        {
          website: "https://www.vc-24.de",
          name: "Vosschemie GmbH",
          tech: "Magento2",
          desc: "Support and Development for the Store.",
        },
        {
          website: "https://www.toyota.de",
          name: "The & Partnership",
          tech: "Tridion",
          desc: "Support for the Content Managment Team for toyota.de",
        },
        {
          website: "https://www.perfumetrader.de",
          name: "Perfumetrader GmbH",
          tech: "Magento2",
          desc: "Development of the new Magento2 Shop",
        },
        {
          website: "https://www.altherr.de",
          name: "Drei Trade GmbH",
          tech: "Magento2",
          desc: "Support and Development for the Store.",
        },
        {
          website: "https://www.fritz-berger.de",
          name: "Fritzberger GmbH",
          tech: "Etailer Suite",
          desc: "Support and Development for the Shop.",
        },
      ],
    };
  },
};
</script>
