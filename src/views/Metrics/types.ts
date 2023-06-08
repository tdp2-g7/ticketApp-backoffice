export interface IMetricsProps {
  graphicsWithoutFinishDate: any;
  graphicsAccreditedClients: any;
  graphicsFullInterval: any;
  // esto deberia borrarse
  graphicsBlockedOrganizersByReports: any;
  graphicsTwoLines: any;
  // ---
  setStartDate: (date: Date) => void;
  startDate: Date;
  setEndDate: (date: Date) => void;
  endDate: Date;
  setVisualizationType: (value: any) => void;
  visualizationType: any;
}
