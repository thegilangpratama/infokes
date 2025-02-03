<template>
  <div>
    <div v-if="folderId" class="subfolder-grid">
      <div
        v-for="subfolder in subfolders"
        :key="subfolder.id"
        class="subfolder-item"
      >
        <i class="fas fa-folder"></i>
        <p>{{ subfolder.name }}</p>
      </div>
    </div>
    <div v-else class="empty-state">
      Select a folder to view its contents.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import type { Folder } from '../types/folder';

const props = defineProps<{
  folderId: number | null;
}>();

const subfolders = ref<Folder[]>([]);

watch(() => props.folderId, async (newFolderId) => {
  if (newFolderId) {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/folders/${newFolderId}/subfolders`);
    subfolders.value = response.data;
  }
}, { immediate: true });
</script>

<style>
.subfolder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
}

.subfolder-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
}

.subfolder-item:hover {
  background-color: #f0f0f0;
}

.subfolder-item i {
  font-size: 24px;
  color: #ffc107; /* Yellow color for folder icons */
  margin-bottom: 8px;
}

.subfolder-item p {
  font-size: 14px;
  color: #333;
}

.empty-state {
  color: #888;
  font-size: 14px;
  text-align: center;
  margin-top: 24px;
}
</style>