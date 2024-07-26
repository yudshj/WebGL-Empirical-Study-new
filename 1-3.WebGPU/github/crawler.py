# curl -L \
#   -H "Accept: application/vnd.github+json" \
#   -H "Authorization: Bearer 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" \
#   -H "X-GitHub-Api-Version: 2022-11-28" \
#   "https://api.github.com/search/repositories?q=webgl&sort=stars&order=desc&page=2"

import json
import time
import requests

webgl_total = 42459
webgl_total_page = webgl_total // 30 + 1

# for page in range(1, webgl_total_page + 1):
for page in range(1, 10 + 1):
    url = f"https://api.github.com/search/repositories?q=webgl&sort=stars&order=desc&page={page}&per_page=100"
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer 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",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    response = requests.get(url, headers=headers)
    time.sleep(2.5)
    data = response.json()
    with open(f"./output/github_webgl_{page}.json", "w") as f:
        f.write(json.dumps(data, indent=2))
    print(f"WebGL - Page {page} done!")

webgpu_total = 2527
webgpu_total_page = webgpu_total // 30 + 1

# for page in range(1, webgpu_total_page + 1):
for page in range(1, 10 + 1):
    url = f"https://api.github.com/search/repositories?q=webgpu&sort=stars&order=desc&page={page}&per_page=100"
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer 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",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    response = requests.get(url, headers=headers)
    time.sleep(2.5)
    data = response.json()
    with open(f"./output/github_webgpu_{page}.json", "w") as f:
        f.write(json.dumps(data, indent=2))
    print(f"WebGPU - Page {page} done!")