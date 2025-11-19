from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend domain to access API
origins = [
    "*",   # Allow all — or replace with your domain: "https://test-app-001.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the root route!"}

@app.get("/items")
def items():
    return {"message": "Welcome to the items route!"}

@app.get("/items/update")
def update_item():
    return {"message": "Welcome to the update item route!"}
