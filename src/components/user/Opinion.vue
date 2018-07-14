<template>
    <div class="opinion margin_top">
        <yd-cell-group title="">
            <yd-cell-item>
                <yd-textarea slot="right" placeholder="吐槽一下吧" maxlength="100"></yd-textarea>
            </yd-cell-item>
        </yd-cell-group>
        <div class="sub_opinion">
            <yd-button @click.native="opinionConfrim" size="large" bgcolor="#0793ee" color="#FFF">提交</yd-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "opinion",
        data() {
            return {

            }
        },
        methods: {
            opinionConfrim() {
                this.$dialog.toast({mes: '不许吐槽，驳回', timeout: 1000});
            }
        }
    }
</script>

<style scoped>
    .sub_opinion{
        padding:0 .5rem;
    }
</style>
