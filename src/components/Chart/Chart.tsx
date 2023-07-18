import React from 'react';
import classNames from 'classnames';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  Area,
  LabelList,
} from 'recharts';
import './Chart.scss';
import { DataList } from '../../types/DataList';

interface Props {
  isCold: boolean;
  isFahrenheit: boolean;
  list: DataList[];
}

export const Chart: React.FC<Props> = ({ isCold, list, isFahrenheit }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={71}
    >
      <AreaChart
        data={list}
        margin={
          {
            top: 10,
            right: -10,
            left: -10,
            bottom: -10,
          }
        }
        className="chart"
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffa25b" stopOpacity={1} />
            <stop offset="100%" stopColor="#fff4f4" stopOpacity={1} />
          </linearGradient>

          <linearGradient id="color--cold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#459de9" stopOpacity={1} />
            <stop offset="100%" stopColor="#fff4f4" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickSize={0}
          height={20}
          className="chart__XAsix"
        />
        <Tooltip
          contentStyle={
            {
              borderRadius: 5,
              padding: 5,
              opacity: 0.8,
            }
          }
        />
        <Area
          type="monotone"
          dataKey={classNames({
            '°C': !isFahrenheit,
            '°F': isFahrenheit,
          })}
          stroke={classNames({
            '#459de9': isCold,
            '#ffa25b': !isCold,
          })}
          fillOpacity={0.3}
          fill={classNames({
            'url(#color--cold)': isCold,
            'url(#color)': !isCold,
          })}
        >
          <LabelList
            dataKey={classNames({
              '°C': !isFahrenheit,
              '°F': isFahrenheit,
            })}
            position="top"
            className="chart__LabelList"
          />
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};
