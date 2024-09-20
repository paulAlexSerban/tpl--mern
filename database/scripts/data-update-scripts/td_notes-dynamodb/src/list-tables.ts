import { ListTablesCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import dotenv from 'dotenv';

dotenv.config({ path: './td_notes-dynamodb.env' });

const client = new DynamoDBClient({});

export const main = async () => {
    const command = new ListTablesCommand({});
    const response = await client.send(command);
    console.log(response);
};

main();
