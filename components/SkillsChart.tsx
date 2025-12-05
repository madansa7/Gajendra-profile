import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { TOP_SKILLS_DATA, CERTIFICATIONS } from '../constants';
import { ShieldCheck } from 'lucide-react';

const SkillsChart: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          Clinical Proficiency
        </h3>
        {/* Increased height to 400px to ensure labels are not hidden */}
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={TOP_SKILLS_DATA}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#475569', fontSize: 13, fontWeight: 600 }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#0d9488"
                strokeWidth={3}
                fill="#14b8a6"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
           <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
            Core Competencies
          </h3>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="p-2 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-100 transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-slate-700 font-medium pt-1 group-hover:text-teal-800 transition-colors">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;