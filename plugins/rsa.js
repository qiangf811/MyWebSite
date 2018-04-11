function genrsa () {
  return new Promise(function (resolve, reject) {
    const exec = require('child_process').exec
    let privateShell = 'openssl genrsa -out rsa_1024_priv.pem 1024'
    let publickShell = 'openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem'
    let getPrivateKey = 'cat rsa_1024_priv.pem'
    let getPublickKey = 'cat rsa_1024_pub.pem'
    exec(privateShell, function (err, stdout, stderr) {
      if (err) {
        reject(err)
      } else {
        exec(publickShell, function (err, stdout, stderr) {
          if (err) {
            reject(err)
          } else {
            exec(getPrivateKey, function (err, stdout, stderr) {
              if (err) {
                reject(err)
              } else {
                let privateKey = stdout
                exec(getPublickKey, function (err, stdout, stderr) {
                  if (err) {
                    reject(err)
                  } else {
                    resolve({ privatekey: privateKey, publickey: stdout })
                  }
                })
              }
            })
          }
        })
      }
    })
  })
}
module.exports = genrsa
