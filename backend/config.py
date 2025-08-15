from pydantic import BaseSettings

class Settings(BaseSettings):
    FRONTEND_ORIGIN: str = "http://localhost:5173"

    class Config:
        env_file = ".env"

settings = Settings()
