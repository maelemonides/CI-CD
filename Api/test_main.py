# test_main.py

import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_products():
    response = client.get("/products")

    # Assert that the status code is 200 OK
    assert response.status_code == 200

    # Assuming your response should be a list of products
    assert isinstance(response.json(), list)

    # You can add more specific assertions based on your expected response structure
    # For example, checking the presence of required fields in each product
    for product in response.json():
        assert "name" in product
        assert "price" in product
