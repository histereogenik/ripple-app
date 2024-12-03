# `python-base` sets up all our shared environment variables
FROM python:3.12.0-slim AS python-base

# python
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_VERSION=1.8.4 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

# Prepend Poetry and virtualenv to PATH
ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"

# Install system dependencies
RUN apt-get update && apt-get install --no-install-recommends -y \
    curl \
    build-essential \
    libpq-dev \
    gcc \
    git && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Verify Poetry installation
RUN poetry --version

# Set working directory for Poetry setup
WORKDIR $PYSETUP_PATH
COPY poetry.lock pyproject.toml ./

# Install Python dependencies using Poetry
RUN poetry install --no-dev && poetry run pip install --upgrade pip

# Install runtime dependencies
RUN poetry run pip install psycopg2-binary

# Application working directory
WORKDIR /app
COPY . /app/

# Collect static files
RUN poetry run python manage.py collectstatic --noinput

# Expose application port
EXPOSE 8000

# Gunicorn startup command
CMD ["poetry", "run", "gunicorn", "-c", "gunicorn_config.py", "backend.wsgi:application"]
