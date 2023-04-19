<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 900,
  height: 600,
  backgroundColor: 'grey',
  resolution: 1, // 分辨率
  antialias: true // 抗锯齿
})
const pixiCanvasRef = ref<HTMLDivElement>()

onMounted(() => {
  pixiCanvasRef.value?.appendChild<any>(app.view)

  // 创建一个矩形
  const rect = new PIXI.Graphics()
  rect.beginFill('gold', 0.5) // 颜色，透明度
  rect.lineStyle(4, 'red', 1) // 线宽，颜色，透明度
  rect.drawRect(100, 100, 66, 66)
  rect.endFill()

  // 图形的定位
  // rect.x = 20
  // rect.y = 20
  // rect.position.set(20, 20)

  // 图形的大小和缩放
  // rect.width = 100
  // rect.height = 200
  // rect.scale.x = 2
  // rect.scale.y = 2
  // rect.scale.set(2, 2) // 缩放：x, y

  // 图形的旋转
  rect.rotation = 0.2
  // 设置中心点
  // rect.pivot.x = 0
  // rect.pivot.y = 0
  // rect.pivot.set(0, 0)

  // 将矩形添加到应用
  app.stage.addChild(rect)

  // 创建一个圆形
  const circle = new PIXI.Graphics()
  circle.beginFill('pink', 1)
  circle.drawCircle(300, 300, 60)
  circle.endFill()

  app.stage.addChild(circle)
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
