function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();
  for (let x = 0; x < nums.length; x++) {
    const currentIndex = nums[x];
    const resultJudge = target - currentIndex;
    if (hashMap.has(resultJudge)) {
      return [hashMap.get(resultJudge), x]
    }
    hashMap.set(currentIndex, x)
  }
  return []
}

// Example test codes
// use npx tsx index.ts to run the code below

const numArray: number[] = [6, 3, 7, 12, 34];
const target: number = 18

console.log(twoSum(numArray, target))