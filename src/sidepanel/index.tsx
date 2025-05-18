import React, { useState } from 'react'

const SidePanel = () => {
  const [dataSource, setDataSource] = useState('currentPage')
  const [selectedTemplate, setSelectedTemplate] = useState('')

  const handleScrape = () => {
    // 实现爬取逻辑
  }

  return (
    <div style={{ borderRadius: '8px', border: '1px solid #ccc', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <img src="icon.png" alt="AI Web Scraper" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
        <h2>AI Web Scraper</h2>
      </div>
      <div>
        <h3>步骤1，选择数据源</h3>
        <div>
          <label>
            <input
              type="radio"
              value="currentPage"
              checked={dataSource === 'currentPage'}
              onChange={() => setDataSource('currentPage')}
            />
            当前页面
          </label>
        </div>
      </div>
      <div>
        <h3>步骤2，选择爬取模板</h3>
        <button onClick={() => {/* 添加模板逻辑 */}}>添加模板</button>
        <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
          <option value="">选择模板</option>
          <option value="field1">字段1</option>
          <option value="field2">字段2</option>
          <option value="field3">字段3</option>
        </select>
      </div>
      <div>
        <h3>步骤3，爬取数据</h3>
        <button onClick={handleScrape}>爬取</button>
      </div>
      <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
        <button>收起</button>
        <button>爬取</button>
        <button style={{ position: 'absolute', bottom: '0', right: '0' }}>设置</button>
      </div>
    </div>
  )
}

export default SidePanel