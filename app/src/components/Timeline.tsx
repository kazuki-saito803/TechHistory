import React, { useState } from "react";
import { timelineData } from "../data/TimelineData.ts";
import { Modal } from "../components/ModalWindow.tsx";
import type { TimelineItem } from "../types";
import "../css/Timeline.css";

const classMap: { [key: string]: string } = {
    "本業": "main",
    "副業": "side",
    "自己学習": "learning",
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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<TimelineItem | null>(null);
    const categories = Array.from(new Set(timelineData.map((item) => item.category)));

    const [selectedCategory, setSelectedCategory] = useState("全て");
    const [startYear, setStartYear] = useState(fullStartYear);
    const [endYear, setEndYear] = useState(fullEndYear);

    const visibleYears = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
    const visibleMonths = generateMonthLabels(startYear, endYear);

    const handleClick = (project: TimelineItem) => {
        setSelectedProject(project);
        setModalOpen(true);
    };


    const filteredData = timelineData.filter((item) => {
        const itemStart = parseInt(item.start.slice(0, 4));
        const itemEnd = parseInt(item.end.slice(0, 4));

        const matchCategory = selectedCategory === "全て" || item.category === selectedCategory;
        const inRange = itemEnd >= startYear && itemStart <= endYear;

        return matchCategory && inRange;
    });

    return (
        <div className="timeline-container">
        {/* フィルターUI */}
        <div className="sticky-header">
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
        <table style={{  }}>
            <thead>
                <tr>
                    <th rowSpan={2} className="sticky-header">
                        プロジェクト/学習内容
                    </th>
                    {visibleYears.map((year) => (
                    <th
                        key={year}
                        colSpan={12}
                        className="year-header"
                    >
                        {year}
                    </th>
                  
                    ))}
                </tr>
                <tr>
                    {visibleMonths.map((m, i) => (
                        <th
                            key={i}
                            className="month-label"
                        >
                            {m.label.slice(5)}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index}>
                    <td className="sticky-cell">{item.title}</td>
                    {visibleMonths.map(({ label }, i) => {
                        const isActive = label >= item.start && label <= item.end;
                        return (
                            <td
                                key={i}
                                className={`timeline-cell ${isActive ? `active-cell ${classMap[item.category]}` : ""}`}
                                title={isActive ? `${item.title} (${item.category})` : ""}
                                onClick={isActive ? () => handleClick(item) : undefined}
                            />                          
                        );
                    })}
                    </tr>
                ))}
            </tbody>
        </table>
        {modalOpen && selectedProject && (
        <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            project={selectedProject}
        />
        )}
    </div>
  );
};

export default Timeline;
