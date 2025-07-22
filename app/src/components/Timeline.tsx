import React, { useState } from "react";
import { timelineData } from "../data/TimelineData.ts";
import "../css/Timeline.css";

const categoryColors: { [key: string]: string } = {
    "本業": "#4caf50",
    "副業": "#f44336",
    "自己学習": "#2196f3",
};

const fullStartYear = 2023;
const fullEndYear = 2025;

const generateMonthLabels = (start: number, end: number) => {
  const labels: { year: number; month: number; label: string }[] = [];
  for (let y = start; y <= end; y++) {
    for (let m = 1; m <= 12; m++) {
        labels.push({
            year: y,
            month: m,
            label: `${y}-${String(m).padStart(2, "0")}`,
        });
    }
  }
  return labels;
};

const Timeline: React.FC = () => {
    const categories = Array.from(new Set(timelineData.map((item) => item.category)));

    const [selectedCategory, setSelectedCategory] = useState("全て");
    const [startYear, setStartYear] = useState(fullStartYear);
    const [endYear, setEndYear] = useState(fullEndYear);

    const visibleYears = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
    const visibleMonths = generateMonthLabels(startYear, endYear);


    const filteredData = timelineData.filter((item) => {
        const itemStart = parseInt(item.start.slice(0, 4));
        const itemEnd = parseInt(item.end.slice(0, 4));

        const matchCategory = selectedCategory === "全て" || item.category === selectedCategory;
        const inRange = itemEnd >= startYear && itemStart <= endYear;

        return matchCategory && inRange;
  });

  return (
        <div style={{ overflowX: "auto", fontFamily: "sans-serif" }}>
        {/* フィルターUI */}
        <div className="stickyHeader">
            <label>
            カテゴリ:{" "}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="全て">全て</option>
                {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            </label>

            <label>
            開始年:{" "}
            <select value={startYear} onChange={(e) => setStartYear(Number(e.target.value))}>
                {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>{year}</option>
                ))}
            </select>
            </label>

            <label>
            終了年:{" "}
            <select value={endYear} onChange={(e) => setEndYear(Number(e.target.value))}>
                {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>{year}</option>
                ))}
            </select>
            </label>
        </div>

      {/* 年表 */}
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th rowSpan={2} className="stickyHeader">
                        プロジェクト/学習内容
                    </th>
                    {visibleYears.map((year) => (
                    <th
                        key={year}
                        colSpan={12}
                        style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        backgroundColor: "#eee",
                        border: "1px solid #ccc",
                        }}
                    >
                        {year}
                    </th>
                    ))}
                </tr>
                <tr>
                    {visibleMonths.map((m, i) => (
                        <th
                            key={i}
                            style={{
                            minWidth: 30,
                            fontSize: 10,
                            textAlign: "center",
                            border: "1px solid #ccc",
                            }}
                        >
                        {m.label.slice(5)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index}>
                    <td className="stickyCell">{item.title}</td>
                    {visibleMonths.map(({ label }, i) => {
                        const isActive = label >= item.start && label <= item.end;
                        const bgColor = categoryColors[item.category] || "#ccc";

                        return (
                        <td
                            key={i}
                            style={{
                            backgroundColor: isActive ? bgColor : "transparent",
                            border: "1px solid #eee",
                            cursor: isActive ? "pointer" : "default",
                            height: 20,
                            }}
                            title={isActive ? `${item.title} (${item.category})` : ""}
                            onClick={() => {
                            if (isActive) {
                                alert(`プロジェクト: ${item.title}\nカテゴリ: ${item.category}\n期間: ${item.start}〜${item.end}\nスキル: ${item.skill}\nその他: ${item.other}`);
                            }
                            }}
                        />
                        );
                    })}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Timeline;
