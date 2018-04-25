// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = {
  mongo: {
    connector: "mongodb",
    url: process.env.MONGODB_URI,
    hostname: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "todo-example"
  }
};
