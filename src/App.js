import React, { useState } from 'react';
import translatedText from './Translator';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [outputText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    if(inputText){
        const getTranslatedText = await translatedText(inputText, targetLanguage);
        setTranslatedText(getTranslatedText);
    }else{
      alert("翻訳したい言葉を入力してください")
    }
  };

  return (
    <>
    <header className="headerZone">
      翻訳アプリ
    </header>
    <div className="explanation">翻訳したい言葉を入力してください(言語は自動で検出されます)</div>
<div className="mainZone">
      <textarea
      className="inputZone"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <select
      className="languageZone"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
                <option value="en">英語</option>
        <option value="ja">日本語</option>
        <option value="ko">韓国語</option>
        <option value="zh-CN">中国語（簡体）</option>
        <option value="zh-TW">中国語（繁体）</option>
      </select>
      <button className="translateBtn" onClick={handleTranslate}>翻訳する</button>
      <div className="outputZone">{outputText}</div>
      </div>
    </>
  );

}

export default App;
