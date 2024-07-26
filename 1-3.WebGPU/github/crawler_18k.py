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


# '&sort={}&order={}'
sortby = ['stars', 'forks', 'help-wanted-issues', 'updated']
order = ['asc', 'desc']

sort_options = ['&sort={}&order={}'.format(x, y) for x in sortby for y in order]
sort_options.append('')

headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": "Bearer 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",
    "X-GitHub-Api-Version": "2022-11-28",
}
# for page in range(1, webgl_total_page + 1):
for page in range(1, 10 + 1):
    url = f"https://api.github.com/search/repositories?q=webgl&page={page}&per_page=100"
    for so in sort_options:
        response = requests.get(url+so, headers=headers)
        time.sleep(2.5)
        data = response.json()
        with open("./output_18k/github_webgl-{}-{}.json".format(so.replace('&', '_').replace('=', '_'), page), "w") as f:
            f.write(json.dumps(data, indent=2))
        print(f"WebGL - Page {page} - SO {so} done!")

webgpu_total = 2527
webgpu_total_page = webgpu_total // 30 + 1

# for page in range(1, webgpu_total_page + 1):
for page in range(1, 10 + 1):
    url = f"https://api.github.com/search/repositories?q=webgpu&page={page}&per_page=100"
    for so in sort_options:
        response = requests.get(url+so, headers=headers)
        time.sleep(2.5)
        data = response.json()
        with open("./output_18k/github_webgpu-{}-{}.json".format(so.replace('&', '_').replace('=', '_'), page), "w") as f:
            f.write(json.dumps(data, indent=2))
        print(f"WebGPU - Page {page} - SO {so} done!")