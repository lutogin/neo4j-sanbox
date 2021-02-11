import Neode from 'neode';

const neo4Host = process.env.NEO4J_HOST;
console.log('neo4Host', neo4Host);
const neode = new Neode(`bolt://${neo4Host}:7687`, 'neo4jUser', 'test');
neode.close();
