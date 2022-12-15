# Elastic AI

Integrate the OpenAI endpoints to ask questions and get answers

# Authentication

The OpenAI API uses API keys for authentication. Visit your API Keys page to retrieve the API key you'll use in your requests.

Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.

All API requests should include your API key in an Authorization HTTP header as follows:

```yaml
    Authorization: Bearer YOUR-API-KEY 
```

# Completions Requests

### Successful Request

```yaml
    curl --location --request POST 'https://api.openai.com/v1/completions' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer YOUR-API-KEY' \
    --data-raw '{
        "model": "text-davinci-003",
        "prompt": "Messi and Ronaldo football stats",
        "max_tokens": 4000,
        "temperature": 1.0
    }'
```

### Successful Response

```yaml
    {
        "id": "cmpl-6Nhn1dor6Bc05a9UJf0Lr2l9jvKyZ",
        "object": "text_completion",
        "created": 1671107891,
        "model": "text-davinci-003",
        "choices": [
            {
                "text": "\n\n• Lionel Messi-\nGames: Club: 763, International Caps:138, Goals: 670\n• Cristiano Ronaldo-\nGames:Club: 920, International Caps: 177, Goals: 741",
                "index": 0,
                "logprobs": null,
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 6,
            "completion_tokens": 44,
            "total_tokens": 50
        }
    }
```