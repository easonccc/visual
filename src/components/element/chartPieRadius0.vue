<template>
    <div class="chart">
        <div class="pie" ref="chartPie"></div>
        <div class="tips">
            <div class="tips_one" v-for="(item,index) in bindData" :key="index">
                <div class="one" :style="{'background-color':colors[index]}"></div>
                <div class="two">{{item.name}}</div>
                <div class="three">{{item.value==0?'0':(item.value/total*100).toFixed(2)}}%</div>
                <div class="three" v-if="item.value2">{{item.value2}} {{type?type:"万元"}}</div>
            </div>
        </div>
    </div>
</template>


<script>
    // require('echarts/theme/macarons');
    export default{
        name:'chartPie',
        data(){
            return {
                colors:['#17abff','#ec7f12','#7d66ff','#20d271','#d3d91d',
                    '#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'],
                chart:null,
            }
        },
        props:{
            type:{
                type:String,
                default:""
            },
            bindData:{
                type:Array,
            }
        },
        mounted(){
            this.initChartPie(this.bindData);
        },
        watch:{
            bindData:function (newVal,oldVal) {
                this.bindData = newVal;
                this.initChartPie(this.bindData);
            }
        },
        computed:{
            total(){
                let total=0;
                this.bindData.forEach(v=>{
                    total+=parseInt(v.value)
                })
                return total
            },
        },
        methods:{
            initChartPie(data) {
                this.chart = echarts.init(this.$refs.chartPie);
                // 把配置和数据放这里
                let option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b}:{c}({d}%)",
                        position: ['25%', '45%']
                    },
                    series : [
                        {
                            name:'数量',
                            type:'pie',
                            radius : ['0', '65%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    },
                                    color:(params)=>{
                                        // console.log(params)
                                        return this.colors[params.dataIndex]
                                    }
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },

                            },
                            data:data
                        }
                    ]
                };
                this.chart.setOption(option);
                //   window.onresize = this.chart.resize;
                window.addEventListener("resize", ()=> {
                    this.chart.resize();
                });
            }
        }
    }
</script>

<style scoped lang='less'>
    .chart{
        flex: 1;
        width: 100%;
        height: 100%;
        // background-color: #fff;
        display: flex;
        flex-direction:row;
        box-sizing: border-box;
    }
    .pie{
        width: 45%;
        margin-left: 0.4rem;
    }
    .tips{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .tips_one{
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .one{
                width: 0.34rem;
                height: 0.34rem;
                border-radius: 50%;
                margin-right: 0.2rem;
            }
            .two{
                flex: 1;
                text-align: left;
                height:0.56rem;
                font-size:0.4rem;
                font-weight:400;
                color:rgba(247,248,250,1);
                line-height:0.56rem;
            }
            .three{
                flex: 1;
                text-align: left;
                height:0.56rem;
                font-size:0.4rem;
                font-weight:400;
                color:rgba(247,248,250,1);
                line-height:0.56rem;
            }
        }



    }

</style>
