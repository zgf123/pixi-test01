<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 900,
  height: 600,
  backgroundColor: 'grey',
  resolution: 1 // 分辨率
})
const pixiCanvasRef = ref<HTMLDivElement>()

onMounted(() => {
  pixiCanvasRef.value?.appendChild<any>(app.view)

  // 创建一个矩形
  const rect = new PIXI.Graphics()
  rect.beginFill('gold') // 填充一个颜色
  rect.drawRect(0, 0, 66, 66)
  rect.endFill()

  // 将矩形添加到应用
  app.stage.addChild(rect)
})
</script>

<template>
  <div class="canvasWrapper" ref="pixiCanvasRef"></div>
</template>

<style type="less" scoped>
.canvasWrapper {
  width: 100vw;
  height: 100vh;
}
</style>
