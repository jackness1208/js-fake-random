import { FakeRandom } from '../output/index'
test('usage test', () => {
  const list = ['red', 'blue', 'yello', 'green']
  const iRan = new FakeRandom({ list })
  expect(iRan.pick('我是')).toEqual('green')
  expect(iRan.pick('你是')).toEqual('red')
})
