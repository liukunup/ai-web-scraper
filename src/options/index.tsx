import React, { useState } from 'react'

const Options = () => {
  const [publicModel, setPublicModel] = useState('DeepSeek')
  const [privateModel, setPrivateModel] = useState('Ollama')

  return (
    <div>
      <h1>模型配置</h1>
      <div>
        <label>公有云模型服务:</label>
        <select value={publicModel} onChange={(e) => setPublicModel(e.target.value)}>
          <option value="DeepSeek">DeepSeek</option>
          <option value="SeedFlow">SeedFlow</option>
          <option value="Qwen">Qwen</option>
        </select>
      </div>
      <div>
        <label>私有化模型服务:</label>
        <select value={privateModel} onChange={(e) => setPrivateModel(e.target.value)}>
          <option value="Ollama">Ollama</option>
        </select>
      </div>
      <h1>模板管理</h1>
      {/* 模板管理功能待实现 */}
    </div>
  )
}

export default Options