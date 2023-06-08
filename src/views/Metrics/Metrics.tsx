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
  EmptyMetric,
  EmptyTitle,
  DonutSmallIcon,
  TimelineIcon,
  BarChartIcon,
} from './styles';
import COLORS from '../../helpers/colors';
import { visualizationTypes } from '../../helpers/visualizationTypes';
import 'react-tooltip/dist/react-tooltip.css';

const MetricsView: FC<IMetricsProps> = (props: IMetricsProps) => {
  const {
    graphicsWithoutFinishDate,
    graphicsAccreditedClients,
    graphicsFullInterval,
    setStartDate,
    startDate,
    setEndDate,
    endDate,
    setVisualizationType,
    visualizationType,
    // esto deberia borrarse ya que va a estar incluído en lo otro.
    graphicsBlockedOrganizersByReports,
    graphicsTwoLines,
  } = props;
  const filteredGraphicsWithoutFinishDate = graphicsWithoutFinishDate?.pie.filter((obj: any) => obj.value !== 0);

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
        {filteredGraphicsWithoutFinishDate[index].name} - {value} (
        {(percent * 100).toFixed(0)}%)
      </text>
    );
  };

  const CustomizedLabel: FunctionComponent<any> = ({
    x, y, stroke, value,
  }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={15} textAnchor='middle'>
      {value}
    </text>
  );

  const CustomizedAxisTick: FunctionComponent<any> = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor='end'
        fill='#666'
        transform='rotate(-35)'
      >
        {payload.value}
      </text>
    </g>
  );

  const isEmpty = (data: any, key: string) => data?.every((object: any) => object[key] === 0);

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
        {isEmpty(graphicsWithoutFinishDate?.pie, 'value') ? (
          <ColumnDiv>
            <Subtitle style={{ marginRight: 10 }}>
              Estado de todos los eventos creados en la plataforma
            </Subtitle>
            <EmptyMetric>
              <DonutSmallIcon />
              <EmptyTitle> No hay eventos para este gráfico </EmptyTitle>
            </EmptyMetric>
          </ColumnDiv>
        ) : (
          <ColumnDiv>
            <RowDiv>
              <Subtitle style={{ marginRight: 10 }}>
                Estado de todos los eventos creados en la plataforma
              </Subtitle>
              <ReactTooltip id='my-tooltip' />
              <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content='La Fecha Fin corresponde a la fecha actual'
              >
                <InfoOutlinedIcon />
              </a>
            </RowDiv>

            <PieChart width={window.innerWidth / 3} height={380}>
              <Pie
                data={filteredGraphicsWithoutFinishDate}
                cx={window.innerWidth / 6.4}
                cy={180}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='value'
                label={renderCustomizedLabel}
              >
                <XAxis dataKey='name' />
                {filteredGraphicsWithoutFinishDate?.map(
                  (entry: any, index: any) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={donutColors[index % donutColors.length]}
                    />
                  ),
                )}
              </Pie>
            </PieChart>
          </ColumnDiv>
        )}
        {isEmpty(graphicsAccreditedClients, 'cantidad') ? (
          <ColumnDiv>
            <Subtitle style={{ marginRight: 10 }}>
              Cantidad de clientes acreditados
            </Subtitle>
            <EmptyMetric>
              <BarChartIcon />
              <EmptyTitle>
                {' '}
                Aún no hay clientes acreditados para estas fechas{' '}
              </EmptyTitle>
            </EmptyMetric>
          </ColumnDiv>
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
                {visualizationTypes?.map((option) => (
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
        {isEmpty(graphicsFullInterval?.eventsCreated, 'cantidad') ? (
          <ColumnDiv>
            <Subtitle style={{ marginRight: 10 }}>
              Cantidad de eventos ocurridos a lo largo del tiempo
            </Subtitle>
            <EmptyMetric>
              <TimelineIcon />
              <EmptyTitle>
                {' '}
                Aún no ocurrieron eventos para estas fechas{' '}
              </EmptyTitle>
            </EmptyMetric>
          </ColumnDiv>
        ) : (
          <ColumnDiv>
            <Subtitle>
              Cantidad de eventos ocurridos a lo largo del tiempo
            </Subtitle>
            <LineChart
              width={window.innerWidth / 3.2}
              height={380}
              data={graphicsFullInterval?.eventsCreated}
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
              <Subtitle style={{ marginRight: 10 }}>Organizadores bloqueados en base a denuncias</Subtitle>
              <ReactTooltip id='my-tooltip' />
              <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content='La Fecha Fin corresponde a la fecha actual'
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
          <ColumnDiv>
          <Subtitle style={{ marginRight: 10 }}>
          Top 10 organizadores con mas acreditados a lo largo del tiempo
          </Subtitle>
          <EmptyMetric>
            <TimelineIcon />
            <EmptyTitle>
              {' '}
              Aún no hay suficientes organizadores con acreditaciones{' '}
            </EmptyTitle>
          </EmptyMetric>
        </ColumnDiv>
        ) : (
          <ColumnDiv>
            <Subtitle>
              Top 10 organizadores con mas acreditados a lo largo del tiempo
            </Subtitle>
            <BarChart
              width={window.innerWidth / 3.2}
              height={340}
              data={graphicsFullInterval.top10}
              layout='vertical'
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis type='number' />
              <YAxis
                dataKey='name'
                type='category'
                width={150}
                tickMargin={5}
                mirror={false}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey='cantidad' fill='#8884d8' />
            </BarChart>
          </ColumnDiv>
        )}
        {!graphicsWithoutFinishDate?.pie ? (
          <ColumnDiv>
          <Subtitle style={{ marginRight: 10 }}>
          Eventos y usuarios denunciados a lo largo del tiempo
          </Subtitle>
          <EmptyMetric>
            <TimelineIcon />
            <EmptyTitle>
              {' '}
              Aún no hubo denuncias a eventos y usuarios para estas fechas{' '}
            </EmptyTitle>
          </EmptyMetric>
        </ColumnDiv>
        ) : (
          <ColumnDiv>
            <Subtitle>
              Eventos y usuarios denunciados a lo largo del tiempo
            </Subtitle>
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
