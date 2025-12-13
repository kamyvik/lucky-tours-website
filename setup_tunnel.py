
from pyngrok import ngrok
import time
import sys

# Terminate open tunnels if any
ngrok.kill()

try:
    # Attempt to open a tunnel
    public_url = ngrok.connect(5000).public_url
    print(f"TUNNEL_URL: {public_url}")
    sys.stdout.flush()
    
    # Keep alive
    while True:
        time.sleep(1)
except Exception as e:
    print(f"ERROR: {e}")
