import redis from 'redis';

const client = redis.createClient();
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
});

const hashKey = 'HolbertonSchools';
const hashValues = {
    Portland: '50',
    Seattle: '80',
    'New York': '20',
    Bogota: '20',
    Cali: '40',
    Paris: '2'
};

const createHash = () => {
    for (const key in hashValues) {
        client.hset(hashKey, key, hashValues[key], redis.print);
    }
};

const displayHash = () => {
    client.hgetall(hashKey, (err, reply) => {
        if (err) {
            console.error(`Error retrieving hash: ${'err'}`);
        } else {
            console.log(reply);
        }
    });
};

createHash();
setTimeout(displayHash, 1000);