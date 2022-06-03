<template>
  <div class="vc-private-projects">
    <h2 class="text-xl font-bold text-white mb-2">Private Projects:</h2>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="projects bg-white px-2 py-2 mb-3 rounded-lg"
    >
      <h2 class="text-blue-400">
        <a :href="item.website" target="_blank">{{ item.name }}</a>
      </h2>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivateProjects",
  data() {
    return {
      items: [
        {
          name: "www.jmartz.de",
          website: "https://www.jmartz.de",
          desc: "Es ist mein privates Portfolio.",
        },
        {
          name: "www.jmartz.gmbh",
          website: "https://www.jmartz.gmbh",
          desc: "Es ist die Firmen Webseite für meine zukünftigen Projekte.",
        },
        {
          name: "www.hetzner.app",
          website: "https://www.hetzner.app",
          desc: "Webapp zum Steuern der Hetzner Cloud Api.",
        },
        {
          name: "www.gummersbach.shop",
          website: "https://www.gummersbach.shop",
          desc: "Es ist eine Seite für die lokalen Läden in der Stadt.",
        },
        {
          name: "www.pwa-template.de",
          website: "https://www.pwa-template.de",
          desc: "Es ist meine Seite für meine Templates zum starten.",
        },
        {
          name: "www.hollander-diele.de",
          website: "https://www.hollander-diele.de",
          desc: "Homepage für ein Restaurant.",
        },
        {
          name: "www.come-in.rocks",
          website: "https://www.come-in.rocks",
          desc: "Homepage für einen Club",
        },
        {
          name: "www.mauelshagen-baustoffe.de",
          website: "https://www.mauelshagen-baustoffe.de",
          desc: "Homepage für eine Baustoffhandel",
        },
        {
          name: "www.olaf-linscheid.de",
          website: "https://www.olaf-linscheid.de",
          desc: "Homepage für einen Handwerker.",
        },
      ],
    };
  },
};
</script>
