#!/bin/bash
# ============================================================
# VAN LAX — WebP Image Conversion Script
# Run once to convert PNG/JPG gallery images to WebP
# Requires: brew install webp (or: npm install -g cwebp-bin)
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
QUALITY=88  # High quality, visually lossless for art

echo "🔄 Converting Sacred Gallery PNGs to WebP..."
for f in "$SCRIPT_DIR/Sacred Gallery/"*.png; do
  out="${f%.png}.webp"
  if [ ! -f "$out" ]; then
    cwebp -q $QUALITY "$f" -o "$out"
    orig=$(stat -f%z "$f")
    new=$(stat -f%z "$out")
    saved=$(( (orig - new) * 100 / orig ))
    echo "  ✅ $(basename "$f") → $(basename "$out") (-${saved}%)"
  else
    echo "  ⏭  $(basename "$out") already exists, skipping"
  fi
done

echo ""
echo "🔄 Converting Digital Gallery JPGs to WebP..."
for f in "$SCRIPT_DIR/Digital Gallery/"*.jpg; do
  out="${f%.jpg}.webp"
  if [ ! -f "$out" ]; then
    cwebp -q $QUALITY "$f" -o "$out"
    orig=$(stat -f%z "$f")
    new=$(stat -f%z "$out")
    saved=$(( (orig - new) * 100 / orig ))
    echo "  ✅ $(basename "$f") → $(basename "$out") (-${saved}%)"
  else
    echo "  ⏭  $(basename "$out") already exists, skipping"
  fi
done

echo ""
echo "✅ Done! Now update <img src> tags in index.html and index-ru.html:"
echo "   Sacred Gallery: .png → .webp"
echo "   Digital Gallery: .jpg → .webp"
echo ""
echo "📏 Estimated total savings: ~12-13 MB"
