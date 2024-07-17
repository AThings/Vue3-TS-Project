// @see https://stylelint.bootcss.com

module.exports = {
    extends: [
        // 配置stylelint拓展插件
        'stylelint-config-standard',
        // 配置Vue中template样式格式化
        'stylelint-config-html/vue',
        // 配置stylelint css 插件
        'stylelint-config-standard-scss',
        // 配置vue中scss样式格式化
        'stylelint-config-recommended-vue/scss',
        // 配置stylelint css属性书写顺序插件
        'stylelint-config-recess-order',
        // 配置stylelint 和 prettier兼容
        'stylelint-config-prettier',
    ],
    overrides: [
        {
            files: ['**/*.(scss|css|vue|html)'],
            customSyntax: 'postcss-scss',
        },
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html'
        }
    ],
    ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.json',
        '**/*.md',
        '**/*.yaml',
    ],
    /**
     * null => 关闭该规则
     * always => 必须
     */
    rules: {
        // 在css中使用v-bind 不报错
        'value-keyword-case': null,
        // 禁止在具有较高优先级的选择器后出现背鳍覆盖的样式
        'no-descending-specificity': null,
        // URL 必须增加引号
        'function-url-quotes': 'always',
        // 关闭禁止空源码
        'no-empty-source': null,
        // 关闭强制选择器类名的格式
        'selector-class-pattern': null,
        // 禁止位置的属性(true 为不允许)
        'property-no-unknown': null,
        // 大括号之前必须有一个空格
        'block-opening-brace-space-before': 'always',
        // 关闭属性值前缀 --webkit-box
        'value-no-vendor-prefix': null,
        // 关闭 属性值前缀 --webkit-mask
        'property-no-vendor-prefix': null,
        'selector-pseudo-class-no-unknown': [
            // 不允许未知的选择器
            true,
            {
                ignorePseudoClasses: ['global', 'v-deep', 'deep']
            }
        ]
    }
}