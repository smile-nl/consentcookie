<template>
    <div id="tracking" class="ic-content">
        <div class="trackers" v-if="trackers && trackers.length > 0">
            <ic-connection-summary v-for="tracker in trackers" :connection="tracker">

            </ic-connection-summary>
        </div>
    </div>
</template>
<script>

    // Libraries
    var underscore = require("underscore");

    // Custom import
    var trackers = require('assets/json/trackers.json');

    // Components
    var icConnectionSummary = require('components/connections/icConnectionSummary.vue');

    // Defaults
    var viewTitle = "Voorkeuren";

    // View state
    var data = {

    };

    // Public functions
    module.exports = {
        name: "connections",
        components:{
	        icConnectionSummary:icConnectionSummary
        },
        props:{
            tracker: Object
        },
        data : function(){
            return {
                trackers : underscore.each(trackers.trackers,function(item){
                    item.collapsed = true;
                    item.value = false
                })
            }
        }
    };
</script>

<style lang="scss" scoped>

    @import '../assets/scss/general-variables';

    #tracking{
        min-height: 400px;

        .logo{
            width: 160px;
            padding: 15px 0px 10px 0px;
            margin-left: 20px;

            img{
                width: 40px;
                height: auto;
            }
        }

        .ic-switch{
            margin-bottom: 25px;
            padding-right: 0px;
        }

        .ic-dropdown-button{
            padding-left: 15px;
        }

        .description{
            font-size: 16px;
        }

        .properties {
            margin:20px px;
            padding: 0px 0px 0px 5px;

            .property{

                margin: 10px 0px;

                > *{
                    display: inline-block;
                }

                .fa{
                    font-size: 20px;
                    margin-right:10px;
                }

                .fa-check{
                    color:#4caf50;
                }

                .fa-close{
                    color:#ef5350;
                }

                .text{
                    font-size: 15px;
                    width: 250px;
                }
            }
        }
    }
</style>