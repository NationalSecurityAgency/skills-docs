<template>
    <div>
        <slot />
        {{ slotCopy }}
    </div>
</template>

<script>
    export default {
        name: "ServiceUrl",
        mounted(){

        },
        computed: {
            slotCopy() {
                return this.$slots.default;
            },
        }
    }
</script>

<style scoped>

</style>