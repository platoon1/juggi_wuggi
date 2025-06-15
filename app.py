from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Define the path to your HTML file and its associated folder
HTML_FOLDER = "."
HTML_FILE = "Download Microsoft Office 365 for Windows and Mac _ Microsoft 365.html"
STATIC_FOLDER = "Download Microsoft Office 365 for Windows and Mac _ Microsoft 365_files" # Folder for CSS, JS, images


@app.route('/')
def index():
    """Serves the specified HTML file."""
    return send_from_directory(HTML_FOLDER, HTML_FILE)


# Serve static files (CSS, JS, images) from the HTML_FOLDER/STATIC_FOLDER.
@app.route('/' + STATIC_FOLDER + '/<path:filename>')
def serve_static(filename):
    """Serves static files (CSS, JS, images) from the specified static folder."""
    return send_from_directory(os.path.join(HTML_FOLDER, STATIC_FOLDER), filename)

if __name__ == '__main__':
    app.run(debug=True)