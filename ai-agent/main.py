from dotenv import load_dotenv
load_dotenv()

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

from vector import retriever

model = ChatGoogleGenerativeAI(
    model = "gemini-2.5-flash-lite",
    temperature=0.7
)

template="""
You are an expert in answering questions about veterinary businesses based in Pune.

CONTEXT FROM REVIEWS:
{reviews}

USER QUESTION:
{question}

INSTRUCTIONS:
1. Use the "CONTEXT FROM REVIEWS" primarily to answer the question.
2. If the reviews don't contain the specific answer but you have general knowledge about these Pune businesses, you may provide a helpful response while mentioning that specific review data was limited.
"""

prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

while True:
    print("\n\n--------------------------------------------------")
    question = input("Ask your question (press q to quit): ")
    if question.lower() == "q":
        break

    reviews = retriever.invoke(question)

    result = chain.invoke({
        "reviews": reviews,
        "question": question
    })

    print("\n\n")
    print(result.content)