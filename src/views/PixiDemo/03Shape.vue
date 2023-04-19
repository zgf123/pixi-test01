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

  // 创建一个圆形
  const circle = new PIXI.Graphics()
  circle.beginFill('gold', 0.9)
  circle.drawCircle(0, 0, 32)
  circle.endFill()
  circle.position.set(300, 300)
  app.stage.addChild(circle)

  // 绘制圆角矩形
  const roundedRect = new PIXI.Graphics()
  roundedRect.beginFill('pink', 0.9)
  roundedRect.drawRoundedRect(0, 0, 164, 64, 10) // x, y, width, height, 圆角半径
  roundedRect.endFill()
  roundedRect.position.set(500, 500)
  app.stage.addChild(roundedRect)

  // 绘制椭圆
  const ellipse = new PIXI.Graphics()
  ellipse.beginFill('white', 1)
  ellipse.drawEllipse(10, 10, 164, 64) // 绘制椭圆,第一个参数是x坐标,第二个参数是y坐标,第三个参数是宽度,第四个参数是高度
  ellipse.endFill()
  ellipse.position.set(200, 100)
  app.stage.addChild(ellipse)

  // 绘制多边形
  const polygon = new PIXI.Graphics()
  polygon.beginFill('aqua', 0.9)
  polygon.drawPolygon([0, 0, 100, 0, 100, 100, 0, 100]) // 绘制多边形,参数是一个数组,数组中的每个元素是一个点的坐标,每两个元素是一个点的x坐标和y坐标
  polygon.endFill()
  polygon.position.set(50, 300)
  app.stage.addChild(polygon)
  // draw polygon
  const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520]
  const polygon01 = new PIXI.Graphics()
  polygon01.lineStyle(0)
  polygon01.beginFill(0x3500fa, 1)
  polygon01.drawPolygon(path)
  polygon01.endFill()
  polygon01.position.set(100, 50)
  app.stage.addChild(polygon01)

  // 绘制圆弧
  const arc = new PIXI.Graphics()
  arc.beginFill('beige', 0.9)
  arc.arc(0, 0, 32, 0, Math.PI / 2, false) // 绘制圆弧,第一个参数是x坐标,第二个参数是y坐标,第三个参数是半径,第四个参数是起始角度,第五个参数是结束角度,第六个参数是是否逆时针
  arc.endFill()
  arc.position.set(400, 50)
  app.stage.addChild(arc)

  // 绘制线段
  const line = new PIXI.Graphics()
  line.lineStyle(4, 'brown', 1)
  line.moveTo(0, 0) // 设置线段的起始点
  line.lineTo(100, 100)
  line.lineTo(200, 0)
  line.position.set(500, 50)
  app.stage.addChild(line)
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
