import Neode from 'neode';

const neo4Host = process.env.NEO4J_HOST;

const neode = new Neode(`bolt://${neo4Host}:7687`, 'neo4j', 'test');
console.log('enterprise ->', neode.enterprise());
neode.close();
