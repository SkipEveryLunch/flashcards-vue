<template>
  <div class="m-5">
    <div class="flex flex-col"
    v-if="!isCreateMode">
      <div class="flex justify-around py-4">
        <div>
          <span class="text-2xl">
            どのセクションを学習しますか？
          </span>
        </div>
        <button class="btn btn-blue"
        @click="toggleIsCreateMode">
          <span>
            新しいセクションを作る
          </span>
        </button>
      </div>
      <ul>
        <li v-for="section in sections"
        :key="section.id">
          <SectionCard
          :name="section.name" :id="section.id"
          />
        </li>
      </ul>
    </div>
    <div class="flex flex-col" v-else>
      <div class="flex justify-around py-4">
        <div>
          <span class="text-2xl">
            新しいセクション名を入力してください。
          </span>
        </div>
      </div>
      <AddSectionCard
      @on-discard="toggleIsCreateMode"
      @reload="load"/>
    </div>
  </div>
</template>
<script lang="ts">
import {ref,onMounted} from "vue";
import SectionCard from "@/components/SectionCard.vue";
import AddSectionCard from "@/components/AddSectionCard.vue";
import {Section} from "@/types";
import axios from "axios";
export default {
  name:"SectionsIndex",
  components:{SectionCard,AddSectionCard},
  setup(){
    const sections = ref<Section[]>([])
    const isCreateMode = ref(false)
    const toggleIsCreateMode =()=>{
      isCreateMode.value = !isCreateMode.value
    }
      onMounted(()=>{
        load()
      })
      const load =async()=>{
        const {data} = await axios.get("sections")
        sections.value = data;
      }
    return{
      sections,
      isCreateMode,
      toggleIsCreateMode,
      load
    }
  }
}
</script>