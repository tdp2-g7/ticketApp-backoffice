/* eslint-disable max-len */
import { FC, FunctionComponent } from 'react';
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
  LineChart,
  Line,
  LabelList,
} from 'recharts';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { EmptyContainer } from '../EmptyPage/styles';
import { IMetricsProps } from './types';
import {
  ColumnDiv,
  GraphicsContainer,
  VisualizationTypeSelect,
  Subtitle,
  Title,
  RowDiv,
  StartCalendarContainer,
  Calendar,
  EndCalendarContainer,
  InfoOutlinedIcon,
} from './styles';
import COLORS from '../../helpers/colors';
import { visualizationTypes } from '../../helpers/visualizationTypes';
import 'react-tooltip/dist/react-tooltip.css';

const MetricsView: FC<IMetricsProps> = (props: IMetricsProps) => {
  const {
    graphicsWithoutFinishDate,
    graphicsAccreditedClients,
    graphicsFullInterval,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setStartDate,
    startDate,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setEndDate,
    endDate,
    setVisualizationType,
    visualizationType,
    // esto deberia borrarse ya que va a estar incluído en lo otro.
    graphicsBlockedOrganizersByReports,
    graphicsTwoLines,
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

  const CustomizedLabel: FunctionComponent<any> = ({
    x, y, stroke, value,
  }) => (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={15} textAnchor="middle">
        {value}
      </text>
  );

  const CustomizedAxisTick: FunctionComponent<any> = ({ x, y, payload }) => (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
  );

  return (
    <>
      <RowDiv style={{ marginTop: 18, marginBottom: 18 }}>
        <Title>Metricas</Title>
        <StartCalendarContainer>
          <Calendar
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='Fecha de Inicio'
            isClearable={true}
            className='datePicker'
          />
        </StartCalendarContainer>
        <EndCalendarContainer>
          <Calendar
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='Fecha de Fin'
            isClearable={true}
            className='datePicker'
            excludeDateIntervals={[
              { start: new Date(), end: new Date('2100-06-3') },
            ]}
          />
        </EndCalendarContainer>
      </RowDiv>

      <GraphicsContainer>
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <RowDiv>
              <Subtitle style={{ marginRight: 10 }}>
                Estado de todos los eventos creados en la plataforma
              </Subtitle>
              <ReactTooltip id='my-tooltip' />
              <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content='Esta métrica no soporta el filtro de “Fecha de Fin”'
              >
                <InfoOutlinedIcon />
              </a>
            </RowDiv>

            <PieChart width={window.innerWidth / 3} height={380}>
              <Pie
                data={graphicsWithoutFinishDate.pie}
                cx={window.innerWidth / 6.4}
                cy={180}
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
        {!graphicsFullInterval?.events_created ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>Cantidad de eventos creados a lo largo del tiempo</Subtitle>
            <LineChart
              width={window.innerWidth / 3.2}
              height={380}
              data={graphicsFullInterval.events_created}
              margin={{
                right: 30,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' height={50} tick={<CustomizedAxisTick />} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='cantidad' stroke='#8884d8'>
                <LabelList content={<CustomizedLabel />} />
              </Line>
            </LineChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <RowDiv>
              <Subtitle>Organizadores bloqueados en base a denuncias</Subtitle>
              <ReactTooltip id='my-tooltip' />
              <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content='La fecha fin corresponde a la fecha actual'
              >
                <InfoOutlinedIcon />
              </a>
            </RowDiv>
            <BarChart
              width={window.innerWidth / 3.2}
              height={380}
              data={graphicsBlockedOrganizersByReports}
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
                dataKey='value'
                fill='#8884d8'
                background={{ fill: '#eee' }}
              />
            </BarChart>
          </ColumnDiv>
        )}
        {!graphicsFullInterval?.top10 ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>Top 10 organizadores con mas acreditados a lo largo del tiempo</Subtitle>
            <BarChart width={window.innerWidth / 3.2 } height={340} data={graphicsFullInterval.top10} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} tickMargin={5} mirror={false}/>
              <Tooltip />
              <Legend />
              <Bar dataKey="cantidad" fill="#8884d8" />
            </BarChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <EmptyContainer />
        ) : (
          <ColumnDiv>
            <Subtitle>Eventos y usuarios denunciados a lo largo del tiempo</Subtitle>
            <LineChart
              width={window.innerWidth / 3.2}
              height={380}
              data={graphicsTwoLines}
              margin={{
                right: 30,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' height={50} tick={<CustomizedAxisTick />} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='eventos' stroke='#8884d8'>
                <LabelList content={<CustomizedLabel />} />
              </Line>
              <Line type='monotone' dataKey='usuarios' stroke='#86FEAE'>
                <LabelList content={<CustomizedLabel />} />
              </Line>
            </LineChart>
          </ColumnDiv>
        )}
      </GraphicsContainer>
    </>
  );
};

export default MetricsView;
