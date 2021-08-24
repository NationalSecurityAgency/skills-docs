<template>
    <span v-if="getVisible">
        <slot/>
    </span>
</template>

<script>
    export default {
        name: "Conditional",
        props: {
            visibilityFlag: String,
            visibilityValue: {
                type: Boolean,
                default: true,
            },
        },
        computed: {
            getVisible() {
                return this.$themeConfig.visibility[this.visibilityFlag] === this.visibilityValue;
            },
        }
    }
</script>

<style scoped>

</style>
