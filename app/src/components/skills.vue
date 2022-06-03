<template>
  <div class="vc-skills">
    <h2 class="text-xl font-bold text-white mb-2">Skills:</h2>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="mt-2 card bg-white px-2 py-2"
    >
      <span class="font-bold"> {{ item.name }}</span> <br />
      <ul class="card mt-2" v-for="(i, key) in item.tech">
        <li class="list-none ml-2 mt-2">
          <div class="flex justify-between">
            <span
              ><a :href="i.website" target="_blank" class="text-blue-600">
                {{ i.name }}</a
              ></span
            >
            <span>{{ i.percent }}%</span>
          </div>
          <div
            class="h-3 relative max-w-xl rounded-full overflow-hidden bg-gray-300"
          >
            <div
              :class="{
                'h-full bg-gray-500 absolute': true,
                'w-1/5': i.level == '1',
                'w-2/5': i.level == '2',
                'w-3/5': i.level == '3',
                'w-4/5': i.level == '4',
                'w-full': i.level == '5',
              }"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      items: [
        {
          name: "Dev Ops",
          tech: [
            {
              name: "Nginx",
              website: "https://www.nginx.com",
              level: 4,
              percent: 80,
            },
            {
              name: "Certbot",
              website: "https://certbot.eff.org/",
              level: 4,
              percent: 80,
            },
            {
              name: "Docker",
              website: "https://www.docker.com",
              level: 3,
              percent: 60,
            },
            {
              name: "Kubernetes",
              website: "https://kubernetes.io/de/",
              level: 1,
              percent: 20,
            },
          ],
        },
        {
          name: "Frontend Developer",
          tech: [
            {
              name: "Javascript",
              website: "https://developer.mozilla.org/de/docs/Web/JavaScript",
              level: 4,
              percent: 80,
            },
            {
              name: "Html5",
              website: "https://wiki.selfhtml.org/wiki/HTML/Tutorials",
              level: 5,
              percent: 100,
            },
            {
              name: "Css3",
              website: "https://developer.mozilla.org/de/docs/Web/Css",
              level: 5,
              percent: 100,
            },
            {
              name: "VueJs",
              website: "https://vuejs.org",
              level: 3,
              percent: 60,
            },
            {
              name: "Tailwind",
              website: "https://tailwindcss.com",
              level: 3,
              percent: 60,
            },
            {
              name: "Yarn",
              website: "https://yarnpkg.com/",
              level: 4,
              percent: 80,
            },
            {
              name: "Vite",
              website: "https://vitejs.org",
              level: 4,
              percent: 80,
            },
            {
              name: "Less",
              website: "https://lesscss.org/",
              level: 4,
              percent: 80,
            },
            {
              name: "Bootstrap",
              website: "https://getbootstrap.com/",
              level: 4,
              percent: 80,
            },
          ],
        },
        {
          name: "Backend Developer",
          tech: [
            {
              name: "PHP",
              website: "https://php.net/",
              level: 4,
              percent: 80,
            },
            {
              name: "Magento2",
              website:
                "https://business.adobe.com/de/products/magento/magento-commerce.html",
              level: 3,
              percent: 60,
            },
            {
              name: "NodeJs",
              website: "https://nodejs.org/",
              level: 2,
              percent: 40,
            },
            {
              name: "Laravel",
              website: "https://laravel.com/",
              level: 3,
              percent: 60,
            },
            {
              name: "Laravel Lumen",
              website: "https://lumen.laravel.com/",
              level: 3,
              percent: 60,
            },
            {
              name: "Laravel Nova",
              website: "https://nova.laravel.com/",
              level: 3,
              percent: 40,
            },
          ],
        },
      ],
    };
  },
};
</script>
