#!/bin/bash
# lint.sh
# eslint --fix --ext .js,.jsx,.ts,.tsx ./src
npm run check
if [ $? -ne 0 ]; then
    echo ""
    echo "prettier 验证未通过 请执行 npm run format 后再提交代码"
    echo ""
  exit 1
fi