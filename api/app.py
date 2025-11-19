from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "backend ok"}

@app.get("/items")
def items():
    return {"message": "items endpoint ok"}
