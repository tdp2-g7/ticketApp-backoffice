/* eslint-disable max-len */
import { FC } from 'react';
import {
  Cell, Pie, PieChart, XAxis,
} from 'recharts';
import { EmptyContainer } from '../EmptyPage/styles';
import { IMetricsProps } from './types';
import {
  ColumnDiv, GraphicsContainer, Subtitle, Title,
} from './styles';
import COLORS from '../../helpers/colors';

const MetricsView: FC<IMetricsProps> = (props: IMetricsProps) => {
  const { graphicsWithoutFinishDate } = props;

  const donutColors = [
    COLORS.redMandy,
    COLORS.clementine,
    COLORS.greenLimeade,
    COLORS.electricViolet,
    COLORS.pink,
    COLORS.jordyBlue,
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    value,
    index,
  }: any) => {
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={`${donutColors[index % donutColors.length]}`}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {graphicsWithoutFinishDate.pie[index].name} - {value} (
        {(percent * 100).toFixed(0)}%)
      </text>
    );
  };

  return (
    <>
      <Title>Metricas</Title>
      <GraphicsContainer>
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>
              Estado de todos los eventos creados en la plataforma
            </Subtitle>
            <PieChart width={window.innerWidth / 3.1} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={200}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {graphicsWithoutFinishDate.pie.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>CAMBIAR GRAFICO</Subtitle>
            <PieChart width={window.innerWidth / 3.1} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={200}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {graphicsWithoutFinishDate.pie.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>CAMBIAR GRAFICO</Subtitle>
            <PieChart width={window.innerWidth / 3.1} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={200}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {graphicsWithoutFinishDate.pie.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>CAMBIAR GRAFICO</Subtitle>
            <PieChart width={window.innerWidth / 3.1} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={200}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {graphicsWithoutFinishDate.pie.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>CAMBIAR GRAFICO</Subtitle>
            <PieChart width={window.innerWidth / 3.1} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={200}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {graphicsWithoutFinishDate.pie.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>CAMBIAR GRAFICO</Subtitle>
            <PieChart width={window.innerWidth / 3.1} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={200}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {graphicsWithoutFinishDate.pie.map((entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
      </GraphicsContainer>
    </>
  );
};

export default MetricsView;
