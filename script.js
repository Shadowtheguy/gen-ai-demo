async function query(data) {
  const response = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({
  messages: [
    {
      role: "user",
      content: "What is the capital of France?",
    },
  ],
  model: "openai/gpt-oss-120b:fireworks-ai",
}).then((response) => {
  console.log(JSON.stringify(response));
  console.log(response);
  console.log(response.choices[0].message.content);
});
