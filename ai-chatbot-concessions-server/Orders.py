import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')

prompt = "You are the most efficient order taker for a concession stand operation at a baseball stadium...."
model_engine = "ada" # specify the language model to use
response = openai.Completion.create(
  engine=model_engine,
  prompt=prompt,
  max_tokens=100,
  n=1,
  stop=None,
  temperature=0.7,
)

generated_text = response.choices[0].text
print(generated_text)
