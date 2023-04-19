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

  // 添加资源
  PIXI.Assets.add('jian', '/textures/jian.png')
  PIXI.Assets.add('man', '/textures/man.png')
  PIXI.Assets.add('mujian', '/textures/mujian.png')

  // 异步加载资源
  const texturesPromise = PIXI.Assets.load(['jian', 'man', 'mujian'], (progress) => {
    console.log('加载完成:', progress)
  })

  // 加载完成后创建精灵
  texturesPromise.then((textures) => {
    // 创建容器
    const container = new PIXI.Container()
    // 创建精灵
    const sprite = new PIXI.Sprite(textures.jian)
    // 设置精灵位置
    sprite.x = app.screen.width / 2
    sprite.y = app.screen.height / 2
    // 设置精灵锚点
    sprite.anchor.set(0.5)
    // 设置精灵缩放
    sprite.scale.set(0.5)
    // 设置精灵透明度
    sprite.alpha = 0.5
    // 设置精灵旋转
    sprite.rotation = 0.5
    // 设置精灵混合模式
    sprite.blendMode = PIXI.BLEND_MODES.ADD
    // 设置精灵交互
    // sprite.interactive = true
    sprite.eventMode = 'static'
    // 设置精灵鼠标样式
    // sprite.buttonMode = true
    // 设置精灵鼠标事件
    sprite.on('pointerdown', () => {
      console.log('pointerdown')
    })
    container.addChild(sprite)

    // 创建精灵
    const sprite2 = new PIXI.Sprite(textures.man)
    sprite2.scale.set(0.1)
    container.addChild(sprite2)

    app.stage.addChild(container)
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
