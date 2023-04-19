<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 'gray',
  resolution: 1, // 分辨率
  antialias: true // 抗锯齿
})
const pixiCanvasRef = ref<HTMLDivElement>()

onMounted(() => {
  pixiCanvasRef.value?.appendChild<any>(app.view)

  // 显示hello world文字
  const text = new PIXI.Text('Hello World', {
    fontFamily: 'Arial',
    fontSize: 180,
    fill: 0xff0000,
    align: 'center'
  })

  // 设置文字位置
  text.x = app.screen.width / 2
  text.y = app.screen.height / 2

  // 设置文字锚点
  text.anchor.set(0.5)
  // app.stage.addChild(text);

  // 创建一个圆形
  const circle = new PIXI.Graphics()
  circle.beginFill(0x0000ff)
  circle.drawCircle(app.screen.width / 2, app.screen.height / 2, 100)
  circle.endFill()

  // 创建1个精灵
  const mujian = PIXI.Sprite.from('./textures/mujian.png')

  // 创建一个精灵
  const bunny = PIXI.Sprite.from('./textures/bg.png')
  // 用精灵铺满整个屏幕
  bunny.width = app.screen.width
  bunny.height = app.screen.height
  // 使用文字作为精灵的遮罩
  bunny.mask = text
  // bunny.mask = mujian;
  app.stage.addChild(bunny)
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
