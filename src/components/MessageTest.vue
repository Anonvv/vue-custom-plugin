<script lang="ts" setup>
import { getCurrentInstance, ComponentInternalInstance } from 'vue';
// get current Vue component instance
const { appContext } = getCurrentInstance() as ComponentInternalInstance
appContext.config.globalProperties.message.success('Success!')
</script>