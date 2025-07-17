"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { CodeBlockProps } from "@/types/atoms/CodeBlock.types";

export function CodeBlock({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist ? tabs[activeTab].language || language : language;
  const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines;

  return (
    <div className="relative w-full rounded-lg border border-gray-200 bg-gray-900 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-300">{filename}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 rounded bg-gray-700 px-2 py-1 text-xs text-gray-300 hover:bg-gray-600"
        >
          {copied ? (
            <IconCheck className="h-4 w-4" />
          ) : (
            <IconCopy className="h-4 w-4" />
          )}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      {/* Tabs */}
      {tabsExist && (
        <div className="flex border-b border-gray-700 bg-gray-800">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm ${
                activeTab === index
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}

      {/* Code */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={activeLanguage}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
          }}
          wrapLines={true}
          lineProps={(lineNumber) => {
            const style: React.CSSProperties = {};
            if (activeHighlightLines.includes(lineNumber)) {
              style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              style.display = "block";
              style.margin = "0 -1rem";
              style.padding = "0 1rem";
            }
            return { style };
          }}
        >
          {activeCode || ""}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
