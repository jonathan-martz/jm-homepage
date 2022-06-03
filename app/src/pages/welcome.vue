<template>
  <div class="welcome">
    <div class="grid grid-cols-6 gap-2 mt-10">
      <div class="col-span-6 md:col-span-2 mb-5">
        <img
          src="https://avatars.githubusercontent.com/u/20771653?v=4"
          class="rounded-full object-cover h-64 border-2 mx-auto border-white"
          alt=""
        />
      </div>
      <div class="col-span-6 md:col-span-4 text-center">
        <p class="text-white">
          <span class="font-bold"> Jonathan Martz </span> <br />
          <span>{{ $t("welcome.job") }}</span>
        </p>
        <h2 class="text-2xl mt-5">{{ $t("welcome.title") }}</h2>
        <p class="mt-5">
          {{ $t("welcome.message") }} <br />
          {{ $t("welcome.info") }}
        </p>
        <p class="mt-5">
          {{ $t("welcome.email") }}
          <a
            href="mailto:fragen@jmartz.de"
            class="text-blue-600"
            target="_blank"
            >fragen@jmartz.de</a
          >
        </p>
      </div>
      <div class="col-span-6 md:col-span-3">
        <employee-projects></employee-projects>
      </div>
      <div class="col-span-6 md:col-span-3">
        <employee-jobs></employee-jobs>
      </div>
      <div class="col-span-6 md:col-span-3">
        <private-projects></private-projects>
      </div>
      <div class="col-span-6 md:col-span-3">
        <skills></skills>
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeJobs from "../components/employee-jobs.vue";
import EmployeeProjects from "../components/employee-projects.vue";
import PrivateProjects from "../components/private-projects.vue";
import Skills from "../components/skills.vue";

export default {
  name: "Welcome",
  components: {
    "employee-projects": EmployeeProjects,
    "employee-jobs": EmployeeJobs,
    skills: Skills,
    "private-projects": PrivateProjects,
  },
};
</script>
