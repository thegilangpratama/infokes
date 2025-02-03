<template>
  <div class="app">
    <!-- Toolbar -->
    <div class="toolbar">
      <button class="toolbar-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button class="toolbar-button">
        <i class="fas fa-arrow-right"></i>
      </button>
      <button class="toolbar-button">
        <i class="fas fa-sync"></i>
      </button>
      <input
        type="text"
        placeholder="Search"
        class="search-bar"
      />
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Sidebar -->
      <div class="sidebar">
        <LeftPanel @select-folder="handleFolderSelect" />
      </div>

      <!-- Main Area -->
      <div class="content-area">
        <RightPanel :folderId="selectedFolderId" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/RightPanel.vue';

const selectedFolderId = ref<number | null>(null);

const handleFolderSelect = (folderId: number) => {
  selectedFolderId.value = folderId;
};
</script>

<style>
/* Global Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

/* Toolbar */
.toolbar {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.toolbar-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #555;
}

.toolbar-button:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.search-bar {
  margin-left: 16px;
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
}

/* Main Content */
.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

/* Content Area */
.content-area {
  flex: 1;
  background-color: #fff;
  padding: 16px;
  overflow-y: auto;
}
</style>