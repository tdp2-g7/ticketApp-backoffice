/* eslint-disable max-len */
import { FC } from 'react';
import {
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import { EmptyContainer } from '../EmptyPage/styles';
import { IMetricsProps } from './types';
import {
  ColumnDiv,
  GraphicsContainer,
  VisualizationTypeSelect,
  Subtitle,
  Title,
  RowDiv,
} from './styles';
import COLORS from '../../helpers/colors';
import { visualizationTypes } from '../../helpers/visualizationTypes';

const MetricsView: FC<IMetricsProps> = (props: IMetricsProps) => {
  const {
    graphicsWithoutFinishDate,
    graphicsAccreditedClients,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setStartDate,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setEndDate,
    setVisualizationType,
    visualizationType,
  } = props;

  // TODO delete when implements filters
  // setStartDate(new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000));
  // setEndDate(new Date());

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
            <PieChart width={window.innerWidth / 3} height={380}>
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
        {!graphicsAccreditedClients ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <RowDiv>
              <Subtitle>Cantidad de clientes acreditados</Subtitle>
              <VisualizationTypeSelect
                value={visualizationType}
                onChange={(e) => {
                  setVisualizationType(e.currentTarget.value);
                }}
              >
                <option value='' disabled>
                  Visualizar por
                </option>
                {visualizationTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </VisualizationTypeSelect>
            </RowDiv>

            <BarChart
              width={window.innerWidth / 3.2}
              height={380}
              data={graphicsAccreditedClients}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey='name'
                scale='point'
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray='3 3' />
              <Bar
                dataKey='cantidad'
                fill='#8884d8'
                background={{ fill: '#eee' }}
              />
            </BarChart>
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
