<template>
<div grid-list-md white style="margin-top:5px;padding:0!important;">
    <v-layout row wrap>
        <v-flex xs8 style="min-height:580px">
            <v-layout row wrap>
                <v-flex xs7>
                    <v-text-field label="Search" clearable style="margin-left:20px;"></v-text-field>
                </v-flex>
                <v-flex xs4 style="margin-left:20px">
                    <v-select :items="states"  label="Category" ></v-select>
                </v-flex>
            </v-layout>
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex v-for="i in 8" :key="i" xs3>
                         <v-card flat tile>
                         <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
                            <v-card-title style="padding:5px">
                                <div>
                                    <span>Whitsunday Island </span>
                                </div>
                            </v-card-title>
                        </v-card>  
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs4>
                        <v-card>
                            <v-card-title>5555</v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-flex>
        <v-flex xs4>
            <v-container fill-height>
                <v-layout row>
                    <v-flex>
                        <v-card grey>
                            <v-list two-line style="min-height:580px">
                                <template v-for="(item, index) in items">
                                    <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                            <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                                            <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                                            <v-icon   color="grey lighten-1">
                                                edit
                                            </v-icon>
 
                                        </v-list-tile-action>

                                    </v-list-tile>
                                    <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                                </template>

                            </v-list>
                            <v-toolbar color="purple" dark>
                                <v-toolbar-title>Pay : 25,885 $</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>check_circle</v-icon>
                                </v-btn>
                            </v-toolbar>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
             drawer: false,
            selected: [2],
            states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
            items: [{
                    action: '15 min',
                    headline: 'Brunch this weekend?',
                    title: 'Ali Connors',
                    subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                {
                    action: '2 hr',
                    headline: 'Summer BBQ',
                    title: 'me, Scrott, Jennifer',
                    subtitle: "Wish I could come, but I'm out of town this weekend."
                },
                {
                    action: '6 hr',
                    headline: 'Oui oui',
                    title: 'Sandra Adams',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?'
                },
                {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    title: 'Trevor Hansen',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
                },
                {
                    action: '18hr',
                    headline: 'Recipe to try',
                    title: 'Britta Holt',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
                }
            ]
        }
    },
    methods: {
        toggle(index) {
            const i = this.selected.indexOf(index)

            if (i > -1) {
                this.selected.splice(i, 1)
            } else {
                this.selected.push(index)
            }
        }
    }
}
</script>
