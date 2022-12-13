<template>
    <div>
        <HeaderBase :hideLeft="true">
            <template v-slot:center>熊叩</template>
            <template v-slot:right>
                <!-- <van-icon name="add-o" /> -->
                <!-- <van-icon name="question-o" @click="doSearch" /> -->
            </template>
        </HeaderBase>

        <div class="sidebar">
            <h3>公司车</h3>
            <AKDSelect :data="roleList" @change-xiongKou="getSelectRole"></AKDSelect>
        </div>

        <div class="content">
            <div class="content-top">
                <div class="content-element content-left" @click="toCarList(1)">
                    <p class="content-title">待托号</p>
                    <p class="content-number">{{xiongReport.need}}</p>
                </div>
                <div class="content-element content-right" @click="toCarList(2)">
                    <p class="content-title">本月托号完成</p>
                    <p class="content-number">{{xiongReport.finish}}</p>
                </div>
            </div>
            <div class="content-element content-red" @click="toCarList(3)">
                <p class="content-title">退回原车主</p>
                <p class="content-number">{{xiongReport.returnCar}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderBase from "../components/HeaderBase.vue";
    import AKDSelect from "../components/AKDSelect.vue";
    import axios from 'axios';

    export default{
        data(){
            return {
                roleList:[],
                xiongReport:{},
                form:{
                    selectRole:0
                }
            }
        },  
        created(){
            // 获得权限
            axios.get("http://localhost:8081/roleList").then(res=>{
                this.roleList = res.data;
            });

            // 获得报表数据
            axios.get("http://localhost:8081/xiongReport").then(res=>{
                console.log(this);
                this.xiongReport = res.data;
            }).catch(err=>{
                alert("系统错误，请重试或联系管理员！");
            });
        },  
        methods:{
            doSearch(){
                alert('提示内容');
            },
            getSelectRole(value){
                this.form.selectRole=value;
                console.log(this.form.selectRole);
            },
            toCarList(type){
                // type 1:待托号，2：已托号，3：已退车
                this.$router.push({
                    path:"/car-list",
                    // 传入参数
                    query:{
                        type:type
                    }
                })
            }
        },  
        components:{
            HeaderBase,AKDSelect
        }
    }
</script>




<style>
    .sidebar{
        margin: 20px 10px;
        border-left: 5px solid cornflowerblue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px;
    }
    .content{
        margin:0 20px;
        border-radius: 6px;
        /* 写border-radius在父元素的时候，子元素的4个角属于超出了父元素,超出部分隐藏 */
        overflow: hidden;
    }
    .content-top{
        display: flex;
        margin-bottom: 5px;
    }
    .content-element{
        padding:10px;
        color:#ffc840;
    }
    .content-left{
        flex:auto;
        background-color: #fa8051;
    }
    .content-right{
        width:60%;
        flex: none;
        background-color: #fff1e4;
    }
    .content-right .content-title{
        color: #333;
    }
    .content-title{
        color:white;
    }
    .content-red{
        background-color: #d05252;
    }
    .content-number{
        text-align: right;
        font-size: 24px;
        font-weight: bold;
    }
</style>