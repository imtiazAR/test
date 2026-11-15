mkdir -p compressed

for f in ./*.{jpg,JPG,jpeg,JPEG}; do
    [ -e "$f" ] || continue

    filename=$(basename "${f%.*}")

    magick "$f" \
      -resize '2048x2048>' \
      -sampling-factor 4:2:0 \
      -interlace Plane \
      -quality 50 \
      "./compressed/${filename}.jpg"
done

for f in ./*.{png,PNG}; do
    [ -e "$f" ] || continue

    filename=$(basename "${f%.*}")

    magick "$f" \
      -resize '2048x2048>' \
      -define png:compression-level=9 \
      "./compressed/${filename}.png"
done
