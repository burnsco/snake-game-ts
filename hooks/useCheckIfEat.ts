export const useCheckIfEat = (head: number[], food: number[]) => {
  if (head[0] === food[0] && head[1] === food[1]) {
    console.log(`food eaten!`)
    console.log("enlarge snake")
    return true
  }

  return false
}
