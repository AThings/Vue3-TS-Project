#!/bin/bash
# lint.sh
# eslint --fix --ext .js,.jsx,.ts,.tsx ./src
npm run check
if [ $? -ne 0 ]; then
    echo ""
    echo -e "\033[1;31m prettier 验证未通过 请执行 npm run format 后再提交代码 \033[0m"
    echo ""
  exit 1
fi