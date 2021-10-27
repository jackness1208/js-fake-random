# js-fake-random
伪随机函数,提供基于 字符串ASCII码的列表伪随机

## 安装
```bash
yarn add js-fake-random
```

## 使用
```typescript
import { FakeRandom } from 'js-fake-random'
const list = ['red', 'blue', 'yello', 'green']
const iRan = new FakeRandom({ list })
console.log(iRan.pick('我是')) // green
console.log(iRan.pick('你是')) // red
```

## types
```typescript
export interface FakeRandomOption<I = any> {
    list: I[];
}
export declare class FakeRandom<I = any> {
    list: FakeRandomOption<I>['list'];
    constructor(op: FakeRandomOption<I>);
    /** 选择 */
    pick(ctx: string): I;
}
```