# Variable
QUEUE_NAME=my-queue

#Create a queue using the variable
aws \
    --endpoint-url=http://localhost:4576 sqs create-queue --queue-name $QUEUE_NAME


#List all queues
aws --endpoint-url=http://localhost:4576 sqs list-queues