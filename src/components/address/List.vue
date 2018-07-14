<template>
    <div class="list margin_top">
        <yd-cell-group>
            <yd-cell-item>
                <div slot="left">
                    <router-link to="/order/confirm">
                        非洲亚马逊河流域东非大裂谷
                    </router-link>
                </div>
                <div slot="right" class="edit">
                    <p><router-link to="/address/add">
                            <yd-icon name="compose" size=".5rem"></yd-icon>
                        </router-link></p>
                    <p @click="delAddress"><yd-icon name="delete" size=".5rem"></yd-icon></p>
                </div>
            </yd-cell-item>
        </yd-cell-group>
        <div class="add_addr">
            <yd-button @click.native="addAddress" size="large" bgcolor="#0793ee" color="#FFF">新增收货地址</yd-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        methods: {
            addAddress() {
                this.$router.replace({path: '/address/add'})
            },
            delAddress() {
                this.$dialog.confirm({
                    title: '确定要删除地址？',
                    // mes: '确定要删除地址？',
                    opts: () => {
                        this.$dialog.toast({mes: '删除成功', timeout: 1000});
                        // this.$router.replace({path: '/user/order'})
                    }
                });
            }
        }

    }
</script>

<style scoped>
    p:first-of-type{
        border-bottom: 1px solid #eaeaea;
    }
    p{
        padding: .1rem;
    }
    .edit{
        padding-left: .2rem;
        border-left:1px solid #eaeaea ;
    }
    .add_addr{
        padding: .5rem;
    }
</style>
