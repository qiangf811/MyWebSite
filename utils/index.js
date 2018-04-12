class AsyncQueue {
  fetchData (lists, fun) {
    return new Promise((resolve, reject) => {
      (async function start () {
        try {
          for (let data of lists) {
            await fun(data)
          }
        } catch (e) {
          reject(e)
        }
        resolve()
      })()
    })
  }
}
module.exports = {AsyncQueue}
