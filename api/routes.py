"""Routes for backend."""
import os
from flask import request, jsonify
from . import app
from .helpers import allow_append

CSV_NAME = os.getenv("CSV_NAME")

@app.route("/")
def index():
    """Return list of urls based on filters provided in querystring."""
    url_list = []
    start = request.args.get("start", type=int, default=0)
    end = start + 10

    width = request.args.get("width", type=int)
    height = request.args.get("height", type=int)

    is_grayscale = ""
    grayscale = request.args.get("grayscale", type=bool, default=False)
    if grayscale is True:
        is_grayscale = "?grayscale"

    with open(CSV_NAME, newline='') as csv_file:
        for url in csv_file:
            url = url.strip()
            if allow_append(url, width, height):
                url_list.append(f"{url}{is_grayscale}")

    return jsonify(url_list[start: end + 1])



