const kue = require('kue')

const queue = kue.createQueue();

const jobData = {
    phoneNumber: '1234567890',
    message: 'This is s test message'
}

const job = queue.create('push_notification_code', jobData);
job.on('enqueue', (id, type) => {
    console.log(`Notification Job created: ${id}`);
});

job.on('complete', () => {
    console.log('Notification job completed');
})

job.on('failed', () => {
    console.log('Notification job failed');
});

job.save();