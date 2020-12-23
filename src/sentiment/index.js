import { LanguageServiceClient } from '@google-cloud/language';

const client = new LanguageServiceClient();

const sentiment = async (input) => {
    // Prepares a document, representing the provided text
    const document = {
      content: input,
      type: 'PLAIN_TEXT',
    };
    
    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({document});
    
    const sentiment = result.documentSentiment;
    return {
        text: input,
        positivityScore: sentiment.score,
        emotionMagnitude: sentiment.magnitude
    }
}

export default sentiment;