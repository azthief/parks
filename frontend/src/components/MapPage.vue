<template>
    <div>    
        <b-alert show>Map</b-alert>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col>
                    <div id="map" style="width:100%;height:400px;"></div>
                </b-col>
            </b-row>
        </b-container>
        <button v-on:click="moveMap">Move</button>
    </div>
</template>

<style scoped>
</style>

<script>
import loadScriptOnce from 'load-script-once'
import {serverBus} from '../main';

export default {
    created:function() {
        this.$http.get('/api/movies')
        .then((response)=>{
            // console.log(response);
            this.movies = response.data
        })
        serverBus.$on('view', (park) => {
            this.park = park;
            console.log(this.park.lat, this.park.lng);
            this.moveMap(this.park.lat, this.park.lng);
        });
        
    },
    computed: {

    },
    mounted() {     
        console.log('mounted');
        console.log(this);
        // console.log(this.lat);
        // console.log(this.message);
        // console.log(this.$el.textContent);
        var me = this;
        loadScriptOnce('//dapi.kakao.com/v2/maps/sdk.js?appkey=82141dd8c9eaee2aa9f53762465bfa3d&autoload=false&libraries=services,clusterer,drawing',
            function(err) {
                if(err) {
                    console.error(err);
                    return;
                }
                daum.maps.load(function() {
                    var container = document.getElementById('map');
                    var options = {center: new daum.maps.LatLng(33.450701, 126.570667), level: 3};
                    daum.maps.load(()=>{
                        me.maps = daum.maps;
                        me.map = new daum.maps.Map(container, options);
                    });
                });
            })
    },
    data(){
        return {
            lat: 0, lng: 0, map: null, daumMaps: null, park: null
        }
    },
    methods: {
        test:function() {

        },
        moveMap: function(lat, lng) {
            console.log(this.park);
            var moveLatLon = new daum.maps.LatLng(lat, lng);
            this.map.setCenter(moveLatLon);
        }
    },
}
</script>
