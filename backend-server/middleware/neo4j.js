// Require Neo4j
const neo4j = require('neo4j-driver');

// Create Driver

// Create Driver session

module.exports = (query, callback) => { 
    const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "neo4k"));

    const session = driver.session();

    console.log("neo4j query :", query)

    session.run(query)
    .then(result => {
        // On result, get count from first record
        var data = []
        result.records.map(record => {
            data.push(record.get("user").properties)
        });

        callback(data)
        // Log response
    })
    .catch(e => {
        // Output the error
        callback({result: []})
        console.log(e);
    })
    .then(() => {
        // Close the Session
        session.close();
    })
    .then(() => {
        // Close the Driver
        driver.close();
    });

};