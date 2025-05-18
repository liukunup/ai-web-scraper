import { defineManifest } from '@plasmohq/manifest'

export default defineManifest({
  name: 'AI Web Scraper',
  version: '1.0.0',
  description: '一个基于 LLM 的浏览器扩展，用于从任何网站上抓取数据并处理',
  // 移除 default_popup 配置
  action: {
    default_icon: 'icon.png'
  },
  options_ui: {
    page: 'options/index.html',
    open_in_tab: true
  },
  side_panel: {
    default_path: 'sidepanel/index.html'
  },
  permissions: [
    'activeTab',
    'storage',
    'scripting',
    'tabs'
  ],
  icons: {
    '16': 'icon16.png',
    '48': 'icon48.png',
    '128': 'icon128.png'
  },
  commands: {
    '_execute_side_panel': {
      'suggested_key': {
        'default': 'Ctrl+Shift+S',
        'mac': 'Command+Shift+S'
      },
      'description': '打开侧边栏'
    }
  },
  // 添加 background 脚本
  background: {
    service_worker: 'background/index.ts'
  }
})