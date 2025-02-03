<template>
  <div>
    <ul>
      <li
        v-for="folder in folders"
        :key="folder.id"
        class="folder-item"
        @click="selectFolder(folder.id)"
      >
        <i class="fas fa-folder"></i>
        <span>{{ folder.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { Folder } from '../types/folder';

const folders = ref<Folder[]>([]);

onMounted(async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/folders`);
  folders.value = response.data;
});

const emit = defineEmits(['select-folder']);

const selectFolder = (folderId: number) => {
  emit('select-folder', folderId);
};
</script>

<style>
.folder-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  color: #555;
}

.folder-item:hover {
  background-color: #f0f0f0;
}

.folder-item i {
  margin-right: 8px;
  color: #ffc107; /* Yellow color for folder icons */
}
</style>