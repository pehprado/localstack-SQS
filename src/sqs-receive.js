const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const sqs = new AWS.SQS();
const SQS_URL = `http://localhost:4576/queue/my-queue`


async function main() {
    const params = {
        MaxNumberOfMessages: 10,
        MessageAttributeNames: [
           "All"
        ],
        QueueUrl: SQS_URL,
        VisibilityTimeout: 20,
        WaitTimeSeconds: 0
    };
    
    const { Messages } = await sqs.receiveMessage(params).promise()

    if (!Messages) return `Ops Something went wrong\nTheres is no message`

    const texts = []

    Messages.forEach(message => {
        const number = parseInt(message.Body)
        texts.push(`${number} squared is ${number**2}`)
    });

    return texts.join('\n')

}

(async() => {
    const response = await main()
    console.log(response)
})();