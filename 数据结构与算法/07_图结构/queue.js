function Queue() {
  // 属性
  this.items = []

  // 方法
  // 进入队列
  Queue.prototype.enqueue = (element) => {
    this.items.push(element)
  }
  // 删除队列
  Queue.prototype.dequeue = () => {
    return this.items.shift()
  }
  // 返回队列最先添加的
  Queue.prototype.front = () => {
    return this.items[0]
  }
  // 队列是否为空
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0
  }
  // 队列中的个数
  Queue.prototype.size = () => {
    return this.items.length
  }
  // 将队列转string
  Queue.prototype.toString = () => {
    let result = ''
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + ' '
    }
    return result
  }
}
