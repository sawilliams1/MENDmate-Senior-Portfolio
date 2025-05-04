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
              {{ problem }}
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex text-center text-wrap card-background" style="color: white;">
              Solution
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ solution }}

            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              Documentation
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-btn v-for="document in documents" :key="document.document" class="ma-2" style="background-color: #08b6aa; color: white;">{{ document.document }}</v-btn>
            </v-expansion-panel-text>
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
        documents: [
          { document: 'Glossary', link: '' },
          { document: 'Vision & Scope', link: '' },
          { document: 'Use Cases', link: '' },
          { document: 'Business Rules', link: '' },
          { document: 'Software Development Plan', link: '' },
          { document: 'Software Requirement Specs', link: '' },
          { document: 'User Acceptance Test Cases', link: '' },
          { document: 'User\'s Manual', link: '' },

        ],
        problem: 'In traditional therapy settings, much of the therapeutic work happens between sessions—but patients often lack the structure, support,\n'+
          'or resources needed to stay engaged on their own. This gap makes it difficult for them to follow through on therapy-related tasks like\n'+
          'journaling, practicing coping techniques, or completing educational materials. At the same time, providers have limited visibility into\n'+
          'a patient’s activity outside of appointments, which can hinder their ability to monitor progress, tailor care, or ensure accountability.\n'+
          'Without a centralized way to assign, track, and reinforce therapy concepts, valuable opportunities for growth and reflection are lost,\n'+
          'and administrative burdens on providers increase.',
        solution: 'MENDmate is a mobile-first, web-based platform designed to close the gap between therapy sessions by supporting both patient \n'+
          'engagement and provider oversight. It gives patients a structured space to access and complete educational resources, reflect through daily \n' +
          'journaling, and track their wellness over time—all while reinforcing key therapy concepts. For providers, MENDmate offers tools to assign tasks, \n' +
          'monitor patient progress, and personalize care with ease. By streamlining communication, simplifying homework management, and visualizing engagement \n' +
          'trends, MENDmate transforms passive therapy follow-up into an active, accountable, and measurable part of the healing process.'
        ,
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
