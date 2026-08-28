<script setup lang="ts">
import { useData } from "vitepress";

const { lang } = useData();
</script>

<template>
  <footer class="custom-footer">
    <a href="https://traewelling.org/imprint/" target="_blank" rel="noopener">
      {{ lang.startsWith("de") ? "Impressum" : "Imprint" }}
    </a>
  </footer>
</template>

<style scoped>
.custom-footer {
  padding: 24px 24px 32px;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 13px;
}

.custom-footer a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.custom-footer a:hover {
  color: var(--vp-c-brand-1);
}
</style>
