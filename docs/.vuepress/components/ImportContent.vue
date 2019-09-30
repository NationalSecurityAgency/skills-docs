<template>
    <Content :page-key="getPageKey($site.pages)"/>
<!--    <div>-->
<!--        {{ $site.pages }}-->
<!--    </div>-->
</template>

<script>
    import {findPageForPath} from '@app/util';

    export default {
        name: "ImportContent",
        props: {
            path: {
                type: String,
                required: true,
            },
        },
        methods: {
            getPageKey(pages) {
                const result = findPageForPath(pages, this.path)
                return result.key
            }
        }
    }
</script>

<style scoped>

</style>
