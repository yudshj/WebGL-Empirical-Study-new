import io

from django.http import HttpResponse, HttpRequest
import json
import gzip

# def post(request: HttpRequest):
#     if request.method == 'POST':
#         yudong: str = request.headers.get("Yudong")
#         # with io.BytesIO() as buffer:
#         #     for chunk in request.FILES['data'].chunks():
#         #         buffer.write(chunk)
#         #     body = buffer.getvalue()
#         #     dumped_json = json.loads(gzip.decompress(body))
#         with open(f"../output/{yudong}.json.gz", "wb") as fp:
#             for chunk in request.FILES['data'].chunks():
#                 fp.write(chunk)
#         return HttpResponse(json.dumps({'status': 'ok'}))
#     else:
#         return HttpResponse(json.dumps({'status': 'method error'}))


def post(request: HttpRequest):
    if request.method == 'POST':
        print(len(request.body), request.headers)
        yudong: str = request.headers.get("Yudong")
        with gzip.open(f"../output/{yudong}.json.gz", "wb") as fp:
            fp.write(request.body)
        return HttpResponse(json.dumps({'status': 'ok'}))
    else:
        return HttpResponse(json.dumps({'status': 'method error'}))
