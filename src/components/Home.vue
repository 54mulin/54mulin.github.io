<template>
    <v-card class="ma-5 mx-auto" max-width="1000">
        <v-card-title>
            <v-row class="mt-3">
                <v-col cols="12" md="2">
                    <v-avatar size="150">
                        <v-img alt="mulin" src="../assets/media.png"></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="12" md="10" class="d-flex align-center pt-0">
                    <v-container class="pa-0">
                        <v-list-item fluid class="pa-0 pt text-light-green-darken-4">Maureen Lin</v-list-item>
                        <v-list-item fluid class="pa-0 text-subtitle-2">
                            <v-icon icon="mdi-email-outline" size="x-small"></v-icon>
                            E-mail: <br />
                            mulin<v-icon icon="mdi-at" size="x-small"></v-icon>ntnu.edu.tw<br />
                            <v-icon icon="mdi-briefcase-outline" size="x-small"></v-icon>
                            Office: <br />
                            <span class="text-wrap">Tjing Ling Industrial Building 222, National Taiwan
                                University</span>
                        </v-list-item>
                    </v-container>
                </v-col>
            </v-row>

        </v-card-title>

        <v-card-text>
            <v-divider></v-divider>
            <v-container fluid class="px-0">
                <span class="text-h6">Research Interest</span> <br>
                <v-list-item>
                    Experienced Software Engineer with a demonstrated history of working. <br>
                    Skilled in Full-stack development, Database Management, Data Mining,
                    Analytics & Visualization.
                </v-list-item>
            </v-container>

            <v-divider></v-divider>
            <v-container fluid class="px-0">
                <span class="text-h6">Education</span> <br>
                <v-list-item v-for="edu in edus">
                    <span>{{ edu.department }}</span>
                    <v-list-item-subtitle>
                        {{ edu.school }} <br>
                        {{ edu.time }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-container>

            <v-divider></v-divider>
            <v-container fluid class="px-0">
                <span class="text-h6">Experience</span> <br>
                <v-list-item v-for="exp in exps">
                    <span>{{ exp.office }}</span>
                    <v-list-item-subtitle>
                        {{ exp.company }} <br>
                        {{ exp.time }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
import { edus, exps } from "./Home.js";

export default {
    data() {
        return {
            edus: edus,
            exps: exps
        };
    }
};
</script>
