import redis from "redis";
import { promisify } from 'util';


const client = redis.createClient();
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
});

const setNewSchool = (schoolName, value) => {
    client.set(schoolName, value, redis.print);
}

const getAsync = promisify(client.get).bind(client);

const displaySchoolValue = async (schoolName) => {
    try {
        const reply = await getAsync(schoolName);
        console.log(reply);
    } catch (error) {
        console.error(`Error fetching value for ${schoolName}: ${error.message}`);
    }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');