<template>
    <div>
        <b-table striped hover :items="parks" :fields="fields" :current-page="currentPage" @row-clicked="view"></b-table>
        <b-pagination size="sm" :total-rows="10" v-model="currentPage" :per-page="10">
        </b-pagination>
        
    </div>
</template>

<style>
    .tdClass {text-align: left}
</style>


<script>
import {serverBus} from '../main';

export default {
    created: function() {
        this.$http.get(`/api/parks`).then((res) => {
            // console.log(res.data[0]);
            this.parks = res.data;
        });
        
    },
    data() {
        return {
            fields: [
                // city: { label: '도시', sortable: true},
                {key: 'name', label: '이름', sortable: true, tdClass: 'tdClass' },
                // pay: { label: '비용', sortable: true},
                // url: { label: 'URL', sortable: true }
            ],
            parks: [],
            currentPage: 1,
        }
    },
    methods: {
        view: (obj)=>{
            const longitude = obj.longitude;
            const latitude = obj.latitude;
            const name = obj.name;

            //Using the server bus
            this.park = {};
            this.park.lat = latitude;
            this.park.lng = longitude;
            
            serverBus.$emit('view', this.park);

            // console.log(obj);
            console.log(obj.city);
        }
    },
    props: ['park']    
}
</script>

