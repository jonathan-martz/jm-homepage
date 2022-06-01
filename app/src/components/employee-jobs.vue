<template>
  <div class="vc-employee-jobs">
    <h2 class="text-xl font-bold text-white mb-2">Jobs:</h2>
    <div
      v-for="(item, index) in items"
      class="card bg-white border-blue-600 px-2 py-2 mb-2"
    >
      <h2>
        <a :href="item.company.website" target="_blank" class="text-blue-400">{{
          item.company.name
        }}</a>
        - {{ item.job.name }}
      </h2>
      <p>{{ item.job.from }} - {{ item.job.until }}</p>
      <p class="text-sm text-gray-600">{{ item.job.desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeeJobs",
  data() {
    return {
      items: [
        {
          job: {
            name: "Ausbildung Webentwickler",
            from: "01.08.2016",
            until: "30.01.2020",
            desc: "Während meiner Ausbildung habe ich diverse Shops entwickelt und Support geleistet.",
          },
          company: {
            name: "Flagbit GmbH & Co. KG",
            website: "https://www.flagbit.de",
          },
        },
        {
          job: {
            name: "Junior Fullstack Web Developer",
            from: "01.02.2020",
            until: "30.03.2020",
            desc: "Als Entwickler war ich zuständig für die Entwicklung von Bobcat und Vosschemie.",
          },
          company: {
            name: "Flagbit GmbH & Co. KG",
            website: "https://www.flagbit.de",
          },
        },
        {
          job: {
            name: "Junior Fullstack Web Developer",
            from: "01.06.2021",
            until: "30.04.2022",
            desc: "Als Entwickler habe ich hauptsächlich Perfumetraders Magento 2 Shop mit entwickelt. Nebenbei auch noch Altherr.",
          },
          company: {
            name: "Ageon GmbH",
            website: "https://www.ageongmbh.de",
          },
        },
        {
          job: {
            name: "Junior Fullstack Web Developer",
            from: "01.05.2021",
            until: "now",
            desc: "Als Entwickler unterstütze ich Fritz Berger bei der Weiterentwicklung ihres Shops.",
          },
          company: {
            name: "Etailer Solutions GmbH",
            website: "https://www.etailer.de",
          },
        },
      ],
    };
  },
};
</script>
