export type Test = {
  id: number | string
  text: string
}

export const tests = [
  {
    id: 1,
    text: 'これはテスト',
  },
  {
    id: 2,
    text: 'これもテスト',
  },
  {
    id: 3,
    text: 'ざんねん、これもテスト',
  },
  {
    id: 4,
    text: 'またまたテスト',
  },
  {
    id: 'test-string',
    text: '君も懲りないねー',
  },
] as const satisfies Test[]
