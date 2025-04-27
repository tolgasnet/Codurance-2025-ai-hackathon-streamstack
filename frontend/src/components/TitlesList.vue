<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type Title from '../types/Title';
import { TitleService } from '../services/TitleService';

const titles = ref<Title[]>([]);
const error = ref<string | null>(null);
const loading = ref(true);

async function fetchTitles() {
  try {
    titles.value = await TitleService.getTitles();
  } catch (e) {
    error.value = 'Failed to load titles';
  } finally {
    loading.value = false;
  }
}

onMounted(fetchTitles);
</script>

<template>
  <div class="titles-container">
    <h1>Movie Titles</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="titles-grid">
      <div v-for="title in titles" :key="title.id" class="title-card">
        <h2>{{ title.name }}</h2>
        <p class="description">{{ title.description }}</p>
        <div class="title-details">
          <span class="year">Year: {{ title.releaseYear }}</span>
          <span class="genre">Genre: {{ title.genre }}</span>
          <span class="rating">Rating: {{ title.rating }}/10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titles-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
}

.error {
  color: #dc3545;
}

.titles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.title-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-card h2 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.description {
  color: #666;
  margin-bottom: 15px;
  font-size: 0.9em;
}

.title-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9em;
  color: #666;
}

.year, .genre, .rating {
  display: block;
}
</style> 