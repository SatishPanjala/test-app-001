from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/backend")
def root():
    return {"message": "FastAPI root working!"}

@app.get("/backend/items")
def items():
    return {"message": "Items route working!"}
