"""One-off script to generate the Vertex Web Solutions OG image (1200x630)."""
import asyncio
import base64
import os
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

PROMPT = (
    "Design a premium luxury-tech social share image (1200x630 aspect ratio, landscape) for "
    "'Vertex Web Solutions' — a digital agency that builds AI voice receptionists, "
    "custom websites, and social media systems for local businesses. "
    "Style: Apple/Stripe/Linear aesthetic. Dark near-black background (#05050A) with "
    "subtle digital grid pattern. Electric cyan (#00E5FF) and deep royal blue (#0070F3) "
    "glow accents. A stylized triangular 'V' wordmark/logo at top-left in cyan with soft glow. "
    "Bold modern display typography. Headline text reading: 'Luxury digital systems "
    "for local businesses.' Sub-line: 'AI Receptionists · Websites · Social Media'. "
    "Phone number '954-908-9619' shown as a clean tag. Floating glassmorphism UI cards "
    "in the background showing an incoming call notification, a website wireframe, and "
    "social engagement metrics, all rendered in dark glass with thin cyan glowing borders. "
    "Subtle particles and light streaks. Premium, sleek, futuristic, high-contrast, "
    "memorable. No photography — pure illustrative/UI mockup style. "
    "Composition: text on the left, glassy UI cards floating on the right."
)


async def main():
    api_key = os.environ["EMERGENT_LLM_KEY"]
    chat = LlmChat(
        api_key=api_key,
        session_id="vertex-og-image-gen",
        system_message="You are a senior brand designer creating premium social share images.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )

    text, images = await chat.send_message_multimodal_response(UserMessage(text=PROMPT))
    print("Text response (truncated):", (text or "")[:200])
    if not images:
        raise SystemExit("No image returned from model")

    img = images[0]
    out_path = "/app/frontend/public/og-image.png"
    with open(out_path, "wb") as f:
        f.write(base64.b64decode(img["data"]))
    print(f"Saved OG image to {out_path}")


if __name__ == "__main__":
    asyncio.run(main())
