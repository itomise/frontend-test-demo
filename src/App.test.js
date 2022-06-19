const sampleTestFunc = (number) => {
  if (number > 0) return true
  return false
}

test('sample test function', () => {
  expect(sampleTestFunc(0)).toBe(false)
  expect(sampleTestFunc(1)).toBe(true)
});
