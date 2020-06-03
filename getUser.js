import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.userTableName,

    Key: {
      userId: event.pathParameters.id,
    }
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("User not found.");
  }

  return result.Item;
});
