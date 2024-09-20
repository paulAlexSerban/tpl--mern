import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ScanCommand, ScanCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from 'dotenv';

dotenv.config({ path: './td_notes-dynamodb.env' });

// Create DynamoDB client
const client = new DynamoDBClient({});

// Define a function to scan and print all items from the DynamoDB table
const printAllItems = async (tableName: string): Promise<void> => {
  try {
    let params: ScanCommandInput = {
      TableName: tableName,
    };

    let items: any[] = [];
    let lastEvaluatedKey: { [key: string]: any } | undefined = undefined;

    // Fetch items in a loop until there's no more data to scan
    do {
      const command = new ScanCommand(params);
      const response = await client.send(command);

      if (response.Items) {
        items = items.concat(response.Items);  // Accumulate the items
      }

      lastEvaluatedKey = response.LastEvaluatedKey;  // If not null, more data remains
      params.ExclusiveStartKey = lastEvaluatedKey;   // Set the start key for the next scan if needed
    } while (lastEvaluatedKey);

    // Print out all the items
    console.log(items);
  } catch (err) {
    console.error("Error scanning DynamoDB table:", err);
  }
};

// Call the function
printAllItems("td_notes");
