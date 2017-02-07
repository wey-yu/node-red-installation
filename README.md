# node-red-installation

## How to host on Clever Cloud

- fork this repository
- create a FS-Bucket
- name it eg `node-red-storage` (or what ever you want)
- create a file `settings.js` at the root of the bucket:
  ```javascript
  module.exports = {
    uiPort: process.env.PORT || 2000,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',

    adminAuth: {
      type: "credentials",
      users: [{
        username: "admin",
        password: "here put your password hash",
        permissions: "*"
      }]
    },

    logging: {
        // Only console logging is currently supported
        console: {
            level: "fatal",
            metrics: false,
            audit: false
        }
    }
  }
  ```

### Generating the password hash

> :warning: you have to install node-red on your computer to generate a password hash:

`node ./node_modules/node-red-admin/node-red-admin.js hash-pw`

Then update `settings.js` and save it

### Update your repository

- you have to update the `clevercloud/buckets.json` file with the informations of your FS-Bucket:
  ```json
  [
   {
      "bucket_host": "your bucket id",
      "folder": "/node-red-storage"
   }
  ]
  ```
- push your updates
- create an application on Clever Cloud from your repository
- got to your web app and connect with `admin/your_password`


## More

- see: https://nodered.org/docs/security
