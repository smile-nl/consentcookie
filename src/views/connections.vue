<template>
    <div id="tracking" class="ic-content">
        <div v-if="!trackers || trackers.length == 0" class="no-content">
            <i class="fa fa-line-chart" aria-hidden="true"></i>
        </div>

        <div class="trackers" v-if="trackers && trackers.length > 0">
            <ic-content-box :title="tracker.name" v-for="tracker in trackers" class="inline-fix">
                <div class="logo v-centered">
                    <img :src="tracker.icon" />
                </div>
                <ic-switch v-model="tracker.value"></ic-switch>
                <ic-dropdown-button :state="tracker" :iconShowInfo="'chevron-down'" :iconHideInfo="'chevron-up'" title="Meer informatie"></ic-dropdown-button>

                <div class="notification" v-if="tracker.value"> Let op! De tracker staat uit, dit betekent dat we geen gegevens bijhouden en geen persoonlijke aanbiedingen kunnen doen. </div>
                <div v-if="!tracker.collapsed">
                    <div class="description">{{tracker.description}}</div>
                    <div class="properties">
                        <div class="property">
                            <i :class="'fa ' + (tracker.detail.bullets.optional ? 'fa-check ' : 'fa-close')"></i>
                            <div class="text v-centered">Deze {{tracker.type}} is optioneel</div>
                        </div>
                        <div class="property">
                            <i :class="'fa ' + (tracker.detail.bullets.profiling ? 'fa-check ' : 'fa-close')"></i>
                            <div class="text v-centered">Deze {{tracker.type}} maakt profielen</div>
                        </div>
                        <div class="property">
                            <i :class="'fa ' + (tracker.detail.bullets.crosssite ? 'fa-check ' : 'fa-close')"></i>
                            <div class="text v-centered">Deze {{tracker.type}} werkt over meerdere websites</div>
                        </div>
                        <div class="property">
                            <i :class="'fa ' + (tracker.detail.bullets.cookie ? 'fa-check ' : 'fa-close')"></i>
                            <div class="text v-centered">Deze {{tracker.type}} maakt gebruik van analytic cookies</div>
                        </div>
                        <div class="property">
                            <i :class="'fa ' + (tracker.detail.bullets.functional ? 'fa-check ' : 'fa-close')"></i>
                            <div class="text v-centered">Deze {{tracker.type}} maakt gebruik van functionele cookies</div>
                        </div>
                    </div>
                </div>
            </ic-content-box>
        </div>
    </div>
</template>
<script>

    // Libraries
    var underscore = require("underscore");

    // Custom import
    var trackers = require('assets/json/trackers.json');

    // Defaults
    var viewTitle = "Voorkeuren";

    // View state
    var data = {

    };

    // Public functions
    module.exports = {
        name: "tracking",
        components:{
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