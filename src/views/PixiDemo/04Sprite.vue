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

  // 创建一个纹理
  const texture = PIXI.Texture.from('./textures/mujian.png')

  // 创建一个精灵
  const sprite = new PIXI.Sprite(texture)

  // 设置精灵的锚点
  sprite.anchor.set(0.5, 0.5)

  // 设置精灵的位置
  sprite.x = app.screen.width / 2
  sprite.y = app.screen.height / 2

  // 设置精灵旋转45度
  sprite.rotation = Math.PI / 4

  // 设置精灵的缩放
  sprite.scale.set(2, 2)

  // 设置精灵透明度
  sprite.alpha = 0.5

  app.stage.addChild(sprite)

  // ticker实现动画
  app.ticker.add((delta) => {
    // console.log(delta)
    sprite.rotation += 0.01 * delta
  })
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
