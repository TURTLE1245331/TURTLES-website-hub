from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

os.chdir(os.path.dirname(__file__))

server = HTTPServer(("0.0.0.0", 8300), SimpleHTTPRequestHandler)
print("Server läuft auf Port 8300")
server.serve_forever()
