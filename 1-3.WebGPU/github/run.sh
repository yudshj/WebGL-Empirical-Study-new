curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer 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" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/search/repositories?q=webgl&sort=stars&order=desc&page=1"

curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer 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" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/search/repositories?q=webgpu&sort=stars&order=desc&page=1"

# jq -r '.items[] | select(.homepage != null and .homepage != "") | .homepage' output_18k/github_webgl*.json | sort | uniq > ./github_webgl_urls.txt
# jq -r '.items[] | select(.homepage != null and .homepage != "") | .homepage' output_18k/github_webgpu*.json | sort | uniq > ./github_webgpu_urls.txt

# uniq -d tmp.txt
# 3d.io
# phaser.io
# react-webgpu-samples.vercel.app