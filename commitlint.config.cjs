module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                // 新功能 新特性
                'feat',
                // 修改bug
                'fix',
                // 文档修改
                'docs',
                // 代码格式修改 不是样式修改
                'style',
                // 代码重构
                'refactor',
                // 优化相关
                'perf',
                // 测试用例修改
                'test',
                // 其他修改 如 增加依赖库 改变构建流程
                'chore',
                // 回滚带上一版本
                'revert',
                // 编译相关修改 如版本号、项目构建、依赖改动
                'build',
            ]
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72]
    }
}