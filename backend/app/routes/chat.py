from fastapi import APIRouter

from app.schemas.chat import ChatRequest
from app.services.rag import RAGService

router = APIRouter(tags=["Chat"])

rag_service = RAGService()


@router.post("/chat")
async def chat(request: ChatRequest):
    return rag_service.ask(question=request.question)


@router.get("/chat")
def chat_status():
    return {"message": "Chat route is ready"}