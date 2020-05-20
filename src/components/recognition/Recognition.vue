<template>
    <v-app>
        <v-container fluid>
            <div class="text-center" :class="animationStatusComputed">
                <p class="my-3 "><span>FIND</span> <span class="display-1 font-weight-medium blue--text">IDOL</span></p>
                <v-btn class="ma-2" outlined x-large fab :loading="loadingImageButton" color="indigo" 
                    :height="tabletDisplay ? '60vw' : '30vw'" :width="tabletDisplay ? '60vw' : '30vw'"
                    @click="onClickImageButton"
                >
                    <v-img v-if="imageUrl" :src="imageUrl" aspect-ratio="1" fab class="rounded"></v-img>
                    <label v-else for="fileIdol" class="button--content">Select idol image <p class="text-add">+</p></label><br>
                    
                </v-btn>
                <input id="fileIdol" type="file" class="d-none" accept="image/png, image/jpeg, image/jpg" @change="changeImage">
                <v-btn v-if="imageUrl" fab class="my-10 display-block warning" x-large :loading="loadingAgainButton" @click="onClickAgainButton">Again</v-btn>
            </div>
            <!-- render idol info component -->
            <div v-if="animationStatus === 1">
                <InfoIdol
                    :info_idol="info_idol"
                    :tabletDisplay="tabletDisplay"
                />
            </div>
            <!-- render error -->
            <div v-if="error !== null">
                <Error
                    :error="error"
                    @hideError="hideError"
                    :tabletDisplay="tabletDisplay"
                />
            </div>
        </v-container>
    </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import InfoIdol from './InfoIdol';
import Error from './Error';

export default {
    components: {
        InfoIdol,
        Error
    },
    data() {
        return {
            imageUrl: null,
            loadingImageButton: false,
            loadingAgainButton: false,
            //detect screen
            tabletDisplay: false,

            animationStatus: 0,
        }
    },
    computed: {
        ...mapGetters("recognition", ['info_idol', 'error']),
        animationStatusComputed() {
            switch(this.animationStatus) {
                case 0: {
                    return '';
                } break;
                case 1: {
                    return 'left-linear';
                } break;
                case 2: {
                    return 'right-linear';
                } break;
                default: {
                    return '';
                }
            }
        },
    },
    watch: {
        info_idol() {
            this.animationStatus = 1;
            this.loadingAgainButton = false;
            console.log(this.info_idol);
        }
    },
    methods: {
        ...mapActions("recognition", ['fetchInfoIdol', 'setError']),
        changeImage(event) {
            let files = event.target.files;
            this.imageUrl = URL.createObjectURL(files[0]);
            this.loadingAgainButton = true;
            // this.loadingImageButton = true;
            // fetch data
            let formData = new FormData();
            formData.append('images', files[0]);
            this.fetchInfoIdol(formData);
            // setTimeout(() => {
                
            // }, 2000);
        },
        onClickAgainButton() {
            this.loadingAgainButton = true;
            this.animationStatus = 2;
            this.imageUrl = null;
        },
        onClickImageButton() {
            // this.loadingImageButton = true;
            // this.animationStatus = 1;
        },
        hideError() {
            console.log('hide');
            this.onClickAgainButton();
            this.setError(null);
        }
    },
    created() {
        let screenWidth = window.innerWidth;
        if(screenWidth < 1024) {
            this.tabletDisplay = true;
        }
        
    },
    mounted() {
    },
}
</script>

<style scoped>
.text-add {
    font-size: 10vw;
}
/* .button--content {} */
.rounded {
    border-radius: 15vw;
}
.display-block {
    display: block;
    margin: auto;
}
.right-linear {
    position: relative;
    animation-name: rightLinearAni;
    animation-duration: 4s;
    /* animation-timing-function: linear */
    animation-fill-mode: forwards;
}
.left-linear {
    position: relative;
    animation-name: leftLinearAni;
    animation-duration: 4s;
    /* animation-timing-function: linear */
    animation-fill-mode: forwards;
}
@keyframes leftLinearAni {
    from {left: 0}
    to {left: -400px}
}
@keyframes rightLinearAni {
    from {left: -400px}
    to {left: 0px}
}
/* mobile */
@media screen and (max-width: 1024px) {
    .rounded {
        border-radius: 30vw;
    }
    .right-linear {
        position: relative;
        animation-name: rightLinearAniMobile;
        animation-duration: 4s;
        /* animation-timing-function: linear */
        animation-fill-mode: forwards;
    }
    .left-linear {
        position: relative;
        animation-name: leftLinearAniMobile;
        animation-duration: 4s;
        /* animation-timing-function: linear */
        animation-fill-mode: forwards;
    }
}
</style>