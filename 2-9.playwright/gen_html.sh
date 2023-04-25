for i in 0 2 3; do
    zcat "output/cap/TEST-${i}.json.gz" | jq -r '.frame.gl_captures[0].data[0]' > "/tmp/index-${i}.html"
done

for i in 1 4 5; do
    zcat "output/cap/TEST-${i}.json.gz" | jq -r '.frame.gl_captures[0].data[1]' > "/tmp/index-${i}.html"
done