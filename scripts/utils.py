import re
import os
import io
from PIL import Image

def sanitize_filename(name: str) -> str:
    name = name.strip()
    name = re.sub(r'[\\/:*?"<>|]+', "-", name)
    name = re.sub(r"\s+", "-", name)
    name = re.sub(r"-+", "-", name)  # Replace multiple dashes with single dash
    name = name.strip("-")  # Remove leading/trailing dashes
    return name.lower()

def ensure_dir(path: str):
    os.makedirs(path, exist_ok=True)

def save_image_bytes(image_bytes: bytes, out_path: str):
    try:
        img = Image.open(io.BytesIO(image_bytes))
        img.save(out_path)
    except Exception:
        with open(out_path, "wb") as f:
            f.write(image_bytes)
