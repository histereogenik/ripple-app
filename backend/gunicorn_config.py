# Bind to all interfaces on port 8000
bind = "0.0.0.0:8000"

# Worker settings
import multiprocessing

workers = multiprocessing.cpu_count() * 2 + 1  # Dynamically set workers based on CPU cores
threads = 2  # Number of threads per worker for handling multiple requests

# Timeout settings
timeout = 120  # Increase if requests take longer to process

# Logging
accesslog = "-"  # Log access requests to stdout
errorlog = "-"   # Log errors to stderr
loglevel = "info"  # Set logging level to info (debug, warning, error are other options)

# Graceful shutdown settings
graceful_timeout = 30  # Time for workers to finish current tasks before shutdown

# Preload app for performance
preload_app = True  # Load application code before workers fork, saving memory
