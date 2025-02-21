FROM ubuntu:24.04

WORKDIR /app

COPY . .

RUN apt update && apt upgrade -y

RUN apt install -y python3 python3-pip python3-venv

RUN python3 -m venv /app/venv

RUN /app/venv/bin/pip install --no-cache-dir -r /app/requirements.txt \
    && /app/venv/bin/pip install --no-cache-dir python-dotenv

EXPOSE 5000

ENV FLASK_APP=main.py

ENV PATH="/app/venv/bin:$PATH"

CMD ["flask", "run", "--host", "0.0.0.0"]