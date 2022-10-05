<script setup lang="ts">
import { onBeforeMount, getCurrentInstance, ComponentInternalInstance } from 'vue';
// get current Vue component instance
const { appContext } = getCurrentInstance() as ComponentInternalInstance

onBeforeMount(async () => {
    appContext.config.globalProperties.loading.show() // show loading
    setTimeout(() => { // imitate a data loading
        appContext.config.globalProperties.loading.hide() // hideen loading
    }, 1000);
})
</script>
    
<template>
    <div></div>
</template>
    
<style scoped>

</style>
    