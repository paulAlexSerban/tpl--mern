import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb';
import dotenv from 'dotenv';
dotenv.config({ path: './td_notes-dynamodb.env' });

const client = new DynamoDBClient({});

// List of games (ids)
const itemIDs = ['random-user-id-3', 'random-user-id-5', 'random-user-id-4'];

// Function to scan and update items in the DynamoDB table
const updateMissingGames = async (
    tableName: string,
    idField: string,
    updateField: string,
    newValue: string
): Promise<void> => {
    try {
        let params: ScanCommandInput = {
            TableName: tableName,
        };

        let lastEvaluatedKey: { [key: string]: any } | undefined = undefined;

        // Fetch and update items in a loop until the table is fully scanned
        do {
            const scanCommand = new ScanCommand(params);
            const response = await client.send(scanCommand);

            console.log(`Scanned ${response.Items?.length} items`);

            if (response.Items) {
                for (const item of response.Items) {
                    const itemId = item[idField]; // Assuming id is stored as a string
                    const itemTimestamp = item.timestamp.toString(); // Assuming timestamp is stored as a number

                    if (itemId && !itemIDs.includes(itemId)) {
                        console.log(`Updating item with ID ${itemId} to set ${updateField} to ${newValue}`);

                        const input = {
                            TableName: tableName,
                            Key: {
                                user_id: { S: itemId },
                                timestamp: { N: itemTimestamp }, // Make sure it's passed as a number
                            },
                            ExpressionAttributeValues: {
                                ':value': { S: newValue }, // Setting the new value correctly as a string
                            },
                            UpdateExpression: `SET ${updateField} = :value`,
                        };

                        const updateCommand = new UpdateItemCommand(input);
                        await client.send(updateCommand);
                    }
                }
            }

            lastEvaluatedKey = response.LastEvaluatedKey; // Pagination key
            params.ExclusiveStartKey = lastEvaluatedKey; // Set the start key for the next scan if needed
        } while (lastEvaluatedKey);

        console.log('Update process completed.');
    } catch (err) {
        console.error('Error processing DynamoDB items:', err);
    }
};

// Call the function to update missing games
updateMissingGames('td_notes', 'user_id', 'user_name', 'test-backup-point-in-time');
