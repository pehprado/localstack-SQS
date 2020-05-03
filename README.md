# LOCALSTACK-SQS
It is a simple project to understand how Localstack works.
The project has two files, one sends numbers to the SQS and the other receives those numbers and calculates the square of them

## Steps
* Up the container
````
docker-compose up -d localstack
````
* Create the queue
````
./run.sh
````
* Send number to the queue
````
npm run send $number
````
* Receive the number and calculate
`````
npm run receive
`````