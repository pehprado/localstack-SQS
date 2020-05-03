const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const sqs = new AWS.SQS();
const SQS_URL = `http://localhost:4576/queue/my-queue`

async function main() {
    const params = {
        MessageBody: process.argv[2],
        QueueUrl: SQS_URL
    };

    return sqs.sendMessage(params).promise();
}

(async() => {
    const response = await main()
    console.log('RESPONSE', response)
})();