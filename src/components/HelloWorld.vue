<template>
  <v-app>
    <div>
      <v-img
        class="mb-4"
        height="150"
        src="/logo.png"
      />

      <div class="mb-8 text-center">
        <h1 class="text-h2 font-weight-bold" style="color: #08b6aa;"> MENDmate</h1>
      </div>
      <v-row class="ma-4">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              Problem
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              In traditional therapy settings, much of the therapeutic work happens between sessions—but patients often lack the structure, support,
              or resources needed to stay engaged on their own. This gap makes it difficult for them to follow through on therapy-related tasks like
              journaling, practicing coping techniques, or completing educational materials. At the same time, providers have limited visibility into
              a patient’s activity outside of appointments, which can hinder their ability to monitor progress, tailor care, or ensure accountability.
              Without a centralized way to assign, track, and reinforce therapy concepts, valuable opportunities for growth and reflection are lost,
              and administrative burdens on providers increase.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex text-center text-wrap card-background" style="color: white;">
              Solution
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              MENDmate is a mobile-first, web-based solution designed to bridge the gap between therapy sessions and real-world application.
              It supports both patients and providers by offering a structured, yet flexible environment for therapeutic growth.
              For patients, it serves as a central hub to access and complete assigned educational resources, track their thoughts
              and wellness trends, and build awareness through reflection. For providers, MENDmate streamlines the process of assigning
              homework—such as readings, breathwork, or videos—and provides visibility into patient engagement and progress.

            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              Documentation
            </v-expansion-panel-title>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex text-center text-wrap card-background" style="color: white;">
              Development Team
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <v-row class="d-flex justify-center">
                <v-col
                  v-for="member in team"
                  :key="member.key"
                  class="v-col"
                  cols="12"
                  lg="6"
                >
                  <div class="d-flex justify-center">
                    <avatar-card :img-src="member.imgSrc" :name="member.name" :role="member.role" />
                  </div>
                </v-col>
              </v-row>
            </v-expansion-panel-text>

          </v-expansion-panel>
        </v-expansion-panels></v-row></div>
  </v-app>
</template>

<script>
  import AvatarCard from '@/components/AvatarCard.vue';
  export default {
    components: {
      AvatarCard,
    },
    data (){
      return {
        team: [
          { name: 'Ros Shelashskyi', imgSrc: '/Ros.PNG', role: 'Team Lead', key: 'R1' },
          { name: 'Aaron Swinney', imgSrc: '/Aaron.PNG', role: 'Documentation Lead', key: 'A1' },
          { name: 'Vishal Seelam', imgSrc: '/Vishal.jpeg', role: 'Frontend Developer', key: 'V1' },
          { name: 'Alvie Thai', imgSrc: '/Alvie.jpeg', role: 'Frontend Developer', key: 'A2' },
          { name: 'Samuel Williams', imgSrc: '/Sam.PNG', role: 'Scrum Master', key: 'S1' },
          { name: 'Amaya Harris', imgSrc: '/Amaya.PNG', role: 'Frontend Developer', key: 'A3' },
          { name: 'Peter Ho', imgSrc: '/Peter.jpeg', role: 'Full Stack Developer', key: 'P1' },
        ],
      }
    },
  }
</script>

<style scoped>
* {
  background-color: white;
}

.card-background{
  background-color: #08b6aa;
}


</style>
