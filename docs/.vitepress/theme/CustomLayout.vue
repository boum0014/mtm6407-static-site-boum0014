<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #default>
      <div style="padding: 30px; background: #f2f2f2; min-height: 100vh;">
        <h1 style="font-size: 28px; margin-bottom: 20px;">Gallery</h1>
        <Content />
      </div>
    </template>
  </Layout>
</template>
