import openai
import os
from prophet import Prophet
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')

# Load the inventory data
inventory_data = pd.read_csv("inventory_data.csv")

# Prepare the data for use with Prophet
inventory_data = inventory_data.rename(columns={"date": "ds", "inventory_level": "y"})
inventory_data["ds"] = pd.to_datetime(inventory_data["ds"])

# Create the Prophet model
model = Prophet()

# Train the model on the inventory data
model.fit(inventory_data)

# Specify the forecast horizon
forecast_horizon = 30

# Generate a forecast for the next 30 days
future_dates = model.make_future_dataframe(periods=forecast_horizon)
forecast = model.predict(future_dates)

# Display the forecast
print(forecast.tail())