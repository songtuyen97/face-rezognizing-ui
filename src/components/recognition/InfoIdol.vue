<template>
  <div class="info-idol">
    <v-row dense>
      <v-col cols="12">
        <v-card color="info" dark>
          <div class="d-flex align-center">
            <v-avatar class="ma-3" size="125" fab>
              <v-img :src="info_idol.avatar"></v-img>
            </v-avatar>
            <p class="display-1 pl-5 font-weight-bold font-italic">{{info_idol.full_name}}</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{"Basic information"}}</v-card-title>
              <v-card-subtitle class="ml-2">
                <p>
                  Country: {{info_idol.basic_info.country}}
                  <br />
                  Birthday: {{birthdayComputed}}
                  <br />
                  Gender: {{genderComputed}}
                  <br />
                </p>
              </v-card-subtitle>
            </div>

            <v-avatar v-if="!tabletDisplay" class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{"Job information"}}</v-card-title>
              <v-card-subtitle class="ml-2">
                <p>
                  Job name: {{info_idol.job_info.name}}
                  <br />
                  Start time: {{startJobComputed}}
                  <br />
                  End time: {{endJobComputed}}
                  <br />
                </p>
              </v-card-subtitle>
            </div>

            <v-avatar v-if="!tabletDisplay" class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{"Extension"}}</v-card-title>
              <v-card-subtitle class="ml-2">
                <p>
                  <span v-for="(item, i) in info_idol.extension" :key="i">
                    <span>
                      {{item.name}}: {{item.url}}
                      <br />
                    </span>
                  </span>
                </p>
              </v-card-subtitle>
            </div>

            <v-avatar v-if="!tabletDisplay" class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    props: {
        info_idol: Object,
        tabletDisplay: Boolean
    },
    computed: {
        birthdayComputed() {
            if(this.info_idol.basic_info.birthday) {
                return moment(String(this.info_idol.basic_info.birthday)).format('DD/MM/YYYY');
            }
            return 'Unknown';
        },
        startJobComputed() {
            if(this.info_idol.job_info.start_time) {
                return moment(String(this.info_idol.job_info.start_time)).format('MM/YYYY');
            }
            return 'Unknown';
        },
        endJobComputed() {
            if(this.info_idol.job_info.end_time) {
                return moment(String(this.info_idol.job_info.end_time)).format('MM/YYYY');
            }
            return 'Unknown';
        },
        genderComputed() {
            if(this.info_idol.basic_info.gender === 1) {
                return 'Male';
            } else {
                return 'Female';
            }
        }
    }
};
</script>

<style scoped>
.info-idol {
  position: absolute;
  top: 5%;
  left: 55%;
  z-index: 2;
  width: 30vw;
  animation-name: appearAni;
  animation-duration: 6s;
}
@keyframes appearAni {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 1024px) {
  .info-idol {
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 2;
    width: 80%;
    animation-name: appearAniMobile;
    animation-duration: 6s;
    animation-fill-mode: forwards;
  }
  @keyframes appearAniMobile {
    from {
      opacity: 0;
      top: 0;
    }
    to {
      opacity: 1;
      top: 450px;
    }
  }
}
</style>