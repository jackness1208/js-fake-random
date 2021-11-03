export interface FakeRandomOption<I = any> {
  list: I[]
}
export class FakeRandom<I = any> {
  list: FakeRandomOption<I>['list'] = []
  constructor(op: FakeRandomOption<I>) {
    this.list = op.list
  }

  /** 选择 */
  pick(ctx: string) {
    let index = 0
    const strArr = ctx.split('')
    strArr.forEach((str) => {
      const strIndex = str.charCodeAt(0)
      if (!isNaN(strIndex)) {
        index += strIndex
      }
    })
    return this.list[index % this.list.length]
  }
}
