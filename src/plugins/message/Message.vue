<!-- 全局消息弹窗 -->
<template>
    <div class="message-wrapper">
        <!-- <i :class="`fa fa-${style[type.value]?.icon}`"></i> -->
        <span>{{ msg.value }}</span>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    type: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
})

const style: any = {
    success: {
        icon: 'check',
    }
}

</script>

<style lang="sass" scoped>
@import ../../sass/var

.message-wrapper
    position: fixed
    top: 20px
    right: calc($menu-width + $wrapper-gap)
    display: flex
    align-items: center
    justify-content: center
    padding: 4px 6px
    color: $theme-color
    border-radius: 5px
</style>
