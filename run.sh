#!/bin/bash
#
# Usage:
#   ./run.sh <function name>

set -o nounset
set -o pipefail
set -o errexit

main() {
  nodejs main.js "$@"
}

"$@"
