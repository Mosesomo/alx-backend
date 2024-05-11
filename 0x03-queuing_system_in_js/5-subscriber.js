import redis from 'redis';

const client = redis.createClient();
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
});

client.subscribe('holberton school');
client.on('message', (channel, message) => {
    console.log(`Received message on channel ${channel}: ${message}`);
    if (message === 'KILL_SERVER') {
        client.unsubscribe();
        client.quit();
    }
});