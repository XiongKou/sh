<template>
    <!-- 整体的div包裹 -->
    <div class="akd-select">
        <!-- 默认显示出来的input内容 -->
        <div class="akd-select-input" @click="onSelectInput">
            <input type="text" v-model="selectInput" placeholder="请选择..."/>
            <!-- 下拉框图标 -->
            <van-icon name="arrow-down" />
        </div>
        <!-- v-if:元素被删除了，如果要访问这个元素，还要等他加载成功后才能访问 -->
        <!-- v-show:元素设置display:none -->
        <div class="akd-select-content" v-show="showSelect">
            <!-- <p>托号组</p>
            <p>主管/助理</p>
            <p>组长</p>
            <p>师傅</p>
            <p>质检组</p>
            <p>拍照部</p>
            <p>机动部</p> -->

            <p v-for="item in data" :value="item.value" @click="onSelectP">{{item.text}}</p>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .akd-select{
        position: relative;
        width:180px;
        font-size: 14px;
    }
    .akd-select-input{
        border:1px solid #e3e3e3;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 35px;
        line-height: 35px;
    }
    .akd-select-input input{
        border: 0;
        height: inherit;
        width:100%;
        /* 字体缩进10像素 */
        text-indent: 10px;
    }
    .akd-select-input i{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width:40px;
        line-height: inherit;
        text-align: center;
    }

    .akd-select-content{
        position:absolute;
        left: 0;
        right: 0;
        padding: 0 5px;
        max-height: 240px;
        overflow: auto;
        box-shadow: 1px 1px 14px #909090;
        background-color: white;
        z-index: 9;
    }
    .akd-select-content p{
        border-bottom: 1px solid #e3e3e3;
        padding: 12px 10px;
        font-weight:bold;
        line-height: 30px;
    }
    /* 最后一个元素样式 */
    /* 还有first-child */
    .akd-select-content p:last-child{
        border: 0;
    }
</style>
<script>
    export default{
        data(){
            return {
                showSelect:false,
                selectInput:''
            }
        },
        // [{text:"托号",value:1}]
        props:["data"],
        methods:{
            // 文本框点击事件
            onSelectInput(){
                if(this.showSelect==true){
                    this.showSelect=false;
                }else{
                    this.showSelect=true;
                }
            },
            // e.target:vue事件源，获得点击的对象
            onSelectP(e){
                console.log(e.target);
                //1 隐藏下拉面板
                this.showSelect=false;
                //2 把text值赋值给文本框
                this.selectInput = e.target.innerHTML;
                //3 取到value值，传递给调用页面
                let selectValue = e.target.getAttribute("value");
                // 调用父页面的change-xiongKou方法，并且把参数传过去
                this.$emit('change-xiongKou',selectValue);
            }
        }
    }
</script>